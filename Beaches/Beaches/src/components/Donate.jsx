import { useState, useContext } from "react";
import "./Donate.css";
import axios from "../context/axios";
import { AuthContext } from "../context/AuthContext";
import Navbar from "./Navbar";
import {ethers} from "ethers";


const Sell = () => {
  const [PublicAddress, setPublicAddress] = useState(null);
  const [FirstName, setFirstName] = useState(null);
  const [LastName, setLastName] = useState(null);
  const [Donation, setDonation] = useState(null);
  const [Organisation, setOrganisation] = useState(null);
  const [Type, setType] = useState(null);
  const [PhoneNumber, setPhoneNumber] = useState(null);

  const {contract} = useContext(AuthContext);
  
  async function submitHandler(e) {
    e.preventDefault();

    const transaction = await contract.funding(
      { value: ethers.utils.parseEther(`0.0000001`) }
    );
    const res = await transaction.wait();
    console.log("transaction : ", res.transactionHash)



    const sendData = {
      PublicAddress,
      FirstName,
      LastName,
      TransactionHash : res.transactionHash,
      Donation,
      Organisation,
      Type,
      PhoneNumber,

    };

    console.log(sendData);

    try {
      const res = await axios.post(`/putData`, sendData);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <div className="register">
          <div className="container">
            <div className="title">Donation Form</div>
            <div className="content">
              <form action="#">
                <div className="user-details">
                  <div className="input-box">
                    <span className="details">Donation Amount</span>
                    <input
                      type="Number"
                      placeholder="Enter your Price"
                      required
                      onChange={(e) => setDonation (e.target.value)}
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">Organisation Name</span>
                    <input
                      type="text"
                      placeholder="Enter your Organisation Name"
                      required
                      onChange={(e) => setOrganisation(e.target.value)}
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">Choose Organisation Type</span>
                    <select
                      name="Myproduct"
                      id="Product"
                      onChange={(e) => setType(e.target.value)}
                    >
                      <option value="">-- Select Type -- </option>
                      <option value="Private">Private</option>
                      <option value="Public">Public</option>
                    </select>
                  </div>
                  {/* <div className="input-box">
                    <span className="details">Quantity</span>
                    <input
                      type="Number"
                      placeholder="Enter your Price"
                      required
                      onChange={(e) => setQuantity(e.target.value)}
                    />
                  </div> */}
                  {/* <div className="input-box">
                    <span className="details">Email</span>
                    <input
                      type="text"
                      placeholder="Enter your Email"
                      required
                    />
                  </div> */}
                  <div className="input-box">
                    <span className="details">Phone Number</span>
                    <input
                      type="text"
                      placeholder="Enter your Phone Number"
                      required
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">First Name</span>
                    <input
                      type="text"
                      placeholder="Enter your First Name"
                      required
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">Last Name</span>
                    <input
                      type="text"
                      placeholder="Enter your Last Name"
                      required
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                  <div className="input-box">
                    <span className="details public">Public Address</span>
                    <input
                      type="text"
                      placeholder="Enter your Public Address"
                      style={{ width: "500px" }}
                      required
                      onChange={(e) => setPublicAddress(e.target.value)}
                    />
                  </div>
                </div>
                <div className="button">
                  <input
                    type="submit"
                    onClick={(e) => submitHandler(e)}
                    value="Submit"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer/> */}
    </div>
  );
};

export default Sell;

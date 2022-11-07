import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

const Search = () => {
  const navigate = useNavigate();
  return (
    <section className='container px-4 my-16 grid gap-8 md:grid-cols-3'>
      <div className='md:col-span-2'>
        <h3 className='uppercase font-extrabold mb-4'>
          How We Aim To Conquer It!
        </h3>
        <p className='mb-8 text-sm text-gray-600 text-justify'>
        SHIKSHA is a public blockchain-based transparent interface through which government funds are transacted transparently. Basically, the government changes the actual currency into the cryptocurrency (ethers) and transfer it to the blockchain network, where it is handled by smart contracts. We are also providing an interface through which we are raising the funds from the public, through which any citizen or private company as a part of social work can fund the government's education schemes, which in turn provide the chance for public involvement in the decision-making process. During any transaction of currency towards any scheme, everyone involved in the network gets a chance to authorise the transaction. We follow a 50% percent consensus rule only when more than 50% of the nodes have accepted the transaction can it proceed. Every node Participated in the network can work cooperatively by giving suggestions for the allocation of funds.
        </p>
        <div className='flex flex-row flex-nowrap'>
          <div className='text-center'>
            <h4 className='uppercase font-extrabold mb-2'>Future Vision</h4>
            <p className='uppercase text-gray-600'>
            In the future, we would like to introduce the use of stable coins (CBDC) Central Bank Digital Currency.
            </p>
          </div>
          <div className='text-center'>
            <h4 className='uppercase font-extrabold mb-2'>Privatisation?</h4>
            <p className='uppercase text-gray-600'>
              Privatisation Helps in bringing more Responsibility in the System!
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className='border px-4 py-4 uppercase text-center'>
          <p className='py-2'>Your Contributions are validated here!</p>
          <p className='py-2'>And Donate too with all the details!</p>
          <button className='py-2 text-white bg-black cursor-pointer' onClick={()=>navigate('Donate')} >
            Donate Now!
          </button>
        </div>
        <br/><br/>
        <div>
        <div className='border px-4 py-4 uppercase text-center'>
          <p className='py-2'>You Can Check your Donations!</p>
          <p className='py-2'>Check you donations too with all the details!</p>
          <button className='py-2 text-white bg-black cursor-pointer' onClick={()=>navigate('Tables')}>
             Check Table!
          </button>
        </div>
        
      </div>
      </div>
      
    </section>
  );
};

export default Search;

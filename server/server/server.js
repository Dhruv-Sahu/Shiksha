// var sid = 'ACcb2757f886aad1a2e4b070712de5f3d8';
// var auth = '07c2809fe4be0a734bb71bc74e9529c0'

// var twilio = require('twilio')(sid, auth)

let express = require('express');
let app = express();
let cors = require('cors')
let mongoose = require('mongoose');

// const fast2sms = require('fast-two-sms');

// const { ObjectId } = require('mongodb')
app.use(cors())
// const { v4: uuid } = require('uuid');
app.use(express.json());

require('dotenv').config


const SellerModel = require('./Schema');
// mongodb+srv://nishant:nishant@cluster0.cer6fkc.mongodb.net/?retryWrites=true&w=majority
mongoose.connect('mongodb://localhost:27017/Donaters',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

app.get("/",async(req,res)=>{
        try {
            res.status(200).json({
                status: "Successful",
                message: "Data Saved In DataBase "
            });
        } catch (err) {
            res.status(200).json({
                status: "error",
                message: "Could Not able to send the post"
            });
        }
})
    
app.post("/putData", async (req, res) => {
    try {
        console.log(req.body)
        const post = await SellerModel.create(req.body);
        res.status(200).json({
            status: "Successful",
            message: "Data Saved In DataBase "
        });
    } catch (err) {
        res.status(200).json({
            status: "error",
            message: "Could Not able to send the post"
        });
    }
});



app.get('/getData', (req, res) => {
    SellerModel.find(function (err, data) {
        if (err) {
            console.log(err);
        }
        else {
            res.send(data);
            console.log(data)
        }
    });
});



//fast-two-sms ---- uselesss
// app.post('/sendMessage', async(req,res)=>{


//     console.log(req.body.phoneNumber)

//     twilio.messages.create({
//         from : '+18583659890',
//         to : '+91'+req.body.phoneNumber,
//         body : "https://aarush-hack.netlify.app/",
//     })
//     .then((r)=>{
//         console.log("done")
//         res.status(200).json({
//                 status : "Successful",
//                 })
//     })
//     .catch((err)=>{
//         console.log(err)
//         res.status(404).json({
//             status: "error"
//         })
//     })

// })


// twillio lets see



// Sid: String,
//     FirstName: String,
//     LastName: String,
//     PublicAddress: String,
//     Quantity: Number,
//     Price: Number,
//     ShopName: String,
//     Object: String

var server = app.listen(process.env.port||8081, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log(`Example app listening at ${host}:${port}`)
})

// Backend Link- https://shiksha-hack.herokuapp.com/
// added basic / get request, improve that
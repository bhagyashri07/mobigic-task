const express = require("express");
const connectToMongo = require('./db');

const PORT = process.env.PORT || 5000;
const app = express();
const cors = require('cors');
const path = require("path");
const bodyParser = require('body-parser');
const fileRoutes = require('./routes/file-upload-routes');
const SingleFile = require("./model/singlefile");




connectToMongo();

app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

///////userroutes/////
const signUp = require("./routes/userRoute")
const signIn = require("./routes/userRoute");






app.use(cors())
app.use(express.json());
app.use(bodyParser.json());


app.use('/api', fileRoutes.routes);


// //download file path---http://localhost:5000/download/:id
// app.get('/download/:id',(req,res)=>{
//     SingleFile.find({id:req.params.id},(err,data)=>{
//       if(err){
//           console.log(err)
//       }
//       else{
//          // var path=__dirname+'/backend/public/';
//           res.download(path);
//       }
//   })
// })




////////user////
app.use("/api", signUp)////////http://localhost:5000/api/signUp
app.use("/api", signIn)////////http://localhost:5000/api/signIn



/////////database connection


app.listen(PORT, () => {
    console.log("Server is running at port " + PORT)
})
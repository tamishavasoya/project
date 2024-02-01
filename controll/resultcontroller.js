var resultmodel= require('../model/resultmodel');
// const storage = require('node-persist');
// storage.init( /* options ... */ );


// exports.get_data = async ( req,res ) => {

//     var data = await resultmodel.find();
//     // var data = await usermodel.find().skip(2);
//     // var data = await usermodel.find().limit(1).count();

//     res.status(200).json({
//         data
//     })
//  }





exports.res_insert=async(req,res)=>
{
    // var b_pass = await bcrypt.hash(req.body.password,10);

    // req.body.password = b_pass;

    var mk1=req.body.s1;
    var mk2=req.body.s2;
    var mk3=req.body.s3;
    var mk4=req.body.s4;
    var mk5=req.body.s5;

    var tot=parseInt(mk1)+parseInt(mk2)+parseInt(mk3)+parseInt(mk4)+parseInt(mk5)
    req.body.total=tot;


    var data=await resultmodel.create(req.body);

    res.status(200).json({
        data
    })
}
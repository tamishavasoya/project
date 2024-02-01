var studentmodel= require('../model/studentmodel');


exports.stu_get = async ( req,res ) => {

    var data = await usermodel.find();
    res.status(200).json({
        data
    })
 }
exports.stu_insert=async(req,res)=>
{
    
    var data=await studentmodel.create(req.body);

    res.status(200).json({
        data
    })
}
// exports.stu_login=async(req,res)=>
// {
//     var data=await studentmodel.find({"email":req.body.email});
//   if(data.length==1){
//         // user=1;
        
//             if(result==true){

//                 res.status(200).json({
//                     status:"login",
//                 })
//             }
//             else
//             {
//                 res.status(200).json({
//                     status:"check your email and password"
//                 })
//             }
//     }
//     else
//     {
//         res.status(200).json({
//             status:"check your email and password"
//         })
//     }
// }
// exports.stu_logout=async(req,res)=>{
//     res.status(200).json({
//         status:"user is logout"
//     })
// }

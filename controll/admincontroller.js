var adminmodel= require('../model/adminmodel');

exports.add_get = async ( req,res ) => {

    var data = await adminmodel.find();
    
    res.status(200).json({
        data
    })
 }
 exports.add_insert=async(req,res)=>
{
   
    var data=await resultmodel.create(req.body);

    res.status(200).json({
        data
    })
}
exports.add_login=async(req,res)=>
{
    var data=await adminmodel.find({"email":req.body.email});

    if(data.length==1){
        // user=1;


            if(result==true){

                res.status(200).json({
                    status:"login",
                })
            }
            else
            {
                res.status(200).json({
                    status:"check your email and password"
                })
            }
        
        }
}
exports.add_logout=async(req,res)=>{
    res.status(200).json({
        status:"user is logout"
    })
}


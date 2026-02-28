import mongoose from "mongoose";


const ConnectDb:()=>Promise<void> = async()=>{

    const url = process.env.Connection_String
    console.log(url);
    if(!url){
        throw new Error('Connection Url is Missing.......')
    }

    // now check the connection that if connection exist or not
    if(mongoose.connection.readyState===1){
        console.log("Database Already Connect");
        return
    }
    try {
        await mongoose.connect(url)
        console.log("Database Connection Success");
    } catch (error) {
        console.log("Something went wrong " , error);
        process.exit(1)
    }

}

export default ConnectDb
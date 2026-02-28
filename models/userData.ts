import mongoose , {Schema , Document, model} from "mongoose";


export interface UserText extends Document{
      Userid : string,
      BusinessName:string,
      email:string,
      text:string
}


const UserDataSchema:Schema<UserText> = new Schema({
    Userid:{
         type:String,
        required:[true , 'Userid Required'],
        trim:true,
        toLowerCase:true ,
        minlength:3 ,
        unique:true
    },
    BusinessName:{
         type:String,
        required:[true , 'BusinessName Required'],
        trim:true,
        toLowerCase:true ,
        minlength:3
    } , 
    email:{
           type:String,
        required:[true , 'Email Required'],
        toLowerCase:true ,
        unique:true ,
        match:[/.+\@.+\..+/ , 'Enter Email With Proper Format'] 
    },
    text:{
           type:String,
        required:[true , 'BusinessText Required'],
        trim:true,
        toLowerCase:true ,
        minlength:3
    }
} , {timestamps:true})


const UserDataModel = mongoose.models.UserData || model('UserData' , UserDataSchema)
export default UserDataModel

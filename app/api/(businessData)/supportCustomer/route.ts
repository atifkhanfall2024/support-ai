import ConnectDb from "@/lib/connection";
import UserDataModel from "@/models/userData";
import { NextRequest, NextResponse } from "next/server";
import validator from 'validator'

export async function POST(req:NextRequest) {
    try {
        
        await ConnectDb()
    const {Userid  , BusinessName , email , text} = await req.json()
     if (!Userid || !BusinessName || !email || !text) {
      return NextResponse.json({ message: "All fields are required" }, { status: 400 });
    }
    if(!validator.isEmail(email)){
       return NextResponse.json({message:"Invalid Email"},{status:401})
    }

    const userData = await UserDataModel.findOneAndUpdate(
        {Userid},
        {
          Userid , 
          BusinessName ,
          email , 
          text },
{new:true , upsert:true})

    await userData.save()
    return NextResponse.json({message:"Business Information Store Success"},{status:200})

    } catch (error) {
      return NextResponse.json(
  { message: error instanceof Error ? error.message : "Something Went Wrong" },
  { status: 500 }
);
    }
}




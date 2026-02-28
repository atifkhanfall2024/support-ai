import ConnectDb from "@/lib/connection";
import UserDataModel from "@/models/userData";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req:NextRequest) {
    try {
        
        await ConnectDb()
    const {Userid} = await req.json()
     if (!Userid) {
      return NextResponse.json({ message: "id fields are required" }, { status: 400 });
    }
    

    const userData = await UserDataModel.findOne(
        {Userid},
    )
    
    if(!userData){
        return  NextResponse.json({message:"User Id not present"},{status:401})
    }
 
    return NextResponse.json({message:userData},{status:200})

    } catch (error) {
      return NextResponse.json(
  { message: error instanceof Error ? error.message : "Something Went Wrong" },
  { status: 500 }
);
    }
}

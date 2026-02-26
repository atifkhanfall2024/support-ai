import { scalekit } from "@/lib/Scalekit";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest) {
    try {
        const redirectUri= 'http://localhost:3000/api/callback'
        const url = 'http://localhost:3000/dashboard'
         const {searchParams} = new URL(req.url)
    const code =  searchParams.get("code")
    console.log("My code :> " , code);
    if(!code){
        return NextResponse.json({message:"Code is not Present"} , {status:400})
    }

    // if code is present then pick that code and store inside cookies
    const session = await scalekit.authenticateWithCode(code , redirectUri)
    //console.log(session);
    const res =  NextResponse.redirect(url)
    res.cookies.set("token" , session.accessToken , {
        httpOnly:true,
        maxAge:24*60*60*1000,
        secure:false,
        path:'/'
    })

    return res


    } catch (error) {
        return NextResponse.json({message:error} , {status:500})
    }
}
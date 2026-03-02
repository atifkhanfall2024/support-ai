import { NextRequest, NextResponse } from "next/server";
import {scalekit} from '@/lib/Scalekit'

export async function GET(req:NextRequest){
    const redirectUri= `${process.env.URL}/api/callback`
    //console.log(redirectUri);
    const uri  = scalekit.getAuthorizationUrl(redirectUri)
     //console.log(uri);
     // this will give authorized url of user
    return NextResponse.redirect(uri)
}
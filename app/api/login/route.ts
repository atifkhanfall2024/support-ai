import { NextRequest, NextResponse } from "next/server";
import {scalekit} from '@/lib/Scalekit'

export async function GET(req:NextRequest){
    const redirectUri= 'http://localhost:3000/api/callback'

    const uri  = scalekit.getAuthorizationUrl(redirectUri)
     //console.log(uri);
    return NextResponse.redirect(uri)
}
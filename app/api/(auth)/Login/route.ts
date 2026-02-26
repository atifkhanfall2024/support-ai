import { NextRequest, NextResponse } from "next/server";
import {scalekit} from '@/lib/Scalekit'

export async function GET(req:NextRequest){
    const redirectUri= 'http://localhost:3000/api/Login'

    const uri  = scalekit.getAuthorizationUrl(redirectUri)

    return NextResponse.json({uri})
}
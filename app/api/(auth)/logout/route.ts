import { NextResponse } from "next/server";
import ConnectDb from "@/lib/connection";

export async function POST() {
  //await ConnectDb()
  const response = NextResponse.json({message:"Logout Success" ,  success: true });

  response.cookies.delete("token");

  return response;
}
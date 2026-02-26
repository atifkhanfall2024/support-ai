import {cookies} from 'next/headers'
import {scalekit} from '../lib/Scalekit'
export async function VerifyToken(){

    try {
         const token = await cookies()
    const GetToken = token.get("token")?.value
    console.log(GetToken);
    if(!GetToken){
        return "Token is not Present"
    }

    const session = await scalekit.validateToken(GetToken)
    console.log(session);
    const user = await scalekit.user.getUser(session.sub)
    return user
    } catch (error) {
        console.log(error);
    }


}
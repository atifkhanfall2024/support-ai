import Embed from "../../../../components/embedded/embed"
import { VerifyToken } from "../../../../lib/Auth"
export default async function Embeded(){

    const session = await VerifyToken()
    console.log(session);
    return(
        <>
        <Embed ownerid={session?.user?.id}/>
        </>
    )
}
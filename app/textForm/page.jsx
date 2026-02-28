import { VerifyToken } from "../../lib/Auth"
import Data from "../../components/FormSection/useridsection";
import Nav from "../../components/FormSection/nav";

const TextPage = async()=>{

    const user = await VerifyToken()
    //console.log(user?.user?.id);

    return(
        <>
        <Nav picture = {user?.user?.userProfile?.picture}/>
        <Data Userid = {user?.user?.id}/>
     </>
    )
}

export default TextPage
import { Geist, Geist_Mono } from "next/font/google";
import { VerifyToken } from "../../../lib/Auth"
import Nav from '../../../components/Navbar/Nav'
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default async function RootLayout({children}) {

    const session =  await VerifyToken()
    console.log("User Session ;> " , session);

  return (
         <>
         <Nav  email={session?.user?.email}/>
        {children}</>
  );
}

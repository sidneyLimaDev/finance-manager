import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

async function Home() {
  const {userId} = await auth()
  if (!userId){
    redirect('/login')
  }
  return (
    <UserButton showName/>

  )
}

export default Home;
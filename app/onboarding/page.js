

"use client"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { authOptions } from "@/pages/api/auth/[...nextauth]"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { signOut } from "next-auth/react"
// import { supabase } from "@/utils/supabase"
import { useEffect, useState } from "react"

export default async function OnboardingPage() {
  const session = await getServerSession(authOptions)
  // const [details, setdetails] = useState([])


  // useEffect(() =>{
  //   async function getdetails(){
  //     const {data: details} = await supabase.from('details').select()
  //   }
  // })

  // function selectpro() {
  //     redirect('/selectprojects')
  // } 


  // function back() {
     
  //   if(session){
  //     redirect('/onboarding')
  //   }else{
  //     redirect('/')
  //   }
  // }



  if (!session) {
    redirect("/")
  }

  return (
    <div className="m-5 justify-items-center-safe">
      <h3 className="mr-140 font-light">dev/username</h3>
      <h3 className="text-end text-gray-600 ml-150">Step 1 of 5</h3>

      <hr />

      <h1 className="mt-8 mr-120 text-3xl whitespace-nowrap font-bold">Profile Basics</h1>
      <h3 className="mr-70 whitespace-nowrap mt-4 text-gray-500">Help others understand who you are and what you do.</h3>


      <form className="mt-3 space-y-3 w-172 font-serif">
        <label className="block">Full Name
          <Input type="name" placeholder="Jane Doe" className="mt-1" required />
        </label>

        <label className="block">Role / Headline
          <Input type="text" placeholder="Full-Stack Developer" className="mt-1" required />
        </label>


        <label className="block">
          What are you building right now?
          <Input className="mt-1" type="text" placeholder="I'm working on building scalable web applications using Next.js and Typescript..." required />
        </label>

        <label className="block">
          Location (optional)

          <Input className="mt-1" type="location" placeholder="San Francisco, CA" />
        </label><hr className="mt-7 text-gray-300 " />


        <div className="flex flex-wrap items-center gap-2 md:flex-row mt-5">
          <Button variant="outline" className="w-30  text-black text-shadow-white border-none hover:bg-blue-500 p-5">Back</Button>
          <Button variant="outline"  className="ml-80 w-50 bg-black text-white ">Continue</Button>

        </div>


      </form>

    </div>



  )
}




// DevDB


// DEVSACHINMEHTA
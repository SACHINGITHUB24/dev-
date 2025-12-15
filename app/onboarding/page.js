"use client"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { authOptions } from "@/pages/api/auth/[...nextauth]"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { signOut } from "next-auth/react"

export default async function OnboardingPage() {
  const session = await getServerSession(authOptions)
  

  if (!session) {
    redirect("/")
  }

  return (
    <div className="justify-center align-center text-center ">
      <h3>dev/{session.user.name}</h3>
      <h3>Step 1 of 5</h3>
      <Progress value={33} />

      <progress className="w-50 h-2 bg-purple-500 ml-15 " id="file-progress" value="20" max="100">50%</progress>
      
      <hr />
      
      <h1>Profile Basics</h1>
      <h3>Help others understand who you are and what you do.</h3>
      <form>
        <label>Full Name
         <Input type="email" placeholder="Email" />
          </label> 

          <label>Role / Headline
           <Input type="email" placeholder="Email" />
          </label>


          <label>
            What are you building right now?
            <Input type="email" placeholder="Email" />
          </label>

          <label>
            Location (optional)

            <Input type="email" placeholder="Email" />
          </label><hr />

<div className="flex flex-wrap items-center gap-2 md:flex-row">
<Button variant="outline">Button</Button>
<Button variant="outline">Button</Button>

</div>


      </form>



  
  
    </div>



   

    
  )
}

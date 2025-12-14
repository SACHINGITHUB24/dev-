// "use client"
// import React, { useState } from 'react'
// import { useOptimistic, useTransition } from "react"
// import { LuGithub } from "react-icons/lu";

// const SignUp = () => {
 
//     const [isPending, startTransition] = useTransition()
//     const [loading, setLoading] = useState(false);

//     async function handlegitlog() {
//         await new Promise((res) => setTimeout(res,1500))
//         console.log('Github Login Started');
        
//     }

//     const onclick = () => {
//         startTransition(async () => {
//             setLoading(true) 

//             await handlegitlog()
//             setLoading(false)

//         })
//     }
    
//   return (
   

//     <div className='min-h-screen justify-center align-center ml-140 mt-50'>
//         <div className="w-full max-w-md text-center space-y-6">
//        <h1 className='text-5xl bold font-mono ml-15 md:text-5xl'>dev/username</h1>
//    <h3 className='mt-5 text-xl font-stretch-75% ml-3'>Create your public developer identity in minutes. </h3>
//      <button onClick={onclick} disabled={isPending} className='flex mt-10 text-center align-center  justify-center rounded w-115 p-2 gap-2 bg-black text-white items-center'><LuGithub />{isPending ? "Connecting Github..." : "Continue with Github"}</button>
//      <p className='mt-5 text-sm'>We'll use your GitHub profile to showcase your real work and contributions</p>

//      <h5 className='mt-5 text-center mr-120'>Trusted by Developers</h5>




// </div>
     
//    </div>
//   )
// }

// export default SignUp





"use client"
import React, { useState, useTransition } from "react"
import { LuGithub } from "react-icons/lu"

const SignUp = () => {
  const [isPending, startTransition] = useTransition()
  const [loading, setLoading] = useState(false)

  async function handlegitlog() {
    await new Promise((res) => setTimeout(res, 1500))
    console.log("Github Login Started")
  }

  const onclick = () => {
    startTransition(async () => {
      setLoading(true)
      await handlegitlog()
      setLoading(false)
    })
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md text-center space-y-6">
        
        <h1 className="text-5xl md:text-15xl font-mono bold">
          dev/username
        </h1>

        <h3 className="text-base md:text-xl text-muted-foreground">
          Create your public developer identity in minutes.
        </h3>

        <button
          onClick={onclick}
          disabled={isPending}
          className="w-full sm:w-auto mx-auto flex items-center justify-center gap-2 rounded bg-black px-4 py-2 text-white transition-opacity disabled:opacity-70"
        >
          <LuGithub />
          {isPending ? "Connecting GitHub..." : "Continue with GitHub"}
        </button>

        <p className="text-sm text-muted-foreground">
          We'll use your GitHub profile to showcase your real work and contributions
        </p>

        <h5 className="text-sm font-medium text-muted-foreground">
          Trusted by Developers
        </h5>

      </div>
    </div>
  )
}

export default SignUp

"use client"

import { WebApp } from "@/node_modules/@twa-dev/sdk/dist/sdk";
import { useEffect, useState } from "react";

interface UserData { 
  id : Number; 
  first_name: string; 
  last_name? : string;
  username? : string;
  is_premimum? : boolean; 
  language_code : string
}

export default function Home() {

  const [userData, setuserData] = useState<UserData | null>(null)

  useEffect(() => {

    if(WebApp.initDataUnsafe.user){
      setuserData(WebApp.initDataUnsafe.user as UserData) ; 

    }

  }, [])
  

  return (
   <>
   {
    userData ? (
      <div>
            <div> User details</div>
            <div>
                <h1> name : {userData.first_name}</h1>
            </div>
      </div>
    ):(
          <div>Loading ... ... . . . </div>
      )
   }
   </>
  );
}

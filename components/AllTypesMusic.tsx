
import {Quicksand} from "next/font/google"

const just = Quicksand({
    subsets: ['latin'],
    display: 'swap',
    weight: "600"
}) 

import GroupCardMusic from "./cards/GroupCardMusic";







export default function AllTypeMusic(){

   
    


    return(
        <>
        <div className={just.className}>
        <div className=" mt-52 mb-10 flex justify-center text-9xl font-bold " >
            <h1 className=" ">
             The Best               
              <span
             className=" 
             text-green-500"
             > Music
             </span>
            </h1>
        </div>
        </div>

        <div className=" flex justify-center my-2">
            
         <GroupCardMusic/>
         
         






        </div>
        


        
        
        
        
        
        
        
        
        </>












    );













}


































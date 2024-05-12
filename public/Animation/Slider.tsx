"use client"

import Image from "next/image";
import Marquee from "react-fast-marquee";


export default function Slider(){


    const  ImageSrc=[
     {
        title :"Discord by Icon Mafia",
        src :"/Logos/discord.png"
     },
     
     {
        title :"Vimeo by Icon Mafia on IconScout",
        src :"/Logos/vimeo.png"
     },
     
     {
        title :"Amazon by Icon Mafia",
        src :"/Logos/amazon.png"
     },
     
     {
        title :"spotify",
        src :"/Logos/spotify (1).png"
     },
     
     {
        title :"Youtube by Icon Mafia",
        src :"/Logos/youtube (1).png"
     },
     
     {
        title :"Twitch",
        src :"/Logos/twitch.png"
     },
     
     {
        title :"Dribbble by Icon Mafia on IconScout",
        src :"/Logos/dribbble (1).png"
     },
     
     {
        title :"Dropbox by Icon Mafia on IconScout",
        src :"/Logos/dropbox.png"
     },
     
     {
        title :"Tinder by Icon Mafia on IconScout",
        src :"/Logos/tinder.png"
     },
     
     {
        title :"Instagram",
        src :"/Logos/instagram (1).png"
     },
     
     {
        title :"Snapchat by Enamo Studios on IconScout",
        src :"/Logos/snapchat.png"
     },
     
     {
        title :"Appstore by Icon Mafia on IconScout",
        src :"/Logos/appstore.png"
     },
     
    ]

    

 return(
   <>
   <Marquee
   speed={150}
   pauseOnClick={true}
   loop={0}
   
   >
     {/* <div className="flex flex-row justify-between mx-5"> */}
       {ImageSrc.map((item, index) => (
         <div className="  px-6 " key={index}> 
           <Image
             src={item.src}
             alt={item.title}
             height={100}
             width={100}
             className=""
           />
         </div>
       ))}
     {/* </div> */}
   </Marquee>
 </>















 );


}
































import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";

import { SiNeteasecloudmusic } from "react-icons/si";



export default function GroupCardMusic() {
  return (
    <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8 ">
    <Card className="col-span-12 sm:col-span-4 h-[300px] ">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className=" text-tiny text-white/60 uppercase font-bold">Top Beats</p>
      
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover hover:blur-sm"
        src="https://images.unsplash.com/photo-1483000805330-4eaf0a0d82da?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />  

      
    </Card>
    <Card className="col-span-12 sm:col-span-4 h-[300px]">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Retro Music</p>
        
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover hover:blur-sm"
        src="https://cdn.pixabay.com/photo/2017/11/15/09/28/music-player-2951399_1280.jpg"
      />
    </Card>
    <Card className="col-span-12 sm:col-span-4 h-[300px]">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-2xl text-white/60 uppercase font-bold">Top Rhythm</p>
        
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover hover:blur-sm"
        src="/ms_2.jpg"
      />
    </Card>
    <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Beat Mix</p>
       
      </CardHeader>
      <Image
        removeWrapper
        alt="Card example background"
        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover hover:blur-sm"
        src="/CardGroup/music-7238254_1280.jpg"
      />
      <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
        <div>
          <p className="text-black text-tiny">Available soon.</p>
          <p className="text-black text-tiny">Get notified.</p>
        </div>
        <Button className="text-tiny" color="primary" radius="full" size="sm">
          Notify Me
        </Button>
      </CardFooter>
    </Card>
    <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Lo-Fi</p>
       
      </CardHeader>
      <Image
        removeWrapper
        alt="Relaxing app background"
        className="z-0 w-full h-full object-cover hover:blur-sm"
        // src="https://cdn.pixabay.com/photo/2024/03/30/08/24/ai-generated-8664289_1280.jpg"
        src="https://cdn.pixabay.com/photo/2024/01/17/16/09/ai-generated-8514977_1280.png"
      />
      <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <div className="flex flex-grow gap-2 items-center">
          <SiNeteasecloudmusic
           className=" size-10 text-green-400"
          />
          <div className="flex flex-col">
            <p className=" text-white/60 text-xl font-bold">BeatBlend</p>
            <p className="text-tiny text-white/60">Get The Best Music</p>
          </div>
        </div>
        <Button radius="full" size="sm">Get App</Button>
      </CardFooter>
    </Card>
  </div>
  );
}

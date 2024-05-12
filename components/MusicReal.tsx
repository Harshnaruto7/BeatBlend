"use client"
import React,{useState} from "react";
import {Card, CardBody, Image, Button, Slider} from "@nextui-org/react";
import {HeartIcon} from "./cards/MusicReal/HeartIcon";
import {PauseCircleIcon} from "./cards/MusicReal/PauseCirclelcon";
import {NextIcon} from "./cards/MusicReal/NextIcon";
import {PreviousIcon} from "./cards/MusicReal/PreviousIcon";
import {RepeatOneIcon} from "./cards/MusicReal/RepeatOneIcon";
import {ShuffleIcon} from "./cards/MusicReal/ShuffleIcon";
import WaveAnimate from "@/public/Animation/WaveAnimate";

export default function MusicReal() {
  const [liked, setLiked] = useState(false);

  return (
    <>
    <Card
      
      className="border-none  bg-background/90 dark:bg-default-100/50 max-w-[610px]"
      shadow="sm"
    >
      <CardBody>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
          <div className="relative col-span-6 md:col-span-4">
            <Image
              alt="Album cover"
              className=" object-cover"
              height={500}
              shadow="md"
              src="/singers/Dua_new.jpeg"        
              width="100%"
            />
          </div>

          <div className="flex flex-col col-span-6 md:col-span-8">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-0">
                <h3 className="font-semibold text-foreground/90">Dua Lipa</h3>
                <p className="text-small text-foreground/80">Levitating</p>
                <h1 className="text-large font-medium mt-2">Can't Star Now</h1>
              </div>
              <Button
                isIconOnly
                className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
                radius="full"
                variant="light"
                onPress={() => setLiked((v) => !v)}
              >
                <HeartIcon
                  className={liked ? "stroke-transparent" : ""}

                  fill={liked ? "red" : "none"}
                />
              </Button>
            </div>

            <div className="flex flex-col mt-3 gap-1">
              <Slider
                aria-label="Music progress"
                classNames={{
                  track: "bg-default-500/30",
                  thumb: "w-2 h-2 after:w-2 after:h-2 after:bg-foreground",
                }}
                color="success"
                defaultValue={33}
                size="sm"
              />
              <div className="flex justify-between">
                <p className="text-small">1:23</p>
                <p className="text-small text-foreground/50">4:32</p>
              </div>
            </div>

            <div className="flex w-full items-center justify-center">
              <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
                color="success"
              >
                <RepeatOneIcon className="text-foreground/80" />
              </Button>
              <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
                color="success"
              >
                <PreviousIcon/>
              </Button>
              <Button
                isIconOnly
                className="w-auto h-auto data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
                color="success"
              >
                <PauseCircleIcon size={54} />
              </Button>
              <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
                color="success"
              >
                <NextIcon />
              </Button>
              <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
                color="success"
              >
                <ShuffleIcon className="text-foreground/80" />
              </Button>
            </div>
          </div>
        </div>
      </CardBody>
      
    </Card>
    

    </>
  );
}

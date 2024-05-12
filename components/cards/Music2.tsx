"use client"

import React from "react";
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";


export default function Music2() {
  const list = [
    {
      title: "Zayn Malik",
      img: "/singers/Zayn48.jpg",
      price: "$5.50",
    },
    {
      title: "Billie Eilish",
      img: "singers/bilie-eilish.jpg",
      price: "$3.00",
    },
    {
      title: "Lana Del Ray",
      img: "/singers/lanadelrey_01.jpg",
      price: "$10.00",
    },
    {
      title: "Ed Sheeran",
      img: "/singers/ed.jpg",
      price: "$5.30",
    },
    {
      title: "Eminem",
      img: "/singers/Eminem-yellow.jpg",
      price: "$15.70",
    },
    {
      title: "Olivia Rodrigo ",
      img: "/singers/oliva.png",
      price: "$8.00",
    },
    {
      title: "Selena Gomez",
      img: "/singers/selena.jpg",
      price: "$7.50",
    },
    {
      title: "Travis Scott",
      img: "/singers/travis.jpg",
      price: "$12.20",
    },
  ];

  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
      {list.map((item, index) => (
        
        <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-cover h-[140px]"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.title}</b>
            {/* <p className="text-default-500">{item.price}</p> */}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

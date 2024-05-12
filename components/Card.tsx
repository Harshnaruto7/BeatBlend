import React from "react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import {Chip} from "@nextui-org/react";
import ChipPlan from "./ChipPlan";

import {Divider} from "@nextui-org/react";


 interface cardPrice {

  Plan : string,
  Price:string,
  TagLIne : string,
  Giving1:string,
  Giving2:string,
  Giving3:string,
  Giving4:string,



 }





const Card1 = ({Plan,Price,TagLIne,Giving1,Giving2,Giving3,Giving4}:cardPrice) => {
    return( <>


<Card className=" w-80  ">
      <CardHeader className=" flex flex-col justify-center ">
        <h1 className=" flex justify-center  my-2 font-bold text-3xl">
        <Chip color="success" variant="flat">{Plan}</Chip>
          </h1>
         <h1 className=" font-bold text-4xl" 
         >{Price}<span className=" text-sm font-thin">/month</span></h1>
      </CardHeader>
      <Divider className="my-4" />
      <CardBody>
      <div className="">
        <div  className="  text-lg text-green-400">
          <p className=" flex justify-center text-2xl items-center mb-10"
          >{TagLIne}
          </p>
          <div className=" flex flex-col space-y-3 ">
            <ChipPlan
            feature1={Giving1}
            feature2={Giving2}
            feature3={Giving3}
            feature4={Giving4}
            />
           

          </div>




        </div>
        





      </div>




        <div className="my-5">
          <Button color="success" fullWidth variant="ghost" radius="full" >
        Buy Plan
      </Button> 
        </div>
      
        
      </CardBody>
    </Card>







    </>

    );
    
  };
  
  export default Card1;
  
  

































import {Chip} from "@nextui-org/react";
import {CheckIcon} from "@/public/icons/CheckIcon";

interface ChipText{
  feature1:string,
  feature2:string,
  feature3:string,
  feature4:string,
}


export default function ChipPlan({feature1,feature2,feature3,feature4}:ChipText){


  return(

    <>

<Chip
        startContent={<CheckIcon size={18} />}
        variant="faded"
        color="success"
      >
        {feature1}
      </Chip>
    
      <Chip
        startContent={<CheckIcon size={18} />}
        variant="faded"
        color="success"
      >
        {feature2}
      </Chip>

    
      <Chip
        startContent={<CheckIcon size={18} />}
        variant="faded"
        color="success"
      >
        {feature3}
      </Chip>
    
    
      <Chip
        startContent={<CheckIcon size={18} />}
        variant="faded"
        color="success"
      >
        {feature4}
      </Chip>
    
    
    
    
    
    
    
    
    
    </>




  );



}
































import Music1 from "./cards/Music1";
import FontAnimation from "@/public/Animation/FontAnimation";


const Hero = () => {
  return (
  <>
  <div className=" m-10 p-2 rounded-3xl  max-lg:m-2 max-lg:p-1 max-lg:rounded-xl
  bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%
  
  ">
  <div className="mb-36 max-lg:justify-center ">
    <div className=" flex justify-center mt-40" >
    <Music1/>
    </div>
   
   <div className=" flex flex-col items-center  justify-center my-5">
    <h1 className=" text-6xl font-bold
     text-black dark:text-black
     ">
       BeatBlend 

       {/* <FontAnimation/> */}
    </h1>
    <p className=" font-bold text-xl text-white dark:text-white">
       {/* Making Moments */}
       <FontAnimation/>
       </p>
   </div>
 


  </div>










  
  
  </div>


  
  
  
  
  </>
  );
};

export default Hero;













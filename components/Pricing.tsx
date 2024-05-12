
import Card1 from "./Card";

export default function Pricing(){



    return (

        <>
        <h1 className=" text-8xl font-bold flex justify-center  mt-80 max-lg:text-2xl ">Subscription</h1>

        <div className="  
         flex 
         justify-center
         space-x-4
         mt-16
         mb-32
         max-lg:flex-col
           max-lg:space-x-0 
           max-lg:mt-40 
           max-lg:mb-0 
           max-lg:mx-0 
           max-lg:space-y-5
           max-lg:items-center
           ">
            
            <Card1
            Plan="Free"
            Price="$0"
            TagLIne="The Free plan." 
            Giving1="All Music"                                                      
            Giving2="Include Add"                                                      
            Giving3="Can't Download"                                                      
            Giving4="1 Device"                                                      
            />

            <Card1
            Plan="Basic"
            Price="$10"
            TagLIne="The Popular Plan."
            Giving1="All Music"                                                      
            Giving2="No Add"                                                      
            Giving3="Unlimited Download"                                                      
            Giving4="2 Device"    
            />

            <Card1
             Plan="Professional"
             Price="$50"
             TagLIne="The Best Plan"
             Giving1="All Music"                                                      
             Giving2="No Add"                                                      
             Giving3="Unlimited Download"                                                      
             Giving4="4 Device"
            
            />


        </div>
        
        
 
        
        
        </>






    );




























}






































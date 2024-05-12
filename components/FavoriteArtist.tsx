
import MusicReal from "./MusicReal"
import WaveAnimate from "@/public/Animation/WaveAnimate"



const FavoriteArtist = () => {
  return (

    <div className="m-10 mb-20  flex-shrink  ">
            <div className=" flex  flex-col
             bg-gradient-to-r from-indigo-500 to-blue-500
             rounded-3xl ">
       <div className=" flex  flex-row-reverse my-20 max-lg:my-2  max-lg:flex-col max-lg:justify-center  ">
      <div className="flex flex-col">
        <h1 className=" flex  text-6xl font-bold mx-56 mt-16 max-lg:mt-2 max-lg:text-3xl max-lg:mx-0 max-lg:justify-center">
        New Album
    
      </h1>
      <div className=" flex justify-center mt-10">
        Soon
        </div>
      
      </div>
      
      <div className="mr-20  flex   max-lg:mr-0 max-lg:justify-center max-lg:my-20">
        <div className="flex flex-col">
         <MusicReal/>
        <div className=" flex flex-col  ml-48 mr-48  max-lg:ml-0 max-lg:mr-0 max-lg:mb-0 ">
            <WaveAnimate />    
        </div>
        </div>
      </div>
      </div>

      


     </div>


    </div>
   
     
   



  )
}

export default FavoriteArtist







































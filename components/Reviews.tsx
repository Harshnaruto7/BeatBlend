import Slider from "@/public/Animation/Slider";
import Avatars from "./cards/AvatarGroup/Avatars";
import ScrollCard from "./cards/AvatarGroup/ScrollCard";


export default function Reviews(){

  return(
    <>
    <div className=" mb-20">
      <div className="mb-40">
         <Slider></Slider>
      </div>
      <div className=" flex justify-center my-40 max-lg:my-10">
        <h1 className=" font-bold text-success-400 text-7xl max-lg:text-2xl">
         Our <span className="text-blue-400"> Customer </span> Reviews
          </h1>
      </div>
      <div className="flex flex-col ">
        
          <Avatars></Avatars>
          
        <div className=" font-bold">
          <span className=" flex justify-center my-10 text-2xl font-bold">8 Million Downloads</span>
          </div>


      </div>
      <div className=" flex  justify-center space-x-5 flex-row  max-lg:flex-col max-lg:space-y-10 max-lg:space-x-0 max-lg:items-center  ">
        <ScrollCard src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
         mail="@JackMusic1"
          Name="Jack"
           hashtag="#listenwithMe"
            icon="💙"
             Paragraph="🎵 BeatBlend is my go-to for music streaming! 🎧 With its intuitive interface, tailored recommendations, and customizable playlists, it's a must-have for any music lover. 🚀 Plus, the vibrant community vibe adds an extra layer of fun to the experience. 🎶 Let's rock on with BeatBlend together! 🎸🌟" 
             follower="400"
              following="2.1k"
              />
        <ScrollCard src="https://i.pravatar.cc/150?u=a042581f4e29026704d" 
        mail="@LillyMusic2" 
        Name="Lilly"
         hashtag="#LoveTheMusic"
          icon="🎻" 
          Paragraph="🎵 BeatBlend is my ultimate jam for music streaming! 🎧 Its seamless interface, personalized suggestions, and mixtape-making magic are a game-changer for music lovers. 🚀 And the vibrant community makes discovering new albums and sharing music a joy. 🎶 Let's rock on with BeatBlend together! 🎸🌟"
           follower="260"
            following="3.2K"
            />
      </div>  
    </div>
    </>














  );


}
















































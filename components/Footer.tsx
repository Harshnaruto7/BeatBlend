
import {
  AtSignIcon,
  EarthIcon,
  FacebookIcon,
  HeadsetIcon,
  LinkedinIcon,
  TwitterIcon,
} from 'lucide-react'

import { SiNeteasecloudmusic } from "react-icons/si";







const socialLinks = [
  {
    name: 'LinkedIn',
    link: '/',
    icon: <LinkedinIcon />,
  },
  {
    name: 'X',
    link: '/',
    icon: <TwitterIcon />,
  },
  {
    name: 'Facebook',
    link: '/',
    icon: <FacebookIcon />,
  },
  {
    name: 'Website',
    link: '/',
    icon: <EarthIcon />,
  },
]

const description =
  'BeatBlend, the ultimate music app, seamlessly blends your favorite tunes across PC, tablet, and smartphone platforms. Explore a vast library of music and enjoy innovative features for an unparalleled listening experience.!'

const Footer = () => {
  return (
    <footer className="relative  bg-zinc-800 z-50">
      <div className="px-4 py-12 flex flex-col items-center">
        {/* app logo */}
        <div>
          <a href="/" className="flex justify-center items-center gap-5 mb-8 text-white">
           <SiNeteasecloudmusic
           className=" size-10 text-green-500"
           />
            <span className="font-bold text-4xl tracking-wider">BeatBlend</span>
          </a>
          <p className=" text-green-400 max-w-xl text-center font-medium text-lg">{description}</p>
        </div>

        {/* social links */}
        <div className="mt-8">
          <span className="text-[#767E94] block text-center mb-6 font-medium text-lg">
            Follow Us
          </span>
          <ul className="flex gap-6 items-center">
            {socialLinks.map(({ name, icon, link }) => (
              <li key={name}>
                <a
                  href={link}
                  title={name}
                  className="text-white hover:text-[#767e94]"
                  target="_blank">
                  {icon}
                </a>
                <span className="sr-only">{name} account</span>
              </li>
            ))}
          </ul>
        </div>

        {/* email */}
        <div className="text-white mt-6 mb-2 flex gap-2 items-center">
          {/* <AtSignIcon size={16} /> */}
          <span className="text-lg font-medium">levitechnology600@gmail.com</span>
        </div>

        {/* call to action */}
        <div className="mt-8">
          <button
            type="button"
            className="py-2.5 px-5 text-base font-semibold bg-gray-800 text-sky-100 rounded-lg hover:bg-gray-100 hover:text-sky-600 flex gap-2 items-center transition duration-300 ease-in-out">
            <HeadsetIcon size={20} />
            <span>Contact us</span>
          </button>
        </div>
      </div>

      {/* about author or app/copyrights */}
      <div className="bg-[#2E3447]">
        <div className="text-center px-3 py-3">
          <span className="text-[#767E94]">
          ©{' '}
            <a
              href="https://www.linkedin.com/in/abdulbasitprofile/"
              target="_blank"
              className="text-white">
              Harsh Kumar{' '}
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer


































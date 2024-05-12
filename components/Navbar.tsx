"use client"

import React,{useState} from "react";
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button, Dropdown, Avatar, DropdownTrigger, DropdownMenu, DropdownItem, } from "@nextui-org/react";
// import {AcmeLogo} from "./AcmeLogo.jsx";
import ThemeButton from "./ThemeButton";
import { SiNeteasecloudmusic } from "react-icons/si";

export default function Navbar1() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
        <SiNeteasecloudmusic className=" size-4 text-green-500" />
          <p className="font-bold text-inherit">BeatBlend</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
        <SiNeteasecloudmusic className="size-10 text-green-500" />
          <p className="font-bold text-inherit text-4xl">BeatBlend</p>
        </NavbarBrand>
        <NavbarItem>
          <Link className=" font-bold text-lg text-black dark:text-green-500" href="#">
          SoundTrack
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" className=" font-bold text-lg active:text-green-500"  >
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="font-bold text-lg text-black dark:text-green-500" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
         
         {/* <NavbarContent>
          <NavbarItem>
          
            <ThemeButton/>
          </NavbarItem>
         </NavbarContent> */}
        {/* <Link  href="#" className=" text-black dark:text-green-500"> */}

          
          <NavbarContent className=" mx-8 hidden lg:flex ">
            <NavbarItem>
              <Link>
              <Button color="primary" variant="flat">
              Login
              </Button>  
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link>
              <Button color="success" >
              Sign-up
             </Button>  
              </Link>
            </NavbarItem>
          </NavbarContent>

       {/* Avatar mene */}
      <NavbarContent as="div" justify="end">
      <NavbarItem>
            {/* <Link  href="#" className=" text-black dark:text-green-500"> */}
            <ThemeButton/>
          </NavbarItem>
      <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        
          
      </NavbarContent>

      

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
      
    </Navbar>
  );
}

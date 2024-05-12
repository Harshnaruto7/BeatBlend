'use client'


import { useTheme } from 'next-themes'

import { Button } from '@nextui-org/button'
import {Switch} from "@nextui-org/react";
import {MoonIcon} from "@/public/icons/MoonIcon";
import {SunIcon} from "@/public/icons/SunIcon";

export default function ThemeButton() {

  const { theme, setTheme } = useTheme();


  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };




  return (
    <div className='flex gap-4'>
      {/* <Button size='lg' variant='flat' onClick={() => setTheme('light')}>
        Light
      </Button>
      <Button size='lg' variant='flat' onClick={() => setTheme('dark')}>
        Dark
      </Button> */}

      <Switch
      defaultSelected={theme === 'light'}
      size="lg"
      onChange={toggleTheme}
      color="success"
      startContent={<SunIcon  />}
      endContent={<MoonIcon  />}
    >
    
    </Switch>




     
    </div>
  )
}































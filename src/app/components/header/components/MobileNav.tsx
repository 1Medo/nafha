'use client';

import * as React from 'react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
  SheetClose,
  SheetOverlay,
} from '@/components/ui/sheet';
import NavLinks from "./NavLinks"
import Button from '../../atoms/Button';
import { Squash as Hamburger } from 'hamburger-react'
import { useState } from 'react';
import { cn } from "@/lib/utils"
import { RxCross1 } from "react-icons/rx";



export default function MobileNav() {

      const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Hamburger toggled={isOpen} toggle={setIsOpen} rounded color="#CC702A" size={28}/>
      </SheetTrigger>
<SheetOverlay className={cn("desktop:hidden")} />

      <SheetContent 
  className={cn(
    "bg-background text-foreground will-change-transform",
    isOpen ? 'animate-slide-in-right' : 'animate-slide-out-right',
    "[&>button:first-of-type]:hidden",
    "py-14 desktop:hidden"
)}
>
  {/* زر الإغلاق الخاص */}
  <SheetClose asChild>
    <Button 
      variant='tertiary' 
      iconOnly={<RxCross1 size={22}/>} 
      className="absolute top-4 left-4 [color:var(--Functional-Error-error-icon)]"
      ></Button>
  </SheetClose>

  <SheetHeader>
    <SheetTitle className='text-right'>القائمة الرئيسية</SheetTitle>
    <SheetDescription className='text-right'>تصفح الموقع واختر العطر المناسب لك</SheetDescription>
  </SheetHeader>

  <ul className="my-4 flex flex-col">
    <NavLinks onLinkClick={() => setIsOpen(false)}/>
  </ul>

    <SheetClose asChild>
    <Button 
      variant="secondary" 
      size='full'
    >إغلاق القائمة</Button>
  </SheetClose>
</SheetContent>
    </Sheet>
  );
}
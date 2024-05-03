"use client"
import { useState } from "react";
import { DefaultNavBar, DefaultFooter, Drawer } from "./";
const DefaultBody= ({ children }: Readonly<{ children: React.ReactNode; }>) => {
    const [isDrawerOpened, setIsDrawerOpened]= useState(false);
   return (<body>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <DefaultNavBar openDrawerCallback={()=> { setIsDrawerOpened(true); }} />
        <main>{children}</main>
        <DefaultFooter />
        {isDrawerOpened && <div 
            className="w-full h-full drawer-z inset-0 backdrop-blur-2xl bg-black/20 fixed"
            onClick={() => { setIsDrawerOpened(false); }}
        ></div>}
        <Drawer active={isDrawerOpened} closeCallback={()=> { setIsDrawerOpened(false); }} />
      </body>)

}
export default DefaultBody

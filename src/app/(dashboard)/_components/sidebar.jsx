"use client";
import { PanelLeftOpen } from 'lucide-react';
import { SidebarRoutes } from "./sidebar-routes";
import ToggleSwitch from "../../_components/toggleButton";
import { Menu } from 'lucide-react';
import { useEffect, useState } from 'react';
import { X } from 'lucide-react';

export const Sidebar = ({ isCollapsed, toggleSidebar }) => {
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        console.log(checked)
    }, [checked])

    return (
        <div
            className={`h-full flex flex-col bg-white shadow-sm dark:bg-black transition-width duration-300 ${isCollapsed ? "w-[154px]" : "w-[285px]"} dark:text-white dark:bg-black ${checked ? "relative left-[-100%]" : "absolute"}`}
        >
            <div className="flex justify-between mt-[51px] items-center px-4 dark:text-white dark:bg-black">
                <div className="flex items-center dark:text-white dark:bg-black">
                    <div className="flex items-center justify-center mr-3">
                        <img
                            src="/baseLogo.svg"
                            width={50}
                            height={50}
                            alt="Base Logo"
                        />
                    </div>
                    {!isCollapsed && (
                        <div className="text-3xl dark:text-white text-slate-950 text-shadow transition-opacity duration-300">
                            Base
                        </div>
                    )}
                </div>
                <div className="flex items-center justify-center max-md:hidden">
                    <button onClick={toggleSidebar}>
                        <PanelLeftOpen className='text-stone-400 bg-white dark:bg-black' />
                    </button>
                </div>
            </div>
            <div
                className={`flex flex-col w-full mt-[50px] transition-all duration-300 ${isCollapsed ? "items-center" : ""}`}
            >
                <SidebarRoutes isCollapsed={isCollapsed} />
            </div>
            <div className="flex justify-start mt-auto mb-4 ">
                <div className='flex mx-3'>
                    <ToggleSwitch />
                    <div className="flex items-center justify-center font-semibold mx-3">
                        Theme
                    </div>
                </div>
            </div>
            <button onClick={() => setChecked(!checked)} className='md:hidden'>
                {
                    checked ? 
                     (
                        <Menu className={`text-dark dark:text-white mr-3 absolute z-10 right-[-20%] top-[28px] tranistion transition-all ease-in duration-300`} />
                     )
                     :
                        <X className={`text-dark dark:text-white mr-3 absolute top-16 z-10 left-[86%] tranistion transition-all ease-in duration-300`}/>
                }
                
            </button>

        </div>
    );
};

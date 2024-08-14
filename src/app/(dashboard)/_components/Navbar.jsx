import Image from "next/image";

import { User } from 'lucide-react';
import { Bell } from 'lucide-react';

export default function Navbar() {
    return (
        <div className="lg:hidden bg-white dark:bg-black h-20 flex items-center">
            <div className="ml-[20px] flex w-full justify-between">
                <div className="flex relative left-10">
                   
                    <Image
                        src={'/baseLogo.svg'}
                        width={30}
                        height={30}
                    />
                    <div className="text-lg font-semibold ml-3">
                        Base
                    </div>
                </div>
                <div className="flex mr-6">
                    <User className="text-dark dark:text-white mr-3" />
                    <Bell className="text-dark dark:text-white" />
                </div>
            </div>
        </div>
    );
}
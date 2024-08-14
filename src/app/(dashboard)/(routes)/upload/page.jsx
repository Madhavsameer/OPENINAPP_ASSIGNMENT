import Image from "next/image";
import FileUpload from "../../_components/FileUpload"
import { User } from 'lucide-react';
import { Bell } from 'lucide-react';
import Navbar from "../../_components/Navbar"
export default function Upload() {
    return (
        <>
            <div className="hidden md:flex mt-[46px] ml-[45px] justify-between dark:bg-light-dark dark:text-white h-auto">
                <div className="text-3xl font-semibold">
                    Upload CSV
                </div>
                <div className='flex items-center mr-[45px]'>
                    <Bell className="text-dark dark:text-white mr-4" />
                    <User className="text-dark dark:text-white" />
                </div>
            </div>
            <div className="md:hidden">
                <Navbar />
            </div>
            <div className="relative top-10">
                <FileUpload />
            </div>
        </>
    );
}
"use client";

import { Sidebar } from "./_components/sidebar";
import { useState } from "react";

const DashboardLayout = ({ children }) => {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

    const handleSidebarToggle = () => {
        setIsSidebarCollapsed(prevState => !prevState);
    };

    return (
        <div className="h-full flex">
            <div className={` md:flex h-full fixed inset-y-0 z-50 dark:text-white md:bg-light-dark transition-all duration-300 ${isSidebarCollapsed ? "w-[154px]" : "w-[285px]"}`}>
                <Sidebar toggleSidebar={handleSidebarToggle} isCollapsed={isSidebarCollapsed} />
            </div>
            <main className={`flex-1 transition-all duration-300 ${isSidebarCollapsed ? "md:ml-[154px]" : "md:ml-[285px]"} ml-0 h-screen dark:bg-light-dark`}>
                {children}
            </main>
        </div>
    );
};  

export default DashboardLayout;

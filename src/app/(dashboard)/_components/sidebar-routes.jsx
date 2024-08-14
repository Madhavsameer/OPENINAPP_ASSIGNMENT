"use client";

import { SidebarItem } from './sidebar-item';

const Route = [
    { loc: "/dashboard.svg", label: "Dashboard", href: "/" },
    { loc: "/upload.svg", label: "Upload", href: "/" },
    { loc: "/invoice.svg", label: "Invoice", href: "/" },
    { loc: "/schedule.svg", label: "Schedule", href: "/" },
    { loc: "/notification.svg", label: "Notification", href: "/" },
    { loc: "/dashboard.svg", label: "Dashboard", href: "/" },
    { loc: "/setting.svg", label: "Setting", href: "/" },
];

export const SidebarRoutes = ({ isCollapsed }) => {
    return (
        <div className='flex flex-col w-full'>
            {Route.map((route) => (
                <div key={route.loc}>
                    <SidebarItem
                        loc={route.loc}
                        label={route.label}
                        href={route.href}
                        isCollapsed={isCollapsed} // Pass the isCollapsed prop
                    />
                    <div className='my-2' />
                </div>
            ))}
        </div>
    );
};

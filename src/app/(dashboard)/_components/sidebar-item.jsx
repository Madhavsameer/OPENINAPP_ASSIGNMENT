"use client";

import Image from 'next/image';
import { cn } from '../../../lib/utils';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';

export const SidebarItem = ({ loc, label, href, isCollapsed }) => {
    const pathname = usePathname();
    const router = useRouter();

    const isActive = (pathname === "/" && href === "/") || (pathname == href) || (pathname?.startsWith(`${href}/`));

    const onClick = () => {
        router.push(href);
    }

    return (
        <button
            onClick={onClick}
            type="button"
            className={cn(
                "flex items-center gap-x-2 text-slate-500 text-sm font-[500] pl-6 transition-all hover:text-slate-600 hover:bg-slate-300/20",
                isActive && "text-sky-700 bg-sky-200/30 hover:bg-sky-200/20 hover:text-sky-700"
            )}
        >
            <div className='flex items-center gap-x-2 py-4'>
                <Image
                    src={loc}
                    width={18}
                    height={22}
                    className={"text-slate-400"}
                />
                {!isCollapsed && (
                    <span>{label}</span>
                )}
            </div>
        </button>
    );
};

'use client';

import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { usePathname } from 'next/navigation';
import Logo from '@/Images/logo.svg';
import Image from 'next/image';
const routes = [
    { href: '/images', label: 'Images' },
    { href: '/documents', label: 'Documents' },
    { href: '/audios', label: 'Audios' },
    { href: '/videos', label: 'Videos' },
];
export default function Header() {
    const pathname = usePathname();

    return (
        <header className="flex h-20 capitalize flex-grow-0 bg-gray-900 w-full shrink-0 items-center  px-4 md:px-6">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline" size="icon" className="lg:hidden">
                        <Icon icon="hugeicons:menu-01" className="h-6 w-6" />
                    </Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <Link href="/" prefetch={false}></Link>
                    <div className="grid  gap-2 py-6">
                        {routes.map(({ href, label }) => (
                            <Link
                                key={href}
                                href={href}
                                className="flex w-full items-center py-2 text-lg font-semibold"
                                prefetch={false}
                            >
                                {label}
                            </Link>
                        ))}
                    </div>
                </SheetContent>
            </Sheet>
            <Link href="/" className="mr-6 hidden lg:flex" prefetch={false}>
                <Image src={Logo} alt="logo" width={40} height={40} />
                <span className="sr-only">Files Converter</span>
            </Link>
            <span className="ml-2 text-lg font-semibold "> Files Converter </span>
            <div className="hidden mx-auto  lg:flex">
                <div className="space-x-5">
                    {routes.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            prefetch={false}
                            className={` ${pathname === href ? 'bg-gray-700 text-gray-50 font-medium' : ''} bg-gray-800  rounded-md hover:bg-gray-700 hover:text-gray-50 f px-3 py-2`}
                        >
                            {label}
                        </Link>
                    ))}
                </div>
            </div>
        </header>
    );
}

"use client";
import { MenuIcon, XIcon, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" }
];

export default function Navbar() {
    const [openMobileMenu, setOpenMobileMenu] = useState(false);

    useEffect(() => {
        if (openMobileMenu) {
            document.body.classList.add("max-md:overflow-hidden");
        } else {
            document.body.classList.remove("max-md:overflow-hidden");
        }
    }, [openMobileMenu]);

    return (
        <nav className={`flex items-center justify-between fixed z-50 top-0 w-full px-6 md:px-16 lg:px-24 xl:px-32 py-4 bg-black/90 ${openMobileMenu ? '' : 'backdrop-blur'}`}>
            <Link href="/">
                <Image className="h-14 w-auto shrink-0" src="/assets/humming/hummingbirdfc_logo.jpg" alt="Hummingbird Fight Club" width={56} height={56} priority fetchPriority="high" />
            </Link>
            <div className="hidden items-center md:gap-8 lg:gap-9 md:flex lg:pl-20">
                {navLinks.map((link) => (
                    <Link key={link.name} href={link.href} className="text-white hover:text-gray-300 font-medium">
                        {link.name}
                    </Link>
                ))}
            </div>
            {/* Mobile menu */}
            <div className={`fixed inset-0 flex flex-col items-center justify-center gap-6 text-lg font-medium bg-black/95 backdrop-blur-md md:hidden transition duration-300 ${openMobileMenu ? "translate-x-0" : "-translate-x-full"}`}>
                {navLinks.map((link) => (
                    <Link key={link.name} href={link.href} onClick={() => setOpenMobileMenu(false)} className="text-white">
                        {link.name}
                    </Link>
                ))}
                <button className="aspect-square size-10 p-1 items-center justify-center bg-white hover:bg-gray-100 transition text-black rounded-md flex" onClick={() => setOpenMobileMenu(false)}>
                    <XIcon />
                </button>
            </div>
            <div className="flex items-center gap-4">
                <Link href="/shop" className="text-white hover:text-gray-300">
                    <ShoppingCart size={22} />
                </Link>
                <button onClick={() => setOpenMobileMenu(!openMobileMenu)} className="md:hidden text-white">
                    <MenuIcon size={26} className="active:scale-90 transition" />
                </button>
            </div>
        </nav>
    );
}
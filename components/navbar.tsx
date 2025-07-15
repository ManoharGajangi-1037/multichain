"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sun, MoreHorizontal } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full border-b border-border bg-[#21263E] backdrop-blur supports-[backdrop-filter]:bg-background/60 p-1">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center gap-2 pl-4">
            <Image src="/Logo.png" alt="Multichain" width={259} height={70} />
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/router"
              className="text-[#979dac] hover:text-foreground  hover:text-white hover:font-semibold transition-colors  text-[16px] leading-[16px]"
            >
              Router
            </Link>
            <Link
              href="/pool"
              className="text-[#979dac] hover:text-foreground  hover:text-white hover:font-semibold transition-colors text-[16px] leading-[16px]"
            >
              Pool
            </Link>
            <Link
              href="/farms"
              className="text-[#979dac] hover:text-foreground  hover:text-white hover:font-semibold transition-colors text-[16px] leading-[16px]"
            >
              Farms
            </Link>
            <Link
              href="#"
              className="text-[#979dac] hover:text-foreground  hover:text-white hover:font-semibold transition-colors text-[16px] leading-[16px]"
            >
              veMULTI
            </Link>
            <Link
              href="#"
              className="text-[#979dac] hover:text-foreground  hover:text-white hover:font-semibold transition-colors text-[16px] leading-[16px]"
            >
              NFT
            </Link>
            <Link
              href="#"
              className="text-[#979dac] hover:text-foreground  hover:text-white hover:font-semibold transition-colors text-[16px] leading-[16px]"
            >
              History
            </Link>
            <Button variant="ghost" size="sm">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-3">
            {/* Wallet Connect */}
            <Button
              className="max-w-[320px] text-center outline-none no-underline justify-center relative z-[1]
                 text-[16px] flex flex-row h-[38px] items-center px-2 py-2.5 rounded-[12px]
                 cursor-pointer select-none font-medium bg-[#5f6bfb] border border-[#5f6bfb] text-white"
            >
              Connect to a wallet
            </Button>

            {/* Theme Toggle */}
            <Button variant="ghost" size="sm">
              <Sun className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

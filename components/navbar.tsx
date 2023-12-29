"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { Poppins } from "next/font/google";
import { Sparkles } from "lucide-react";

import { cn } from "@/lib/utils";
import { MobileSidebar } from "@/components/mobile-sidebar";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { useProModal } from "@/hooks/use-pro-modal";

const font = Poppins({ weight: "600", subsets: ["latin"] });
interface NavbarProps {
  isPro: boolean;
}

export const Navbar = ({ isPro }: NavbarProps) => {
  const proModal = useProModal();

  return (
    <div className='fixed w-full z-50 flex  justify-between items-center py-2 px-4 h-16 border-b border-primary/50 bg-secondary'>
      <div className='flex items-center'>
        <MobileSidebar isPro={isPro} />
        <Link href='/'>
          <h1
            className={cn(
              "hidden md:block text-xl md:text-4xl font-black text-primary",
              font.className
            )}
          >
            AI-data
          </h1>
        </Link>
      </div>
      <div className='flex items-center gap-x-3'>
        {!isPro && (
          <Button onClick={proModal.onOpen} size='sm'>
            Upgrade
            <Sparkles className='h-4 w-4 fill-white text-white ml-2' />
          </Button>
        )}
        <ModeToggle />
        <UserButton afterSignOutUrl='/' />
      </div>
    </div>
  );
};
import React from "react";
import { NavigationMenu } from "./NavigationMenu";
import { HeroJournal } from "@/components/sections/hero/HeroJournal";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 top-16 bg-background/95 backdrop-blur-sm z-40 overflow-y-auto">
      <div className="flex flex-col items-center justify-start h-full p-6">
        <nav className="w-full mb-8">
          <NavigationMenu onClick={onClose} />
        </nav>
        
        <div className="w-full max-w-md">
          <HeroJournal />
        </div>
      </div>
    </div>
  );
};
import { useTheme } from "@/lib/theme";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Laptop } from "lucide-react";
import { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <DropdownMenu 
      open={isMobile ? isOpen : undefined}
      onOpenChange={isMobile ? setIsOpen : undefined}
    >
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          size="icon" 
          className="w-9 h-9 border-2 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
          onMouseEnter={() => !isMobile && setIsOpen(true)}
          onMouseLeave={() => !isMobile && setIsOpen(false)}
          onClick={() => isMobile && setIsOpen(!isOpen)}
        >
          {theme === "light" && <Sun className="h-4 w-4" />}
          {theme === "dark" && <Moon className="h-4 w-4" />}
          {theme === "system" && <Laptop className="h-4 w-4" />}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end"
        className="w-32 rounded-lg border-2 bg-background/95 backdrop-blur-sm p-2 z-50"
        onMouseEnter={() => !isMobile && setIsOpen(true)}
        onMouseLeave={() => !isMobile && setIsOpen(false)}
      >
        <DropdownMenuItem 
          onClick={() => setTheme("light")}
          className="cursor-pointer flex gap-2 items-center px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground rounded-md"
        >
          <Sun className="h-4 w-4" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme("dark")}
          className="cursor-pointer flex gap-2 items-center px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground rounded-md"
        >
          <Moon className="h-4 w-4" />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme("system")}
          className="cursor-pointer flex gap-2 items-center px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground rounded-md"
        >
          <Laptop className="h-4 w-4" />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
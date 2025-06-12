import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const isMobile = useIsMobile();

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 ${
        scrolled 
          ? "py-3 bg-background/95 backdrop-blur-sm border-b" 
          : "py-5"
      }`}
    >
      <div className="container flex justify-between items-center">
        <a href="#home" className="font-pixel text-xl tracking-wider">
          <span className="text-accent">ZAIM</span>
          <span className="text-foreground">.DEV</span>
        </a>

        {isMobile ? (
          <>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <Button
                variant="outline"
                size="icon"
                className="relative"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </Button>
            </div>

            {mobileMenuOpen && (
              <div className="fixed inset-0 top-16 bg-background/95 backdrop-blur-sm z-40">
                <nav className="flex flex-col items-center justify-center h-full">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="font-pixel py-6 text-lg tracking-wider hover:text-accent"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>
            )}
          </>
        ) : (
          <div className="flex items-center gap-8">
            <nav className="flex gap-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="font-pixel text-sm tracking-wider hover:text-accent"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <ThemeToggle />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
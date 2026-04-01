import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
 
const LOGO_URL = "https://vibe.filesafe.space/1775026468277155123/assets/f63549b6-7913-46f2-a23d-f8888b77db9a.png";
 
export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
 
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
 
  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);
 
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About Us", path: "/about" },
    { name: "Chilli's Heart", path: "/heart" },
    { name: "Employers", path: "/employers" },
  ];
 
  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white",
        isScrolled ? "shadow-[0_2px_10px_rgba(0,0,0,0.08)] py-2" : "py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img
            src={LOGO_URL}
            alt="The Chilli Group"
            className="w-[120px] md:w-[160px] h-auto"
          />
        </Link>
 
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "text-[15px] font-semibold transition-colors hover:text-primary",
                location.pathname === link.path ? "text-primary" : "text-foreground"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>
 
        {/* Desktop CTA & Phone */}
        <div className="hidden md:flex items-center space-x-6">
          <a
            href="tel:0871233644"
            className="flex items-center text-primary font-bold hover:underline"
          >
            <Phone className="w-4 h-4 mr-2" />
            (08) 7123 3644
          </a>
          <Button asChild className="font-semibold px-6 rounded-md">
            <Link to="/employers">Start Hiring</Link>
          </Button>
        </div>
 
        {/* Mobile Toggle & Phone */}
        <div className="flex items-center md:hidden space-x-4">
          <a href="tel:0871233644" className="text-primary p-2">
            <Phone className="w-5 h-5" />
          </a>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-foreground p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
 
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[70px] bg-white z-40 flex flex-col p-6 shadow-xl border-t border-border animate-in slide-in-from-top-2">
          <nav className="flex flex-col space-y-6 text-center mt-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-xl font-semibold",
                  location.pathname === link.path ? "text-primary" : "text-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="mt-auto mb-8 flex flex-col items-center space-y-6">
            <a
              href="tel:0871233644"
              className="flex items-center text-primary text-lg font-bold"
            >
              <Phone className="w-5 h-5 mr-2" />
              (08) 7123 3644
            </a>
            <Button asChild className="w-full font-bold py-6 text-lg rounded-md">
              <Link to="/employers">Start Hiring</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

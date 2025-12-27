import { useState, useEffect } from "react";
import iotClubLogo from "@/assets/iot-club-logo.png";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past 100px
        setIsVisible(false);
        setMobileMenuOpen(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { href: "#", label: "Home", active: false },
    { href: "#", label: "About", active: false },
    { href: "#", label: "Team", active: false },
    { href: "#", label: "Events", active: false },
    { href: "#", label: "Projects", active: true },
    { href: "#", label: "Blogs", active: false },
  ];

  return (
    <nav 
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-[100] w-[95%] max-w-6xl transition-all duration-300 ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="glass-panel rounded-full px-6 py-2 flex justify-between items-center shadow-lg hover:shadow-neon transition-shadow duration-500">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-neon-teal shadow-neon bg-transparent">
            <img 
              src={iotClubLogo} 
              alt="IoT Club Logo" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform"
            />
          </div>
          <span className="font-orbitron font-bold text-lg tracking-wider text-foreground hidden sm:block">
            IOT<span className="text-neon-teal"> CLUB</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 font-orbitron text-xs tracking-wide">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`uppercase transition-colors ${
                link.active
                  ? "text-neon-teal drop-shadow-[0_0_5px_rgba(0,240,255,0.8)] border-b border-neon-teal"
                  : "text-foreground/70 hover:text-neon-teal"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mt-2 glass-panel rounded-2xl p-4 flex flex-col gap-4 text-center md:hidden w-[95%] max-w-6xl mx-auto fixed top-20 left-1/2 -translate-x-1/2 z-40">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`py-2 font-orbitron transition-colors ${
                link.active
                  ? "text-neon-teal border border-neon-teal rounded bg-neon-teal/10"
                  : "text-foreground hover:text-neon-teal"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

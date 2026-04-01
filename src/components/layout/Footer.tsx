import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Phone, Mail } from "lucide-react";
 
// The reversed white logo version isn't provided, so we'll use a CSS filter on the colored one as a fallback, 
// or simply use the colored one if the background is slightly adjusted, but the prompt says dark gray #2C2C2C.
// We will use CSS filter to make it white: filter: brightness(0) invert(1)
const LOGO_URL = "https://vibe.filesafe.space/1775026468277155123/assets/f63549b6-7913-46f2-a23d-f8888b77db9a.png";
 
export const Footer = () => {
  return (
    <footer className="bg-[#2C2C2C] text-[#B0B0B0] pt-16 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: About */}
          <div className="flex flex-col">
            <Link to="/" className="mb-4 inline-block">
              <img
                src={LOGO_URL}
                alt="The Chilli Group"
                className="w-[140px] h-auto brightness-0 invert"
              />
            </Link>
            <p className="text-white font-medium mb-6">
              Boutique. Personal. Relentless.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
 
          {/* Column 2: Services */}
          <div className="flex flex-col">
            <h4 className="text-white font-semibold text-base mb-6">Services</h4>
            <nav className="flex flex-col space-y-3">
              <Link to="/services/recruitment" className="hover:text-white transition-colors">Chilli Recruitment</Link>
              <Link to="/services/temps" className="hover:text-white transition-colors">Chilli Temps</Link>
              <Link to="/services/bulk-hiring" className="hover:text-white transition-colors">Chilli Bulk Hiring</Link>
              <Link to="/services/cfo" className="hover:text-white transition-colors">Chilli CFO</Link>
            </nav>
          </div>
 
          {/* Column 3: Company */}
          <div className="flex flex-col">
            <h4 className="text-white font-semibold text-base mb-6">Company</h4>
            <nav className="flex flex-col space-y-3">
              <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
              <Link to="/heart" className="hover:text-white transition-colors">Chilli's Heart</Link>
              <Link to="/employers" className="hover:text-white transition-colors">Employers</Link>
              <Link to="#" className="hover:text-white transition-colors">Job Seekers</Link>
              <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
            </nav>
          </div>
 
          {/* Column 4: Contact */}
          <div className="flex flex-col">
            <h4 className="text-white font-semibold text-base mb-6">Contact</h4>
            <div className="flex flex-col space-y-4">
              <a href="tel:0871233644" className="flex items-center text-white hover:text-primary transition-colors">
                <Phone className="w-4 h-4 mr-3" />
                (08) 7123 3644
              </a>
              <a href="mailto:welcome@thechilligroup.com.au" className="flex items-center text-white hover:text-primary transition-colors">
                <Mail className="w-4 h-4 mr-3" />
                welcome@thechilligroup.com.au
              </a>
              <div className="pt-4">
                <h5 className="text-sm font-medium mb-2 text-white/70">Locations</h5>
                <p className="text-sm leading-relaxed">
                  Adelaide | Brisbane | Perth | Sydney | Melbourne
                </p>
              </div>
            </div>
          </div>
        </div>
 
        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="mb-4 md:mb-0">© {new Date().getFullYear()} The Chilli Group. All rights reserved.</p>
          <div className="flex space-x-4">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>|</span>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

import React from 'react';
import { Link } from 'react-scroll';
import { Home, Heart, Calendar, Image as ImageIcon, Send } from 'lucide-react';

const Navigation: React.FC = () => {
  const navItems = [
    { to: 'hero', icon: <Home className="w-5 h-5" /> },
    { to: 'mempelai', icon: <Heart className="w-5 h-5" /> },
    { to: 'acara', icon: <Calendar className="w-5 h-5" /> },
    { to: 'galeri', icon: <ImageIcon className="w-5 h-5" /> },
    { to: 'rsvp', icon: <Send className="w-5 h-5" /> },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-white/85 backdrop-blur-md px-6 py-3 rounded-full shadow-lg shadow-pink-100/50 flex items-center gap-6 md:gap-8 border border-white/50">
        {navItems.map((item, index) => (
          <Link
            key={index}
            to={item.to}
            spy={true}
            smooth={true}
            duration={800}
            activeClass="text-primary scale-125"
            className="text-textMain/40 hover:text-primary cursor-pointer transition-all duration-300 flex items-center justify-center"
          >
            {item.icon}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navigation;

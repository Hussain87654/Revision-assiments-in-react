import  { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { Button, IconButton, Drawer,  Box } from '@mui/material';
import { Zap, Menu, X, ChevronRight } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Effect to handle background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'About', href: '#about' },
    { name: 'Ecosystem', href: '#ecosystem' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-[#020617]/80 backdrop-blur-xl border-b border-white/10' 
          : 'py-6 bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          
          {/* LOGO */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="p-1.5 bg-cyan-500 rounded-lg shadow-[0_0_15px_rgba(6,182,212,0.5)]">
              <Zap size={18} className="text-[#020617]" fill="currentColor" />
            </div>
            <span className="text-xl font-black tracking-tighter text-white uppercase">
              NovaStack
            </span>
          </div>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-10">
            <div className="flex gap-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* AUTH BUTTONS */}
            <div className="flex items-center gap-4 border-l border-white/10 pl-10">
              <button className="text-xs font-bold uppercase tracking-widest text-white hover:text-cyan-400 transition-colors">
                Log In
              </button>
              <Link to="/auth">
              <Button 
                variant="contained" 
                className="bg-white hover:bg-cyan-500 text-black font-bold px-6 py-2 rounded-full normal-case transition-all"
              >
                Sign Up
              </Button>
              </Link>
            </div>
          </div>

          {/* MOBILE TOGGLE */}
          <div className="md:hidden">
            <IconButton onClick={() => setMobileOpen(true)} className="text-white">
              <Menu  className=' text-white'/>
            </IconButton>
          </div>
        </div>
      </nav>

      {/* MOBILE DRAWER (MUI) */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: { width: '100%', bgcolor: '#020617', backgroundImage: 'none' }
        }}
      >
        <Box className="p-6 flex flex-col h-full">
          <div className="flex justify-between items-center mb-12">
            <div className="flex items-center gap-2">
              <Zap className="text-cyan-500" fill="currentColor" />
              <span className="text-xl font-bold text-white uppercase">NovaStack</span>
            </div>
            <IconButton onClick={() => setMobileOpen(false)} className="text-white">
              <X  className='text-white'/>
            </IconButton>
          </div>

          <div className="flex flex-col gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setMobileOpen(false)}
                className="text-3xl font-black text-white hover:text-cyan-500 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="mt-auto space-y-4">
            <Button fullWidth className="text-white border border-white/10 py-4 rounded-2xl">
              Log In
            </Button>
            <Link to="/auth">
            <Button fullWidth className="bg-cyan-500 text-[#020617] font-bold py-4 rounded-2xl">
              Get Started <ChevronRight size={18} />
            </Button>
            </Link>
          </div>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
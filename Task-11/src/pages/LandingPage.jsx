import {
  Button,
  TextField,
  Container,
  Typography,
  Card,
  CardContent,
  IconButton,
  Grid,
  Box,
  Tooltip,
} from "@mui/material";
import {
  Zap,
  ChevronRight,
  Github,
  Twitter,
  Mail,
  MapPin,
  Phone,
  Send,
  Cpu,
  Layers,
  Globe,
  Shield,
  Linkedin,
  Slack,
  ArrowRight,
  Copyright,
} from "lucide-react";

import UpgradedAbout from "../components/About";
import FuturisticContact  from "../components/Cotact";

import Navbar from "../components/Navbar";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-cyan-500/30">
      {/* 1. NAVIGATION: Fixed Glassmorphism Effect */}
      <Navbar/>

      {/* UPDATED HERO SECTION: Split Layout */}
      <section className="relative pt-32 pb-20 px-6 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Ambient Background Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-125 h-125 bg-cyan-500/10 blur-[120px] rounded-full -z-10" />
        <div className="absolute bottom-[10%] right-[-5%] w-100 h-100 bg-blue-600/10 blur-[100px] rounded-full -z-10" />

        <Container maxWidth="lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* LEFT SIDE: Content */}
            <div className="space-y-8 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                Next-Gen Infrastructure
              </div>

              <Typography
                variant="h1"
                className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tight"
              >
                Master the <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">
                  Digital Frontier
                </span>
              </Typography>

              <Typography
                variant="h6"
                className="text-slate-400 max-w-lg font-light leading-relaxed"
              >
                NovaStack provides the high-performance tools you need to build,
                scale, and secure your decentralized applications in record
                time.
              </Typography>

              <div className="flex flex-wrap gap-4">
                <Button
                  variant="contained"
                  size="large"
                  className="bg-cyan-500 hover:bg-cyan-400 text-[#020617] font-bold py-4 px-8 rounded-xl normal-case transition-all hover:scale-105"
                  endIcon={<ChevronRight size={18} />}
                >
                  Start Free Trial
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  className="border-slate-700 text-white hover:bg-white/5 py-4 px-8 rounded-xl normal-case"
                  startIcon={<Github size={18} />}
                >
                  View Source
                </Button>
              </div>

              {/* Mini Stats for social proof */}
              <div className="pt-8 flex gap-10 border-t border-white/5">
                <div>
                  <p className="text-2xl font-bold text-white">40k+</p>
                  <p className="text-xs text-slate-500 uppercase tracking-widest">
                    Users
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">99.9%</p>
                  <p className="text-xs text-slate-500 uppercase tracking-widest">
                    Uptime
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: Futuristic Visual */}
            <div className="relative group">
              {/* The "Glow" behind the image */}
              <div className="absolute -inset-1 bg-linear-to-r from-cyan-500 to-blue-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>

              {/* The Main Image/Card Container */}
              <div className="relative bg-slate-900 border border-white/10 p-4 rounded-3xl overflow-hidden shadow-2xl">
                {/* You can replace this <img> tag with your own URL */}
                <img
                  src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=2832"
                  alt="Futuristic Interface"
                  className="rounded-2xl w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700"
                />

                {/* Floating UI Element (Small "Glass" Card) */}
                <div className="absolute bottom-8 -left-8 hidden md:block w-48 p-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl animate-bounce-slow">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-500/20 rounded-lg text-green-400">
                      <Zap size={16} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase text-slate-400">
                        System Status
                      </p>
                      <p className="text-sm font-bold text-white">
                        All Systems Go
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      {/* 2. ABOUT SECTION: Dynamic & Engaging */}
      <UpgradedAbout />

      {/* 4. CONTACT SECTION: Functional & Clean */}
     <FuturisticContact/>


    </div>
  );
};

export default LandingPage;

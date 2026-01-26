import { Layers, Globe, Cpu, Zap, Shield, Rocket } from 'lucide-react';
import { Container, Typography } from '@mui/material';

const UpgradedAbout = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#020617]">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-blue-600/10 blur-[150px] rounded-full" />

      <Container maxWidth="lg">
        {/* PART 1: The Core Pillars (Grid) */}
        <div className="text-center mb-20">
          <Typography className="text-cyan-500 font-mono tracking-[0.3em] uppercase text-sm mb-4">
            The Ecosystem
          </Typography>
          <Typography variant="h3" className="text-white font-bold mb-6">
            Engineered for the <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">Next Billion</span> Users
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
          <AboutCard 
            icon={<Cpu size={32} />} 
            title="Edge Computing" 
            desc="Deploy your code to 300+ global nodes instantly. Zero latency, maximum performance."
            color="cyan"
          />
          <AboutCard 
            icon={<Shield size={32} />} 
            title="Quantum Security" 
            desc="Military-grade encryption that stays ahead of tomorrow's threats. Your data, locked."
            color="blue"
          />
          <AboutCard 
            icon={<Layers size={32} />} 
            title="Infinite Scale" 
            desc="From local testing to global traffic spikes—our infrastructure breathes with your app."
            color="purple"
          />
        </div>

        {/* PART 2: The Mission (Asymmetrical Layout) */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual Side: The "Orb" Design */}
          <div className="relative flex justify-center order-2 lg:order-1">
            <div className="w-64 h-64 md:w-80 md:h-80 relative">
              {/* Spinning Ring Animation */}
              <div className="absolute inset-0 border-2 border-dashed border-cyan-500/30 rounded-full animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-4 border border-blue-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
              {/* Inner Glow Core */}
              <div className="absolute inset-10 bg-linear-to-tr from-cyan-500 to-blue-600 rounded-full blur-2xl opacity-40 animate-pulse" />
              <div className="absolute inset-10 bg-[#0f172a] border border-white/10 rounded-full flex items-center justify-center shadow-2xl">
                <Globe size={80} className="text-cyan-400" />
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="space-y-6 order-1 lg:order-2">
            <Typography variant="h4" className="text-white font-bold leading-tight">
              We aren't just building a platform; <br />
              <span className="text-slate-500">We're rewriting the rules of the web.</span>
            </Typography>
            <Typography className="text-slate-400 text-lg font-light leading-relaxed">
              Founded in 2024, NovaStack was born out of a frustration with legacy cloud providers. We believe the future is decentralized, fast, and accessible to everyone. 
            </Typography>
            
            <div className="space-y-4 pt-4">
              {[
                { label: 'Global Presence', val: '140+ Countries' },
                { label: 'Carbon Neutral', val: 'Since Day 1' }
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="h-px w-8 bg-cyan-500" />
                  <Typography className="text-sm">
                    <span className="text-white font-bold uppercase">{stat.val}</span>
                    <span className="text-slate-500 ml-2">— {stat.label}</span>
                  </Typography>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

// Sub-component for the Grid Cards
const AboutCard = ({ icon, title, desc, color }) => (
  <div className="group relative p-8 rounded-3xl bg-slate-900/50 border border-white/5 hover:border-cyan-500/50 transition-all duration-500 overflow-hidden">
    {/* Hover Background linear */}
    <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-cyan-500/10 blur-3xl group-hover:bg-cyan-500/20 transition-all" />
    
    <div className={`mb-6 inline-block p-4 rounded-2xl bg-slate-800 text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-black transition-all duration-500 shadow-xl`}>
      {icon}
    </div>
    
    <Typography variant="h5" className="text-white font-bold mb-3">
      {title}
    </Typography>
    <Typography className="text-slate-400 text-sm leading-relaxed">
      {desc}
    </Typography>
  </div>
);
export default UpgradedAbout;
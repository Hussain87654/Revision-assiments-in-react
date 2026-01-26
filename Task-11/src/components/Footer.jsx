
import { Container, Typography, IconButton, TextField, Button, Grid } from '@mui/material';
import { Twitter, Github, Linkedin, Slack, Zap, ArrowRight, Copyright } from 'lucide-react';

const FuturisticFooter = () => {
  return (
    <footer className="bg-black pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[100px] rounded-full" />
      
      <Container maxWidth="lg">
        {/* TOP SECTION: The Big CTA */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <Typography variant="h3" className="text-white font-bold mb-4 tracking-tighter">
              Ready to build the <span className="text-cyan-500">Unthinkable?</span>
            </Typography>
            <Typography className="text-slate-500 max-w-md">
              Join 40,000+ developers pushing the boundaries of the decentralized web. No credit card required.
            </Typography>
          </div>
          <div className="flex gap-2">
            <TextField 
              placeholder="Enter your terminal email"
              variant="standard"
              className="grow"
              InputProps={{
                disableUnderline: true,
                className: "bg-white/5 text-white p-4 rounded-xl border border-white/10 focus-within:border-cyan-500/50"
              }}
            />
            <Button className="bg-white hover:bg-cyan-400 text-black font-bold px-8 rounded-xl transition-all">
              Join <ArrowRight size={18} className="ml-2" />
            </Button>
          </div>
        </div>

        {/* MIDDLE SECTION: Navigation Grid */}
        <Grid container spacing={8} className="mb-20">
          {/* Brand Info */}
          <Grid item xs={12} md={4}>
            <div className="flex items-center gap-2 mb-6 group cursor-pointer">
              <div className="p-2 bg-cyan-500 rounded-lg group-hover:rotate-12 transition-transform">
                <Zap size={20} className="text-black" fill="currentColor" />
              </div>
              <span className="text-xl font-bold tracking-widest text-white uppercase">NovaStack</span>
            </div>
            <Typography className="text-slate-500 text-sm leading-relaxed mb-6">
              Empowering the next generation of engineers with high-performance infrastructure and visionary design tools.
            </Typography>
            <div className="flex gap-3">
              <SocialButton icon={<Twitter size={18} />} />
              <SocialButton icon={<Github size={18} />} />
              <SocialButton icon={<Linkedin size={18} />} />
              <SocialButton icon={<Slack size={18} />} />
            </div>
          </Grid>

          {/* Link Columns */}
          <Grid item xs={6} md={2}>
            <FooterHeading title="Platform" />
            <FooterLink text="Overview" />
            <FooterLink text="Features" />
            <FooterLink text="Solutions" />
            <FooterLink text="Pricing" />
          </Grid>

          <Grid item xs={6} md={2}>
            <FooterHeading title="Resources" />
            <FooterLink text="Documentation" />
            <FooterLink text="API Reference" />
            <FooterLink text="Community" />
            <FooterLink text="Marketplace" />
          </Grid>

          <Grid item xs={6} md={2}>
            <FooterHeading title="Company" />
            <FooterLink text="About Us" />
            <FooterLink text="Careers" />
            <FooterLink text="Press Kit" />
            <FooterLink text="Contact" />
          </Grid>

          <Grid item xs={6} md={2}>
            <FooterHeading title="Legal" />
            <FooterLink text="Privacy Policy" />
            <FooterLink text="Terms of Service" />
            <FooterLink text="Cookie Policy" />
          </Grid>
        </Grid>

        {/* BOTTOM SECTION: Copyright */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-slate-600 text-xs tracking-widest uppercase">
            <Copyright size={14} /> 2026 NovaStack Technologies. All Systems Operational.
          </div>
          <div className="flex gap-8 text-[10px] font-bold text-slate-500 tracking-[0.2em] uppercase">
            <span>Uptime: 99.99%</span>
            <span>Version: 2.4.0-Alpha</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};

// --- HELPER COMPONENTS (DRY Principle) ---

const FooterHeading = ({ title }) => (
  <Typography className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-6">
    {title}
  </Typography>
);

const FooterLink = ({ text }) => (
  <a href="#" className="block text-slate-500 hover:text-cyan-400 text-sm mb-4 transition-colors duration-300">
    {text}
  </a>
);

const SocialButton = ({ icon }) => (
  <IconButton className="bg-white/5 text-slate-500 hover:text-cyan-400 hover:bg-cyan-500/10 border border-white/5 transition-all">
    {icon}
  </IconButton>
);

export default FuturisticFooter;
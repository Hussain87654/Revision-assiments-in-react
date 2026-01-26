
import { Button, TextField, Container, Typography, Grid, Box, Tooltip } from '@mui/material';
import { Mail, MapPin, Phone, Send, Twitter, Linkedin,  } from 'lucide-react';

const FuturisticContact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#020617]">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 right-0 w-150 h-150 bg-blue-600/5 blur-[120px] rounded-full -z-10" />
      
      <Container maxWidth="lg">
        <div className="text-center mb-16">
          <Typography className="text-cyan-500 font-mono tracking-[0.3em] uppercase text-sm mb-4">
            Terminal / Connectivity
          </Typography>
          <Typography variant="h3" className="text-white font-bold">
            Establish <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">Connection</span>
          </Typography>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* LEFT: Info Panel (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-8 rounded-3xl bg-slate-900/40 border border-white/5 backdrop-blur-md">
              <Typography variant="h6" className="text-white font-bold mb-8 italic">Contact_Protocols</Typography>
              
              <div className="space-y-8">
                <ContactLink 
                  icon={<Mail size={20} />} 
                  label="Secure Email" 
                  value="nexus@novastack.ai" 
                />
                <ContactLink 
                  icon={<MapPin size={20} />} 
                  label="Neural Node" 
                  value="Sector 7, Neo-Tokyo" 
                />
                <ContactLink 
                  icon={<Phone size={20} />} 
                  label="Vocal Link" 
                  value="+1 (555) 000-2026" 
                />
              </div>

              <div className="mt-12 pt-8 border-t border-white/5 flex gap-4">
                <SocialIcon icon={<Twitter size={20} />} />
                <SocialIcon icon={<Linkedin size={20} />} />
              </div>
            </div>
          </div>

          {/* RIGHT: The Form (8 cols) */}
          <div className="lg:col-span-8">
            <div className="relative group p-px rounded-3xl bg-linear-to-br from-white/10 to-transparent hover:from-cyan-500/50 transition-all duration-500">
              <div className="bg-[#0f172a]/80 backdrop-blur-xl p-8 md:p-12 rounded-3xl">
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-slate-500 ml-1">Identity</label>
                    <TextField 
                      fullWidth placeholder="Your Name" 
                      variant="standard"
                      InputProps={{ 
                        disableUnderline: true,
                        className: "bg-white/5 p-4 rounded-xl text-white border border-white/10 focus-within:border-cyan-500/50 transition-all"
                      }}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-slate-500 ml-1">Secure Email</label>
                    <TextField 
                      fullWidth placeholder="email@nexus.com" 
                      variant="standard"
                      InputProps={{ 
                        disableUnderline: true,
                        className: "bg-white/5 p-4 rounded-xl text-white border border-white/10 focus-within:border-cyan-500/50 transition-all"
                      }}
                    />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-xs uppercase tracking-widest text-slate-500 ml-1">Transmission Data</label>
                    <TextField 
                      fullWidth multiline rows={4} 
                      placeholder="Write your message here..." 
                      variant="standard"
                      InputProps={{ 
                        disableUnderline: true,
                        className: "bg-white/5 p-4 rounded-xl text-white border border-white/10 focus-within:border-cyan-500/50 transition-all"
                      }}
                    />
                  </div>
                  <div className="md:col-span-2 pt-4">
                    <Button 
                      fullWidth size="large"
                      className="bg-cyan-500 hover:bg-cyan-400 text-[#020617] font-black py-4 rounded-xl normal-case transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                      endIcon={<Send size={18} />}
                    >
                      Initialize Transmission
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

// Helper: Contact Info Row
const ContactLink = ({ icon, label, value }) => (
  <div className="group flex items-start gap-4">
    <div className="p-3 bg-white/5 rounded-xl text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-all">
      {icon}
    </div>
    <div>
      <Typography className="text-[10px] uppercase tracking-tighter text-slate-500 font-bold">{label}</Typography>
      <Typography className="text-slate-200 text-sm group-hover:text-white transition-colors">{value}</Typography>
    </div>
  </div>
);

// Helper: Social Media Icon
const SocialIcon = ({ icon }) => (
  <button className="p-3 bg-white/5 rounded-xl text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all border border-white/5">
    {icon}
  </button>
);

export default FuturisticContact;
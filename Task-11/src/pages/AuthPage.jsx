import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Button, TextField, Typography, Container, 
  IconButton, InputAdornment, Checkbox, FormControlLabel 
} from '@mui/material';
import { 
  Mail, Lock, User, Eye, EyeOff, 
  Github, Chrome, ArrowLeft, Zap 
} from 'lucide-react';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center p-6 relative overflow-hidden">
      
      {/* 1. BACKGROUND VISUALS (The "Cyber" Aura) */}
      <div className="absolute top-[-10%] right-[-10%] w-125 h-125 bg-cyan-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] left-[-10%] w-125 h-125 bg-blue-600/10 blur-[120px] rounded-full" />

      {/* 2. BACK TO HOME LINK */}
      <Link to="/">
      <button className="absolute top-8 left-8 flex items-center gap-2 text-slate-500 hover:text-cyan-400 transition-colors group text-sm font-mono">
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        BACK_TO_SYSTEM
      </button>
      </Link>

      {/* 3. THE AUTH CARD */}
      <div className="relative w-full max-w-112.5">
        {/* Glowing border wrapper */}
        <div className="absolute -inset-px bg-linear-to-b from-cyan-500/40 to-transparent rounded-4xl blur-[2px]" />
        
        <div className="relative bg-[#0f172a]/80 backdrop-blur-2xl p-8 md:p-12 rounded-4xl shadow-2xl border border-white/5">
          
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex p-3 bg-cyan-500/10 rounded-2xl text-cyan-400 mb-4">
              <Zap fill="currentColor" />
            </div>
            <Typography variant="h4" className="text-white font-black tracking-tight mb-2">
              {isLogin ? 'Welcome Back' : 'Initialize Identity'}
            </Typography>
            <Typography className="text-slate-500 text-sm">
              {isLogin ? 'Access your neural dashboard' : 'Begin your journey into the frontier'}
            </Typography>
          </div>

          {/* Form */}
          <form className="space-y-5">
            {!isLogin && (
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold ml-1">Full Name</label>
                <AuthInput placeholder="John Doe" icon={<User size={18} />} />
              </div>
            )}
            
            <div className="space-y-1">
              <label className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold ml-1">Email Address</label>
              <AuthInput placeholder="name@domain.com" icon={<Mail size={18} />} />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold ml-1">Password</label>
              <AuthInput 
                placeholder="••••••••" 
                type={showPassword ? 'text' : 'password'}
                icon={<Lock size={18} />} 
                isPassword
                showPassword={showPassword}
                togglePassword={() => setShowPassword(!showPassword)}
              />
            </div>

            {isLogin && (
              <div className="flex items-center justify-between">
                <FormControlLabel 
                  control={<Checkbox size="small" sx={{ color: '#334155', '&.Mui-checked': { color: '#06b6d4' } }} />}
                  label={<span className="text-xs text-slate-400">Remember node</span>}
                />
                <button type="button" className="text-xs text-cyan-500 hover:underline">Forgot Access?</button>
              </div>
            )}

            <Button 
              fullWidth 
              className="bg-cyan-500 hover:bg-cyan-400 text-[#020617] font-bold py-4 rounded-xl normal-case mt-4 shadow-[0_0_20px_rgba(6,182,212,0.3)]"
            >
              {isLogin ? 'Establish Link' : 'Create Identity'}
            </Button>
          </form>

          {/* Social Auth */}
          <div className="mt-8">
            <div className="relative flex items-center mb-6">
              <div className="grow border-t border-white/5"></div>
              <span className="shrink mx-4 text-[10px] text-slate-600 uppercase tracking-widest">Or connect via</span>
              <div className="grow border-t border-white/5"></div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <SocialButton icon={<Chrome size={18} />} label="Google" />
              <SocialButton icon={<Github size={18} />} label="GitHub" />
            </div>
          </div>

          {/* Switcher */}
          <div className="mt-10 text-center">
            <p className="text-slate-500 text-sm">
              {isLogin ? "Don't have a profile?" : "Already have a profile?"}
              <button 
                onClick={() => setIsLogin(!isLogin)}
                className="ml-2 text-cyan-400 font-bold hover:text-cyan-300 transition-colors"
              >
                {isLogin ? 'Sign Up' : 'Log In'}
              </button>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

// --- HELPER: CUSTOM INPUT COMPONENT ---
const AuthInput = ({ placeholder, icon, type = 'text', isPassword, showPassword, togglePassword }) => (
  <TextField
    fullWidth
    type={type}
    placeholder={placeholder}
    variant="standard"
    InputProps={{
      disableUnderline: true,
      startAdornment: (
        <InputAdornment position="start" className="text-slate-500 ml-2">
          {icon}
        </InputAdornment>
      ),
      endAdornment: isPassword && (
        <InputAdornment position="end">
          <IconButton onClick={togglePassword} className="text-slate-500 mr-2">
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </IconButton>
        </InputAdornment>
      ),
      className: "bg-white/5 border border-white/10 text-white rounded-xl py-2 px-2 focus-within:border-cyan-500/50 focus-within:bg-white/10 transition-all duration-300"
    }}
  />
);

// --- HELPER: SOCIAL BUTTON ---
const SocialButton = ({ icon, label }) => (
  <button className="flex items-center justify-center gap-2 py-3 border border-white/5 bg-white/5 rounded-xl text-slate-300 hover:bg-white/10 hover:text-white transition-all text-sm font-medium">
    {icon} {label}
  </button>
);

export default AuthPage;
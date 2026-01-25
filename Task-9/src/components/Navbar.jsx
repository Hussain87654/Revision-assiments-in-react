import {Link} from 'react-router-dom';
import { User, Briefcase, Mail, HomeIcon } from 'lucide-react';
const Navbar = () => (
  <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-md border border-slate-200 px-6 py-3 rounded-full shadow-lg z-50">
    <div className="flex gap-8 items-center">
      <Link to="/" className="hover:text-blue-600 transition-colors"><HomeIcon size={20}/></Link>
      <Link to="/about" className="hover:text-blue-600 transition-colors"><User size={20}/></Link>
      <Link to="/projects" className="hover:text-blue-600 transition-colors"><Briefcase size={20}/></Link>
      <Link to="/contact" className="hover:text-blue-600 transition-colors"><Mail size={20}/></Link>
    </div>
  </nav>
);
export default Navbar;
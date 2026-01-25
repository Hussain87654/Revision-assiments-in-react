import { Link } from "react-router-dom";
import { Briefcase } from "lucide-react";
const HomePage = () => (
  <div className="h-screen flex flex-col items-center justify-center text-center px-4">
    <div className="animate-bounce bg-blue-600 text-white p-3 rounded-2xl mb-6">
      <Briefcase size={32} />
    </div>
    <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4">
      Creative <span className="text-blue-600">Developer.</span>
    </h1>
    <p className="text-slate-500 text-lg max-w-md mb-8">
      Building digital experiences that blend aesthetic design with functional code.
    </p>
    <Link to="/projects" className="bg-slate-900 text-white px-8 py-3 rounded-full font-bold hover:bg-slate-800 transition-all">
      View My Work
    </Link>
  </div>
);
export default HomePage;
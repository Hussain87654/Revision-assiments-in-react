import { Badge, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => (
  <header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-gray-100 px-6 py-3 flex justify-between items-center">
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-indigo-600 rounded-lg rotate-12"></div>
      <h1 className="text-xl font-black tracking-tight">LUXE.IO</h1>
    </div>
    
    <div className="hidden md:flex gap-6 text-sm font-medium text-gray-500">
      <a href="#" className="hover:text-black">New Drops</a>
      <a href="#" className="hover:text-black">Men</a>
      <a href="#" className="hover:text-black">Women</a>
    </div>

    <div className="flex gap-2">
      <IconButton size="small"><SearchIcon /></IconButton>
      <IconButton size="small">
        <Badge badgeContent={4} color="primary">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </div>
  </header>
);

export default Header;
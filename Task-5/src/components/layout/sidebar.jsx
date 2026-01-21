import ExploreIcon from '@mui/icons-material/Explore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SettingsIcon from '@mui/icons-material/Settings';

const Sidebar = () => (
  <aside className="w-20 lg:w-64 border-r border-gray-100 p-4 flex-col gap-8 hidden sm:flex">
    <div className="space-y-2">
      <p className="hidden lg:block text-[10px] font-bold text-gray-400 uppercase tracking-widest px-4 mb-4">
        Discover
      </p>
      <NavItem icon={<ExploreIcon />} label="Feed" active />
      <NavItem icon={<FavoriteIcon />} label="Wishlist" />
      <NavItem icon={<SettingsIcon />} label="Settings" />
    </div>
  </aside>
);

const NavItem = ({ icon, label, active }) => (
  <div className={`flex items-center gap-4 px-4 py-3 rounded-xl cursor-pointer transition-all ${active ? 'bg-indigo-50 text-indigo-600' : 'text-gray-500 hover:bg-gray-50'}`}>
    {icon}
    <span className="hidden lg:block font-semibold text-sm">{label}</span>
  </div>
);

export default Sidebar;
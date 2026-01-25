import { Card, Typography, Button } from '@mui/material';
import { useThemeContext } from './ThemeContext';
import ThemeToggle from './ThemeToggle';

const MainContent = () => {
  const { mode } = useThemeContext();

  return (
    <div className="min-h-screen transition-colors duration-500 bg-slate-100 dark:bg-slate-950 flex items-center justify-center p-6">
      <Card className="p-8 max-w-lg w-full shadow-2xl dark:bg-slate-900 border dark:border-slate-800">
        <div className="flex justify-between items-center mb-6">
          <Typography variant="h4" className="font-bold {dark:text-white : text-black} ">
            {mode.toUpperCase()} MODE
          </Typography>
          <ThemeToggle />
        </div>

        <Typography className="text-slate-600 dark:text-slate-400 mb-6">
          This card is styled using a mix of **MUI Components** and **Tailwind CSS**. 
          Notice how we didn't pass any props to get the theme state here!
        </Typography>

        <Button variant="contained" fullWidth size="large" sx={{ borderRadius: '12px' }}>
          Explore Features
        </Button>
      </Card>
    </div>
  );
};
export default MainContent;
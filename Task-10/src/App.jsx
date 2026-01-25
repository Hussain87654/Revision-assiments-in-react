import './App.css'
import { MyThemeProvider } from './components/ThemeContext';
import MainContant from './components/MainContant';



const App = () => {
 
 return (
  <>
    <MyThemeProvider>
      <MainContant />
    </MyThemeProvider>
  </>
 );
};
export default App;
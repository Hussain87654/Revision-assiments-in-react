import Header from "./header";
import Sidebar from "./sidebar";
import Footer from "./footer";


const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Fixed Top Header */}
      <Header />

      <div className="flex flex-1 pt-16"> {/* pt-16 to offset fixed header */}
        {/* Persistent Sidebar */}
        <Sidebar />

        {/* The Main Content Area */}
        <main className="flex-1 transition-all duration-300">
          {children}
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
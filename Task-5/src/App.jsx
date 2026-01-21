
import './App.css'
import Layout from './components/layout/Layout';
import Main from './components/layout/main';
import Store from './components/layout/Store';

const App = () => {
  return (
    <Layout>
      <Main>
        {/* Creative Hero Banner */}
        <div className="bg-linear-to-r from-indigo-600 to-purple-700 rounded-3xl p-8 md:p-16 mb-12 text-white overflow-hidden relative">
          <h2 className="text-4xl md:text-6xl font-black mb-4 relative z-10">
            SPRING <br /> COLLECTION 26'
          </h2>
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform relative z-10">
            Shop Now
          </button>
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
        </div>

        {/* Dynamic API Content */}
        <h3 className="text-2xl font-bold mb-8">Featured Products</h3>
        <Store/>
      </Main>

    </Layout>
  );
};

export default App;
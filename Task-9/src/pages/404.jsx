const NotFound = () => (
  <div className="h-screen flex flex-col items-center justify-center">
    <h1 className="text-9xl font-black text-slate-200">404</h1>
    <p className="text-xl text-slate-500 -mt-8 mb-8">Oops! This page doesn't exist.</p>
    <Link to="/" className="text-blue-600 font-bold hover:underline">Return Home</Link>
  </div>
);
export default NotFound;
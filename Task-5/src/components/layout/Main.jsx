const Main = ({ children }) => {
  return (
    <section className="p-6 md:p-10 max-w-7xl mx-auto">
      {/* You can add common transitions or breadcrumbs here */}
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
        {children}
      </div>
    </section>
  );
};

export default Main;
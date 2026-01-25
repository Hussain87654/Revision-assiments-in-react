const ProjectsPage = () => {
  const projects = [
    { title: "E-Commerce UI", desc: "A modern shopping experience.", color: "bg-purple-500" },
    { title: "Task Manager", desc: "Keep your productivity in check.", color: "bg-orange-500" },
    { title: "Weather App", desc: "Real-time weather tracking.", color: "bg-cyan-500" }
  ];

  return (
    <div className="pt-24 pb-32 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <div key={i} className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-slate-100">
            <div className={`h-40 ${p.color} opacity-80 group-hover:opacity-100 transition-opacity`} />
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2">{p.title}</h3>
              <p className="text-slate-500 text-sm">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProjectsPage;
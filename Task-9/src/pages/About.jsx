const AboutPage = () => (
  <div className="pt-24 pb-32 px-6 max-w-4xl mx-auto">
    <h2 className="text-4xl font-bold mb-8">About Me</h2>
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="space-y-4 text-slate-600 leading-relaxed">
        <p>I am a passionate React developer based in the digital world. I love solving complex problems and turning coffee into clean, efficient code.</p>
        <p>When I'm not coding, you'll find me exploring UI trends or hiking in the mountains.</p>
      </div>
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <h3 className="font-bold mb-4">My Tech Stack</h3>
        <div className="flex flex-wrap gap-2">
          {['React', 'Tailwind', 'Node.js', 'Figma', 'TypeScript', 'MUI'].map(skill => (
            <span key={skill} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-md text-sm font-medium">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);
export default AboutPage;
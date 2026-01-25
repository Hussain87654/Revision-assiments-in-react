const ContactPage = () => (
  <div className="pt-24 pb-32 px-6 max-w-xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-4">Let's Talk</h2>
    <p className="text-slate-500 mb-10">Have a project in mind? Reach out and let's build something great.</p>
    <form className="space-y-4 text-left">
      <input type="text" placeholder="Your Name" className="w-full p-4 rounded-xl bg-white border border-slate-200 outline-none focus:ring-2 ring-blue-500" />
      <input type="email" placeholder="Email Address" className="w-full p-4 rounded-xl bg-white border border-slate-200 outline-none focus:ring-2 ring-blue-500" />
      <textarea placeholder="Message" rows="4" className="w-full p-4 rounded-xl bg-white border border-slate-200 outline-none focus:ring-2 ring-blue-500"></textarea>
      <button className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-colors">Send Message</button>
    </form>
  </div>
);
export default ContactPage;
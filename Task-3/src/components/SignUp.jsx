import React, { useState } from 'react';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });


  const [submittedUser, setSubmittedUser] = useState(null);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedUser(formData); 
    setFormData({ name: '', email: '', password: '' }); 
  };

 
  const isFormIncomplete = !formData.name || !formData.email || !formData.password;

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md border border-gray-100">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Mini Signup</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none transition"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none transition"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="••••••••"
            className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none transition"
          />
        </div>

        <button
          type="submit"
          disabled={isFormIncomplete}
          className={`w-full py-2 px-4 rounded-md font-semibold text-white transition ${
            isFormIncomplete 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-blue-600 hover:bg-blue-700 shadow-lg'
          }`}
        >
          Sign Up
        </button>
      </form>

      {/* Display entered data below the form  */}
      {submittedUser && (
        <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg animate-fade-in">
          <h3 className="text-lg font-semibold text-green-800 mb-2">Registration Successful!</h3>
          <div className="text-sm text-green-700 space-y-1">
            <p><strong>Name:</strong> {submittedUser.name}</p>
            <p><strong>Email:</strong> {submittedUser.email}</p>
            <p className="text-xs italic opacity-70">Password hidden for security</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignupForm;
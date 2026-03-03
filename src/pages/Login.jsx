import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
   <div className="min-h-screen relative overflow-hidden flex items-center" 
    style={{backgroundColor: '#071a2f'}}>

    <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_55%,rgba(16,185,129,0.45),transparent_55%)]" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_85%,rgba(255,115,0,0.65),transparent_40%)]" />

    <div className="relative z-10 flex w-full min-h-screen">

      <div className="hidden md:flex flex-1 flex-col justify-between p-14 text-white">
        

        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-white" />
          </div>
          <h2 className="text-xl font-semibold">aps</h2>
        </div>

        <div>
          <h1 className="text-4xl font-semibold leading-snug">
            Expert level Cybersecurity <br />
            in <span className="text-teal-400">hours</span> not weeks.
          </h1>
          <div className="mt-12">
            <h3 className="text-lg mb-5 opacity-90">What's included</h3>
            <ul className="space-y-4 text-sm opacity-90">
              <li className="flex items-start gap-3">
                <span className="text-teal-400">✔</span>
                Effortlessly spider and map targets to uncover hidden security flows
              </li>
              <li className="flex items-start gap-3">
                <span className="text-teal-400">✔</span>
                Deliver high-quality, validated findings in hours, not weeks.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-teal-400">✔</span>
                Generate professional, enterprise-grade security reports automatically.
              </li>
            </ul>
          </div>
        </div>


        <div className="text-sm opacity-90">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-green-400">★</span> Trustpilot
          </div>
          <div>Rated <span className="font-semibold">4.5/5.0</span> (100k+ reviews)</div>
        </div>
      </div>


      <div className="flex flex-1 items-center justify-center p-6">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-sm" >

          <h2 className="text-xl font-bold mb-1 text-center text-gray-900">Sign up</h2>
          <p className="text-sm text-gray-500 mb-6 text-center">
            Already have an account?
            <span className="text-teal-500 ml-1 cursor-pointer">Log in</span>
          </p>

          <div className="space-y-4">
            <input name="firstName" placeholder="First name*" onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400"/>
            <input name="lastName" placeholder="Last name*" onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400"/>
            <input name="email" placeholder="Email address*" onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400"/>
            <input name="password" type="password" placeholder="Password (8+ characters)*" onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400"/>

            <div className="text-xs text-gray-500">
              <input type="checkbox" className="mr-2"/>
              I agree to Aps&apos;s
              <span className="text-teal-500 ml-1 cursor-pointer">Terms & Conditions</span>
              and acknowledge the
              <span className="text-teal-500 ml-1 cursor-pointer">Privacy Policy</span>
            </div>

            <button type="submit"
              className="w-full text-white py-3 rounded-full font-medium transition"
              style={{backgroundColor: '#0CC8A8'}}>
              Create account
            </button>

            <div className="flex justify-between gap-3">
              <button type="button" className="flex-1 text-white py-2.5 rounded-full text-sm"
                style={{backgroundColor: '#000000'}}>
                🍎 Apple
              </button>
              <button type="button" className="flex-1 py-2.5 rounded-full text-sm text-gray-700"
                style={{backgroundColor: '#ffffff', border: '1px solid #e5e7eb'}}>
                G
              </button>
              <button type="button" className="flex-1 text-white py-2.5 rounded-full text-sm"
                style={{backgroundColor: '#1877F2'}}>
                f Meta
              </button>
            </div>
          </div>
        </form>
      </div>

    </div>
  </div>
  );
}

export default Login;
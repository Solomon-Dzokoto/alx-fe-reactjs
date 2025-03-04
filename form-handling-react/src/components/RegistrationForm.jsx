import { useEffect, useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const { name, email, password } = formData;

    try {
      if (!email.trim() || !password.trim() || !name.trim()) {
        setError("Please fill all the fields");
        setLoading(false);
        return;
      }
      if (password.length < 8) {
        setError("Password should be at least 8 characters long");
        setLoading(false);
        return;
      }
      setSuccess("You have successfully registered!");
      console.log(formData)
      setFormData(prev=>({...prev,name:"",email:"",password:""}))
      setLoading(false);
    } catch (err) {
      setError("Invalid input");
      console.log(err);
      setLoading(false);
      return;
    }
  };

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess("");
      }, 3000);
      return () => clearTimeout(timer);
    }
    if (error) {
      const timer = setTimeout(() => {
        setError("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [success, error]);
  return (
    <div className="min-h-screen grid place-content-center">
      <h1 className="text-center text-6xl font-semibold mb-4 text-blue-500 ">
        Create an Account{" "}
      </h1>
      <form
        className="space-y-6 w-[25rem] mx-auto h-fit my-auto "
        onSubmit={onSubmit}
      >
        {error && <p className="text-red-500 text-center">{error}</p>}
        {success && <p className="text-green-500 text-center">{success}</p>}

        <div>
          <label className="block relative  text-[1rem]  text-[var(--black)] mb-1">
            Username
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Username"
              className="mt-1 block placeholder:text-gray-400 w-full p-4 border border-gray-200 rounded-[.5rem]  pr-8 focus:outline-none "
            />
          </label>
        </div>
        <div>
          <label className="block text-[1rem]   mb-1">
            Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. john.doe@example.com"
              className="mt-1 block w-full p-4 border border-gray-300 rounded-[.5rem]  focus:outline-none focus:border-blue-500 "
            />
          </label>
        </div>
        <div>
          <label className="block relative  text-[1rem]  text-[var(--black)] mb-1">
            Password
            <input
              type="password"
              value={formData.password}
              name="password"
              onChange={handleChange}
              placeholder="Password"
              className="mt-1 block placeholder:text-gray-100 w-full p-4 border border-gray-200 rounded-[.5rem]  pr-8 focus:outline-none "
            />
          </label>
        </div>
        <div className="flex items-center justify-between">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="remember-me"
              className="h-4 w-4 text-blue-500 focus:ring-blue-500 border-blue-500 rounded"
            />
            <span className="ml-2 text-sm">Remember me</span>
          </label>
          <a href="#" className="text-sm text-blue-500 hover:text-blue-800 ">
            Forgot Password?
          </a>
        </div>
        <div className="space-y-12 relative  ">
          <button
            type="submit"
            disabled={loading}
            onChange={handleChange}
            className={`bg-blue-500  text-white  w-full relative flex justify-center py-4 px-6 border  rounded-md text-sm cursor-pointer  focus:outline-none `}
          >
            {loading ? "Signing up..." : "   sign up"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;

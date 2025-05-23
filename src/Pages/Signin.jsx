import React, { useState } from "react";
import { useNavigate } from "react-router";

const Input = ({
  id,
  type = "text",
  placeholder,
  value,
  onChange,
  showError,
}) => (
  <div className="relative w-full">
    <input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      placeholder=" "
      className={`peer w-full px-3.5 pt-3 pb-2 text-sm text-[#1D2226] border rounded-md appearance-none focus:outline-none focus:ring-[0.5px] ${
        showError
          ? "border-red-500 focus:border-red-500 focus:ring-red-500"
          : "border-[#CBCBCB] focus:border-[#6C25FF] focus:ring-[#6C25FF]"
      }`}
    />
    <label
      htmlFor={id}
      className={`absolute text-[13px] left-2 -top-2 pl-1.5 pr-2 leading-[17px] bg-[#F7F8F9] ${
        showError ? "text-red-500" : "text-[#6C25FF]"
      }`}
    >
      {placeholder}
    </label>
  </div>
);


const Signin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    const isFormValid = formData.email.trim() && formData.password.trim();
    if (!isFormValid) return;

    console.log("Form submitted:", formData);
    navigate("/profile");
  };

  return (
    <div className="bg-[#F7F8F9] w-[375px] h-[730px] border border-gray-200 px-5 pt-10">
      <h1 className="text-[28px] font-medium text-[#1D2226] leading-9">
        Signin to your <br />
        PopX account
      </h1>
      <p className="text-lg text-[#1D2226] opacity-60 leading-[26px] mt-[14px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>

      <form className="space-y-6 mt-6" onSubmit={handleSubmit}>
        <Input
          id="email"
          type="email"
          placeholder="Email address"
          value={formData.email}
          onChange={handleChange}
          showError={isSubmitted && !formData.email.trim()}
        />
        <Input
          id="password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          showError={isSubmitted && !formData.password.trim()}
        />

        <button
          type="submit"
          className="bg-[#6C25FF] rounded-md text-white text-base leading-[17px] font-medium w-full h-[46px] cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#5A1EDB] mt-4"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Signin;

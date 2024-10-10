"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+1) 765-714-6453",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "hwang227@purdue.edu",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "West Lafayette, IN",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    title: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.title || !formData.message) {
      alert("Please fill in all fields.");
      return;
    }

    // Create mailto link
    const mailtoLink = `mailto:hwang227@purdue.edu?subject=${encodeURIComponent(
      formData.title
    )}&body=${encodeURIComponent(
      `Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    // Open mailto link in the default email client
    window.location.href = mailtoLink;
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.3, ease: "easeIn" } }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#faf6f0] rounded-xl" onSubmit={handleSubmit}>
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-900">Excited to hear from you!</p>
              {/* Input Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  name="firstName"
                  placeholder="Firstname"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <Input
                  type="text"
                  name="lastName"
                  placeholder="Lastname"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
              <Input
                type="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <Input
                type="text"
                name="title"
                placeholder="Title"
                value={formData.title}
                onChange={handleChange}
                required
              />
              <Textarea
                name="message"
                className="h-[200px]"
                placeholder="Type your message here"
                value={formData.message}
                onChange={handleChange}
                required
              />
              {/* Submit Button */}
              <Button size="md" className="max-w-40" type="submit">
                Send message
              </Button>
            </form>
          </div>
          {/* Info Section */}
          <div className="flex-1 flex item-center xl:justify-start order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#faf6f0] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-900">{item.title}</p>
                    <h3 className="text-xl text-900">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;

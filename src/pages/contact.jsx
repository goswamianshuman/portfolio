import React, { Suspense, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { Fox } from "../models";
import Loader from "../components/Loader";
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";

const contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");
  const { alert, hideAlert, showAlert } = useAlert();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setCurrentAnimation("hit");

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Anshuman",
          from_email: form.email,
          to_email: "anshumangoswami07@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setLoading(false);

        showAlert({
          show: true,
          text: "Message sent successfully!",
          type: "success",
        });

        setTimeout(() => {
          hideAlert();
          setCurrentAnimation("idle");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        }, [3000]);
      })
      .catch((err) => {
        setLoading(false);
        setCurrentAnimation("idle");
        console.log(err);
        showAlert({
          show: true,
          text: "I didn't recive your message!",
          type: "danger",
        });
      });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFocus = () => setCurrentAnimation("walk");
  const handleBlur = () => setCurrentAnimation("idle");

  return (
    <section className="relative min-h-screen bg-[#09090a]">
      {alert.show && <Alert hideAlert={hideAlert} {...alert} />}
      <div className="flex lg:flex-row flex-col-reverse max-container">
        <div className="flex-1 min-w-[50%] flex flex-col">
          <div className="bg-[#101010] rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0 relative z-10 shadow-md shadow-black/20">
            <h1 className="head-text text-white">Get in touch</h1>

            <form onSubmit={handleSubmit}>
              <div className="relative mb-4">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-white/70"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  className="w-full bg-transparent rounded placeholder:text-white/50 border border-gray-300/10 focus:border-indigo-500 text-base outline-none text-white/60 py-1 px-5 leading-8 transition-colors duration-200 ease-linear"
                />
              </div>

              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-white/70"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  className="w-full bg-transparent rounded placeholder:text-white/50  border border-gray-300/10 focus:border-indigo-500 text-base outline-none text-white/60 py-1 px-5 leading-8 transition-colors duration-200 ease-linear"
                />
              </div>

              <div className="relative mb-4">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-white/70"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Let me know how can I help you..."
                  value={form.message}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  className="w-full bg-transparent rounded placeholder:text-white/50  border border-gray-300/10 focus:border-indigo-500 text-base outline-none text-white/60 py-1 px-5 leading-8 transition-colors duration-200 ease-linear min-h-[150px]"
                ></textarea>
              </div>

              <button
                type="submit"
                onFocus={handleFocus}
                onBlur={handleBlur}
                disabled={loading}
                className="text-white outline-none border-none bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg transition-all ease-linear duration-200"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
        <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
          <Canvas
            camera={{
              position: [0, 0, 5],
              fov: 75,
              near: 0.1,
              far: 1000,
            }}
          >
            <directionalLight intensity={3} position={[0, 0, 1]} />
            <ambientLight intensity={0.7} />

            <Suspense fallback={<Loader />}>
              <Fox
                position={[0.5, 0.35, 0]}
                rotation={[12.6, -0.6, 0]}
                scale={[0.5, 0.5, 0.5]}
                currentAnimation={currentAnimation}
              />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default contact;

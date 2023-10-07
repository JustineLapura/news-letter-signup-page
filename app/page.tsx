"use client";
import Image from "next/image";
import mobileImg from "/public/mobile-img.jpg";
import desktopImg from "/public/desktop-img.jpg";
import { AiFillCheckCircle } from "react-icons/ai";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setError("");
  };

  const handleDismiss = () => {
    setEmailSent(false)
    setEmail("");
  }

  const validateEmail = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setError("Email address is required");
    } else if (!regex.test(email)) {
      setError("Invalid email address");
    } else {
      // Email is valid, you can handle the form submission logic here
      setEmailSent(true);
      setError(""); // Clear the error message
    }
  };
  return (
    <main className="flex h-full w-full min-h-screen flex-col items-center justify-center bg-gray-700">
      {!emailSent && (
        <div className="w-full h-full md:w-[700px] md:max-h-[500px] md:rounded-xl md:flex flex-row-reverse bg-white overflow-hidden">
          {/* image */}
          <div className="md:hidden w-full h-full ">
            <Image
              src={mobileImg}
              alt="mobile Image"
              className="rounded-b-3xl"
            />
          </div>
          <div className="w-1/2 hidden md:block p-3">
            <Image
              src={desktopImg}
              alt="desktop Image"
              className="h-full w-full object-cover rounded-3xl"
            />
          </div>

          {/* text-content  */}
          <div className="w-full md:w-1/2 h-full flex flex-col sm:justify-center sm:items-center py-12 px-10 space-y-4 my-auto">
            <h1 className="text-4xl md:text-4xl md:text-center font-bold md:font-bold text-gray-900">
              Stay updated!
            </h1>
            <p className="font-semibold text-gray-700 text-sm md:text-xs">
              Join 60,000 product managers receiving monthly udates on:
            </p>
            <ul className="font-semibold text-gray-700 space-y-2 mb-3 text-sm md:text-xs">
              <li className="flex items-center gap-3">
                <AiFillCheckCircle className="text-red-500" />
                Product responsibility and builing what matters
              </li>
              <li className="flex items-center gap-3">
                <AiFillCheckCircle className="text-red-500" />
                Measuring to ensure updates are a success
              </li>
              <li className="flex items-center gap-3">
                <AiFillCheckCircle className="text-red-500" />
                And much more!
              </li>
            </ul>
            {/* Email  */}
            <div className="w-full mt-4 space-y-3">
              <div className="flex justify-between items-center">
                <p className="text-gray-900 font-bold text-sm ">
                  Email Address
                </p>
                {error && (
                  <p className="text-red-500 text-xs font-bold">{error}</p>
                )}
              </div>
              <input
                type="email"
                placeholder="email@company.com"
                className={
                  error
                    ? "w-full rounded-lg ps-5 py-3 border md:text-xs text-red-500 bg-red-200 border-red-500 "
                    : "w-full rounded-lg ps-5 py-3 border md:text-xs border-gray-500 "
                }
                value={email}
                onChange={handleChange}
              />
              <button
                className="w-full py-3 rounded-lg md:text-xs bg-gray-700 text-white font-bold md:font-normal active:bg-gradient-to-r from-red-400 to-orange-500 duration-200"
                onClick={validateEmail}
              >
                Subscibe to monthly newsletter
              </button>
            </div>
          </div>
        </div>
      )}

      {/* email esnt modal  */}
      <div
        className={
          emailSent
            ? "w-full sm:w-[400px] h-screen sm:h-[400px] flex flex-col justify-between bg-white p-6 sm:p-10 sm:rounded-xl sm:fixed sm:top-1/2 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2 ease-in duration-300"
            : "hidden w-full sm:w-[400px] h-screen sm:h-[400px] bg-white p-6 sm:p-10 sm:rounded-xl sm:fixed sm:top-[-100vh] sm:left-1/2 transform sm:-translate-x-1/2 sm:-translate-y-1/2 ease-in duration-300"
        }
      >
        <div className="sm:hidden" />
        <div className=" w-full flex flex-col justify-center gap-8 sm:gap-4">
          <div className="w-[60px] h-[60px]">
            <AiFillCheckCircle
              size={25}
              className="w-full h-full text-red-500"
            />
          </div>
          <h1 className="text-4xl font-bold text-gray-800">
            Thanks for subscribing!
          </h1>

          <p className="text-gray-800 text-sm font-semibold">
            A confirmation email has been sent to{" "}
            <span className="font-bold">{email}</span>.
            Please open it and click the button inside to confirm your
            subscription
          </p>
        </div>
        <button
          onClick={handleDismiss}
          className="w-full py-3 rounded-lg md:text-xs bg-gray-700 text-white font-bold md:font-normal active:bg-gradient-to-r from-red-400 to-orange-500 duration-200"
        >
          Dissmiss Message
        </button>
      </div>
    </main>
  );
}

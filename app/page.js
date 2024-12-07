"use client";
import { useState } from "react";
import NavBar from "../components/common/Navbar";
import { toast, Toaster } from "react-hot-toast";
import WelcomeComponent from "../components/home/WelcomeComponent";
import axios from "axios";

function Home() {
  const [prompt, setPrompt] = useState("");
  const [promptResponses, setPromptResponses] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!prompt) {
      toast.error("Please enter a prompt.");
      return;
    }

    try {
      setIsLoading(true);
      const response = await axios.post("http://192.168.32.89:8001/ui", {
        prompt, // Sending JSON payload
      });

      if (response.data) {
        setPromptResponses(response.data); // Directly use response data
        console.log(response.data);
      } else {
        toast.error("Error fetching prompt.");
      }
    } catch (error) {
      console.log("Error submitting prompt:", error);
      toast.error("Error submitting prompt.");
    } finally {
      setIsLoading(false); // Ensure loading stops
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#e2e2e2] to-[#fafafa] text-[#2e2e2e] font-Inter">
      <NavBar />
      <div className="h-full">
        {promptResponses ? (
          <div className="py-10 px-32 flex flex-col gap-7">
            <div className="flex flex-col gap-3 bg-slate-100 p-5 rounded-2xl text-stone-700 font-medium">
              <h1 className="font-medium">{prompt}</h1>
            </div>
            {isLoading ? (
              <div className="flex pl-2">
                <div className="h-2.5 w-2.5 bg-current rounded-full mr-1 animate-bounce"></div>
                <div className="h-2.5 w-2.5 bg-current rounded-full mr-1 animate-bounce200"></div>
                <div className="h-2.5 w-2.5 bg-current rounded-full animate-bounce400"></div>
              </div>
            ) : (
              <div className="font-medium px-10 pb-20">
                <h1>{promptResponses.output || "No output available"}</h1>
              </div>
            )}
          </div>
        ) : isLoading ? (
          <div className="py-10 px-32 flex flex-col gap-10">
            <div className="flex flex-col gap-3 bg-slate-100 p-5 rounded-2xl text-stone-700 font-medium">
              <h1 className="font-medium">{prompt}</h1>
            </div>
            <div className="flex pl-2">
              <div className="h-2.5 w-2.5 bg-current rounded-full mr-1 animate-bounce"></div>
              <div className="h-2.5 w-2.5 bg-current rounded-full mr-1 animate-bounce200"></div>
              <div className="h-2.5 w-2.5 bg-current rounded-full animate-bounce400"></div>
            </div>
          </div>
        ) : (
          <WelcomeComponent />
        )}
      </div>
      <div className="fixed bottom-1 w-full py-10 px-40 flex gap-4 items-end text-[#232321]">
        <div className="px-7 py-3 rounded-3xl bg-white border border-stone-400 w-full flex flex-col gap-1.5">
          <input
            type="text"
            className="w-full focus:outline-none"
            placeholder="Enter the prompt"
            onChange={(e) => setPrompt(e.target.value)}
            value={prompt}
          />
        </div>
        <button
          onClick={handleSubmit}
          className="bg-[#004B87] font-medium py-3 px-7 rounded-full text-stone-50"
        >
          Submit
        </button>
      </div>
      <Toaster />
    </div>
  );
}

export default Home;

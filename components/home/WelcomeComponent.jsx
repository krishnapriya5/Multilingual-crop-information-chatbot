"use client";
import React from "react";
import Welcome_img1 from "../../assets/images/home/welcome_img1.png";
import Welcome_img2 from "../../assets/images/home/welcome_img2.jpg";
import { motion } from "framer-motion";
import {
  AnimationVariantLeft,
  AnimationVariantRight,
  AnimationVariantTop,
  AnimationVariantbottom,
  animationVariantPlace,
} from "./animation/WelcomeAnimation";

const WelcomeComponent = () => {
  return (
    <div className=" flex flex-col items-center justify-center gap-8 h-full py-20">
      <div className=" text-center flex flex-col items-center gap-2">
        <h1 className=" text-5xl font-bold">
          Your Smart Agriculture Assistant
        </h1>
        <p className=" text-stone-700 font-medium text-sm max-w-[600px] w-full">
          Revolutionize the way you farm with instant answers to all your
          agricultural queries. From crop selection and pest control to soil
          management and market trends, our smart assistant is here to empower
          every farmer with knowledge and insights.
        </p>
      </div>
      <div className=" flex flex-col gap-2">
        <h1 className=" font-semibold text-center text-stone-600">Ask about</h1>
        <div className=" max-w-[600px] grid grid-cols-3 gap-2">
          {[
            "Smart Farming",
            "Agricultural Insights",
            "Crop Management",
            "Soil Health",
            "Weather Updates",
            "Sustainable Farming",
          ].map((item, index) => (
            <div
              key={index}
              className=" text-center bg-stone-100 border border-stone-300 rounded-full py-1 px-4 text-xs font-medium text-stone-600"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WelcomeComponent;

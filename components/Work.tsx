import Image from "next/image";
import React from "react";

export default function Work() {
  return (
    <div className="text-white flex items-center justify-center flex-col py-20">
      <h1 className="font-bold text-[41px] capitalize">How it work's</h1>
      <div className="max-w-[900px] w-[900px] flex items-center py-16 gap-6">
        <div className="h-[200px] w-[1px] bg-white"></div>
        <div className="h-[250px] flex flex-col justify-between items-start">
          <div className="flex items-center gap-5">
            <span className="">
              <Image src="./svg/Image.svg" alt="image" width={45} height={45} />
            </span>
            <h4 className="font-bold text-[28px] ">Input</h4>
            <p className="text-lg font-normal">
              You provide the text you want to analyze.
            </p>
          </div>
          <div className="flex items-center gap-5">
            <span className="">
              <Image
                src="./svg/Image2.svg"
                alt="image"
                width={45}
                height={45}
              />
            </span>
            <h4 className="font-bold text-[28px] ">Analysis</h4>
            <p className="text-lg font-normal">
              Our AI model processes the text and assigns it a sentiment score.
            </p>
          </div>
          <div className="flex items-center gap-5">
            <span className="">
              <Image
                src="./svg/Image3.svg"
                alt="image"
                width={45}
                height={45}
              />
            </span>
            <h4 className="font-bold text-[28px] ">Results</h4>
            <p className="text-lg font-normal">
              We display the sentiment score and a description of the sentiment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

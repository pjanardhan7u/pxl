import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="text-black mt-5">
      
      <div className="w-full flex justify-center">
        <Image
          src={"/assets/images/jana.jpg"}
          alt="Jana"
          width={150}
          height={150}
          className="rounded-full mt-5"
        />
        
      </div>
      <h1 className="text-center text-[2rem] font-bold my-5">Hi I am Jana</h1>
      <div className="leading-6  text-[1.3rem] text-center mt-5">
        <p className="line-height-3em ">
          At pxlme, we are passionate about harnessing the power of artificial
          intelligence to revolutionize the way images are created, edited, and
          shared. 
           Whether you are a
          professional photographer looking to streamline your workflow, a
          graphic designer seeking inspiration, or a hobbyist wanting to enhance
          your photos, pxlme has you covered. 
          
          <p className="mt-5">
          Join us at pxlme and discover the
          endless possibilities of AI-driven image processing. 
          Let&and;s create,
          innovate, and transform the way the world sees images together.
          </p>
          
        </p>

          <p className="mt-3">
            I am a software developer and student at NIT-Trichy. If you want to
            know about me you can check my blog
            <a href="https://www.janaa.me" className="text-blue-600 cursor-pointer" target="_blank"> https://www.janaa.me</a>
          </p>
        
      </div>
    </div>
  );
};

export default About;

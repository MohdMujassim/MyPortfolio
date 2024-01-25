import React from "react";
const About = () => {
  return (
    <div name="about" className="w-full antialiased h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col pt-[80px]  justify-center items-center w-full  h-full">
        {/* -----upper --grid---- */}
        <div className="max-w-[1000px]  w-full grid  grid-cols-2 gap-8 ">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4  border-yellow-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        {/* -----lower grid---- */}
        <div className="max-w-[1000px] w-full  grid sm:grid-cols-2 gap-8 px-4 ">
          <div className="sm:text-right  text-yellow-100  text-4xl font-bold ">
            <p>Hi I'm Mohd Mujassim, Passionate Software Developer </p>
          </div>
          <div>
            <p>
              I'm Mohd Mujassim, a passionate and goal-oriented individual pursuing my
              Masters in Computer Application from C-DAC ,Noida. I have completed my
              Bachelor's of Science in Aero-Electronics with 79.99% from Jamia Millia Islamia ,New Delhi
              which has provided me with a strong career foundation.
            </p>
          </div>
          <div className="sm:mx-auto sm:pl-[400px] sm:pt-[20px]" >
            <a  href="https://drive.google.com/file/d/1s0iNY0e3yzbf5mWi7uFRyzRlU0MoD6mA/view?usp=sharing"
              target="_blank"
              download='https://drive.google.com/file/d/1s0iNY0e3yzbf5mWi7uFRyzRlU0MoD6mA/view?usp=sharing'>
          <button   type="submit" className="hover:text-black inline-block self-end bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 bg-[#0a192f] text-white font-bold rounded-lg px-6 py-2 uppercase text-sm">
                        Resume
                  </button>
                  </a>
                  </div>
        </div>
        {/* ---lower grid end---- */}
      </div>
    </div>
  );
};

export default About;

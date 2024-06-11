import React, { useEffect } from "react";
import { FaReact } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Frameworks = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      id="skills"
      className="w-full h-full my-16 p-4 md:mt-16 md:mb-64 md:pt-28 xl:my-52 xl:py-40"
    >
      <div className="mx-auto flex flex-col justify-center">
        <h1 className="text-center tracking-widest text-cursed-black dark:text-creator-light text-xl md:text-2xl 3xl:text-3xl font-bold">
          Frameworks
        </h1>

        <div className="mt-10 p-4 grid gap-16 lg:gap-14 md:grid-cols-4 md:mt-24 md:mx-16 lg:mt-32 lg:mx-30 xl:mx-32">
          <div
            className="mx-auto space-y-4"
            data-aos="zoom-in-up"
            data-aos-duration="2000"
            data-aos-once="true"
          >
            <svg
              className="w-14 h-14 lg:w-16 lg:h-16 3xl:w-20 3xl:h-20"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 800 800"
              enableBackground="new 0 0 800 800"
              xmlSpace="preserve"
            >
              <g>
                <path
                  fill="#FF2D20"
                  d="M767.228,192.77c0.275,1.012,0.421,2.046,0.421,3.095v162.479c0,4.246-2.285,8.164-5.958,10.276
                                                l-136.369,78.517v155.618c0,4.236-2.256,8.141-5.93,10.267L334.737,776.897c-0.652,0.375-1.36,0.606-2.076,0.866
                                                c-0.262,0.086-0.514,0.245-0.796,0.318c-1.987,0.521-4.084,0.521-6.073,0c-0.325-0.087-0.621-0.26-0.933-0.376
                                                c-0.65-0.245-1.33-0.447-1.953-0.809L38.302,613.021c-3.68-2.112-5.95-6.017-5.95-10.267V115.323c0-1.063,0.145-2.105,0.412-3.11
                                                c0.094-0.339,0.296-0.651,0.42-0.99c0.216-0.623,0.426-1.257,0.751-1.837c0.225-0.382,0.55-0.701,0.817-1.055
                                                c0.34-0.471,0.651-0.962,1.049-1.374c0.339-0.341,0.788-0.593,1.171-0.889c0.427-0.354,0.816-0.739,1.302-1.021h0.014
                                                l142.314-81.937c3.666-2.111,8.177-2.111,11.843,0l142.307,81.937h0.029c0.476,0.298,0.873,0.667,1.308,1.005
                                                c0.384,0.297,0.811,0.564,1.15,0.889c0.419,0.427,0.716,0.918,1.069,1.389c0.254,0.354,0.594,0.673,0.796,1.055
                                                c0.339,0.593,0.534,1.214,0.773,1.837c0.116,0.339,0.325,0.65,0.413,1.005c0.273,1.012,0.412,2.053,0.419,3.095v304.438
                                                l118.582-68.271V195.851c0-1.035,0.145-2.09,0.418-3.081c0.103-0.355,0.291-0.664,0.406-1.005c0.23-0.621,0.448-1.257,0.781-1.837
                                                c0.217-0.382,0.55-0.694,0.795-1.055c0.361-0.469,0.651-0.962,1.057-1.374c0.348-0.339,0.779-0.594,1.157-0.89
                                                c0.447-0.354,0.839-0.737,1.301-1.019h0.029l142.313-81.938c3.672-2.112,8.184-2.112,11.843,0l142.313,81.938
                                                c0.507,0.295,0.882,0.664,1.33,1.005c0.377,0.296,0.796,0.564,1.144,0.889c0.418,0.426,0.707,0.918,1.068,1.388
                                                c0.262,0.361,0.594,0.673,0.796,1.055c0.332,0.58,0.535,1.216,0.767,1.837C766.955,192.106,767.142,192.415,767.228,192.77z
                                                M743.917,351.49V216.378l-49.79,28.663l-68.806,39.615v135.105l118.609-68.271H743.917z M601.604,595.899V460.701l-67.663,38.654
                                                L340.687,609.638v136.486L601.604,595.899z M56.075,135.83v460.07l260.896,150.194V609.652l-136.298-77.137l-0.044-0.027
                                                l-0.063-0.03c-0.457-0.274-0.839-0.65-1.273-0.969c-0.368-0.304-0.796-0.55-1.121-0.868l-0.029-0.043
                                                c-0.389-0.361-0.657-0.824-0.982-1.244c-0.296-0.39-0.65-0.737-0.89-1.156l-0.014-0.045c-0.261-0.433-0.428-0.982-0.623-1.474
                                                c-0.188-0.448-0.441-0.868-0.557-1.33v-0.03c-0.152-0.55-0.18-1.157-0.239-1.734c-0.057-0.435-0.18-0.883-0.18-1.33v-0.029v-318.09
                                                l-68.784-39.631l-49.798-28.64V135.83z M186.537,47.073l-118.575,68.25l118.546,68.249l118.554-68.264L186.508,47.073H186.537z
                                                M248.199,473.021l68.785-39.608V135.83l-49.804,28.675l-68.799,39.61v297.584L248.199,473.021z M613.477,127.614l-118.568,68.25
                                                l118.568,68.25l118.539-68.264L613.477,127.614z M601.604,284.656l-68.791-39.615l-49.791-28.663V351.49l68.778,39.594
                                                l49.804,28.677V284.656z M328.813,589.131l173.905-99.275l86.911-49.618L471.163,372.04l-136.398,78.525l-124.315,71.583
                                                L328.813,589.131z"
                ></path>
              </g>
            </svg>
            <p className="text-laravel tracking-tight 3xl:tracking-wide text-center md:text-lg lg:text-xl">
              Laravel
            </p>
          </div>

          <div
            className="mx-auto space-y-4"
            data-aos="zoom-in-up"
            data-aos-duration="2000"
            data-aos-once="true"
          >
            <FaReact className="w-14 h-14 lg:w-16 lg:h-16 3xl:w-20 3xl:h-20 text-react" />
            <p className="text-react tracking-tight 3xl:tracking-wide text-center md:text-lg lg:text-xl">
              React
            </p>
          </div>

          <div
            className="mx-auto space-y-4"
            data-aos="zoom-in-up"
            data-aos-duration="2000"
            data-aos-once="true"
          >
            <svg
              className="w-14 h-14 lg:w-16 lg:h-16 3xl:w-20 3xl:h-20"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 261.76 226.69"
            >
              <path
                d="M161.096.001l-30.225 52.351L100.647.001H-.005l130.877 226.688L261.749.001z"
                fill="#41b883"
              ></path>
              <path
                d="M161.096.001l-30.225 52.351L100.647.001H52.346l78.526 136.01L209.398.001z"
                fill="#34495e"
              ></path>
            </svg>
            <p className="text-vue tracking-tight 3xl:tracking-wide text-center md:text-lg lg:text-xl">
              Vue
            </p>
          </div>

          <div
            className="mx-auto space-y-4"
            data-aos="zoom-in-up"
            data-aos-duration="2000"
            data-aos-once="true"
          >
            <svg
              className="w-14 h-14 lg:w-16 lg:h-16 3xl:w-20 3xl:h-20"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
            >
              <linearGradient
                id="flutter_logo"
                x1="34.31"
                x2="21.223"
                y1="47.31"
                y2="34.223"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#0176d0"></stop>
                <stop offset=".454" stopColor="#0275ce"></stop>
                <stop offset=".617" stopColor="#0472c7"></stop>
                <stop offset=".733" stopColor="#076bbc"></stop>
                <stop offset=".827" stopColor="#0d63ab"></stop>
                <stop offset=".907" stopColor="#135895"></stop>
                <stop offset=".933" stopColor="#16538c"></stop>
              </linearGradient>
              <polygon
                fill="url(#flutter_logo)"
                points="37,44 25,44 14,33 20,27"
              ></polygon>
              <polygon fill="#50e6ff" points="5,24 25,4 37,4 11,30"></polygon>
              <polygon
                fill="#50e6ff"
                points="37,22 20,39 14,33 25,22"
              ></polygon>
              <rect
                width="8.485"
                height="8.485"
                x="15.757"
                y="28.757"
                fill="#35c1f1"
                transform="rotate(-45.001 20 33)"
              ></rect>
            </svg>
            <p className="text-flutter tracking-tight 3xl:tracking-wide text-center md:text-lg lg:text-xl">
              Flutter
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Frameworks
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  BsGithub,
  BsArrowUpRightSquare,
  BsThreeDotsVertical,
} from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
import { Tab } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Projects = () => {
  let [projects] = useState({
    Web: [
      {
        id: 1,
        name: "Chat Room",
        description:
          "Web app built with vue js and firebase where you can chat with friends.",
        image: "/assets/projects/chatRoom.jpg",
        imageRotate: true,
        github: "https://github.com/HtooHtetAung666/chat-room",
        link: "https://chat-room-bce12.web.app/",
      },
      {
        id: 2,
        name: "Technical Blog",
        description:
          "Web app built with laravel and bootstrap where you can read blogs about information technology.",
        image: "/assets/projects/technicalBlog.png",
        imageRotate: false,
        github: "https://github.com/HtooHtetAung666/technical-blog",
        link: "",
      },
      {
        id: 3,
        name: "Ecommerce",
        description:
          "Demo frontend web application for ecommerce build with react js and tailwind css.",
        image: "/assets/projects/ecommerce.png",
        imageRotate: true,
        github: "https://github.com/HtooHtetAung666/react-ecommerce-demo",
        link: "https://react-ecommerce-demo-5d37c.web.app/",
      },
    ],
    Mobile: [
      {
        id: 1,
        name: "Comming Soon",
        description: "I am working on it xD",
        image: "/assets/projects/blur.jpg",
        imageRotate: true,
        github: "",
        link: "",
      },
    ],
  });

  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <div
      id="projects"
      className="w-full p-10 md:p-12 md:mt-40 md:mb-20 xl:my-52 xl:px-16 xl:py-36"
    >
      <h1 className="text-center text-xl tracking-widest font-bold text-cursed-black dark:text-creator-light md:text-2xl 3xl:text-3xl">
        Projects
      </h1>

      <Tab.Group>
        <Tab.List className="w-full max-w-[11rem] md:max-w-[13rem] lg:max-w-[15rem] mx-auto xl:space-x-1 flex rounded-2xl bg-cursed-black/20 p-1 mt-6 md:mt-8 xl:mt-14 mb-10 md:mb-14 xl:mb-16">
          {Object.keys(projects).map((project) => (
            <Tab
              key={project}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-3 text-sm font-medium leading-5 text-cursed-black dark:text-creator-light",
                  "text-sm md:text-md lg:text-lg",
                  "ring-orange-light dark:ring-orange-dark ring-opacity-60 ring-offset-2 ring-offset-orange-light dark:ring-offset-orange-dark focus:outline-none focus:ring-2",
                  selected
                    ? "bg-purple-light shadow rounded-xl lg:rounded-2xl"
                    : "text-purple-light hover:bg-[#ff7e5f]/[0.12] rounded-xl lg:rounded-2xl"
                )
              }
            >
              {project}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          {Object.values(projects).map((products, idx) => (
            <Tab.Panel key={idx}>
              <div className="flex flex-col mt-5 space-y-12 md:space-y-16 xl:space-y-28">
                {products.map((product, idx) => (
                  <div key={idx}>
                    <div className="flex flex-col xl:flex-row xl:space-x-12 xl:px-14">
                      <div
                        className="xl:w-1/2"
                        data-aos="fade-up"
                        data-aos-duration="2000"
                      >
                        <div className="md:px-20 md:py-0 lg:px-28 xl:p-0 3xl:max-w-xl 3xl:mx-auto">
                          <Image
                            src={product.image}
                            width={800}
                            height={400}
                            className="rounded-md
                           shadow-xl hover:opacity-70"
                          />
                        </div>
                      </div>
                      <div className="pt-4 text-center md:px-10 md:pt-10 xl:w-1/2">
                        <h1
                          className="text-lg md:text-xl xl:text-2xl font-bold text-cursed-black dark:text-creator-light"
                          data-aos="fade-up"
                          data-aos-duration="2000"
                        >
                          {product.name}
                        </h1>
                        <p
                          className="mt-3 mb-3 md:mt-4 md:mb-4 xl:mt-6 text-sm md:text-md xl:text-lg leading-7 xl:mb-6 text-cursed-black dark:text-creator-light"
                          data-aos="fade-up"
                          data-aos-duration="3000"
                        >
                          {product.description}
                        </p>

                        <div
                          className="flex flex-row justify-center align-bottom space-x-4"
                          data-aos="fade-up"
                          data-aos-duration="3000"
                        >
                          {!product.github ? null : (
                            <Link href={product.github}>
                              <a target="_blank">
                                <BsGithub
                                  size={28}
                                  className="hover:-translate-y-1 transition-transform cursor-pointer dark:contrast-110 text-purple-light"
                                />
                              </a>
                            </Link>
                          )}
                          {!product.link ? null : (
                            <Link href={product.link} target="_blank">
                              <a target="_blank">
                                <BsArrowUpRightSquare
                                  size={28}
                                  className="hover:-translate-y-1 transition-transform cursor-pointer dark:contrast-110 text-purple-light"
                                />
                              </a>
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

export default Projects
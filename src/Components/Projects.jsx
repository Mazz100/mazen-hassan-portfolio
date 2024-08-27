import React from "react";
import * as Separator from "@radix-ui/react-separator";
import crowdFundImage from "../assets/crowdfunding-product-page.png";
import tipCalculatorImage from "../assets/tip-calculator-app.png";
import restApiCountriesImage from "../assets/Restful-API-countries.png";
import clipBoardImage from "../assets/Clipboard-landing-page.png";

const Projects = () => {
  const projects = [
    {
      screenshot: restApiCountriesImage,
      name: "Restful API countries",
      description: `Countries API with search and filter features and dark theme switch `,
      techUsed: {
        react: "React.js",
        reactRouter: "React Router",
        radixUi: "Radix UI",
        tailwind: "Tailwind",
        html: "HTML5",
      },

      code: "https://github.com/Mazz100/REST-countries-API",
      url: "https://rest-countries-api-iota-eight.vercel.app/",
    },

    {
      screenshot: crowdFundImage,
      name: "Crowdfunding Page",
      description:
        "Dynamic state management by updating fund and total backers",
      techUsed: {
        react: "React.js",
        scss: "SCSS",
        html: "HTML5",
      },

      code: "https://github.com/Mazz100/Crowdfunding-Product-Page",
      url: "https://crowdfunding-product-page-brown.vercel.app/",
    },

    {
      screenshot: tipCalculatorImage,
      name: "Tip calculator app",
      description: `A splitter calculator for calculating total price and person with percentage`,
      techUsed: {
        react: "React.js",
        scss: "SCSS",
        html: "HTML5",
      },

      code: "https://github.com/Mazz100/Tip-Calculator-App",
      url: "https://tip-calculator-app-one-blue.vercel.app/",
    },

    {
      screenshot: clipBoardImage,
      name: "Clipboard landing page",
      description: `Landing page with semantic and accessible HTML`,
      techUsed: {
        tailwind: "Tailwind",
        html: "HTML5",
      },

      code: "https://github.com/Mazz100/Clipboard-landing-page",
      url: "https://mazz100.github.io/Clipboard-landing-page/",
    },
  ];

  return (
    <>
      <div className="flex flex-col place-content-center items-center justify-center p-12 desktop:grid desktop:grid-cols-2 desktop:place-items-start desktop:gap-6">
        <h2
          className="col-span-2 mb-10 place-self-center text-center text-5xl"
          id="Projects"
        >
          Projects
        </h2>
        {projects.map((project) => (
          <div
            key={project.name}
            className="group mb-10 flex flex-col items-center overflow-hidden rounded-lg bg-secondary-color"
          >
            <img
              className="aspect-video object-cover transition-transform duration-300 ease-in motion-reduce:group-hover:translate-y-0 desktop:-translate-y-3/4 desktop:group-hover:translate-y-0"
              src={project.screenshot}
              alt={`${project.name} screenshot`}
            />

            <div className="w-full p-6 text-center">
              <h3 className="my-4 text-center text-xl">{project.name}</h3>
              <p className="mb-4 opacity-70">{project.description}</p>

              <ul className="flex flex-wrap items-center justify-center gap-4 text-sm">
                {Object.entries(project.techUsed).map(([key, value]) => (
                  <li key={key} className="rounded-md bg-body-bg-color p-2">
                    {value}
                  </li>
                ))}
              </ul>

              <Separator.Root
                className="my-4 bg-body-bg-color data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full"
                orientation="horizontal"
              />

              <a
                href={project.url}
                type="b"
                target="_blank"
                className="my-4 mr-4 inline-flex items-center rounded-md underline underline-offset-8 transition-colors hover:text-states-color"
              >
                Project Live Demo
                <svg
                  fill="none"
                  height="48"
                  viewBox="0 0 48 48"
                  width="48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m32 27v5h-16v-16h5m0 11 11-11m0 0v6m0-6h-6"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
              </a>

              <a
                href={project.code}
                target="_blank"
                className="my-4 inline-flex items-center rounded-md underline underline-offset-8 transition-colors hover:text-states-color"
              >
                Project Code
                <svg
                  fill="none"
                  height="48"
                  viewBox="0 0 48 48"
                  width="48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m32 27v5h-16v-16h5m0 11 11-11m0 0v6m0-6h-6"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}

        <a
          href="https://github.com/Mazz100"
          className={[
            "relative col-span-2 place-self-center transition-colors ease-in-out hover:text-states-color focus-visible:text-states-color focus-visible:outline-none",
            "after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0 after:bg-interactive-states-bg after:transition-all after:duration-[0.2s] after:ease-in-out after:hover:w-full after:focus-visible:w-full",
          ].join(" ")}
        >
          More on GitHub
        </a>
      </div>
    </>
  );
};

export default Projects;

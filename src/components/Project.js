import React, { useEffect, useState } from "react";
import sanityClient from "../client";
import Spinner from "./Spinner";

const Project = () => {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
            title,
            image{
              asset->{
                url
              }
            },
            description,
            githubURL,
            websiteURL,
        }`
      )
      .then((data) => setProjects(data))
      .catch(console.error);
  }, []);

  return (
    <main className="min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center cursive">My Projects</h1>
        <h2 className="text-lg text-gray-600 flex justify-center mb-12">
          Welcome to my projects page!
        </h2>
        {projects ? (
          <section className="grid grid-cols-2 gap-8">
            {projects &&
              projects.map((project, index) => (
                <article
                  className="relative rounded-lg shadow-xl bg-white p-16"
                  key={index}
                >
                  <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-red-700">
                    {project.title}
                  </h3>
                  <div className="text-gray-500 text-xs space-x-4">
                    <img src={project.image.asset.url} alt={project.title} />
                    <p className="my-6 text-lg text-gray-700 leading-relaxed">
                      {project.description}
                    </p>
                    <span>
                      <a
                        href={project.githubURL}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Github URL
                      </a>
                    </span>
                    <span>
                      <a
                        href={project.websiteURL}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Website URL
                      </a>
                    </span>
                  </div>
                </article>
              ))}
          </section>
        ) : (
          <Spinner />
        )}
      </section>
    </main>
  );
};

export default Project;

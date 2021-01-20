import React, { useEffect, useState } from "react";
import sanityClient from "../client";
import Spinner from "./Spinner";

const Certification = () => {
  const [certification, setCertification] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "certification"]{
            title,
            badge{
                asset ->{
                    url,
                },
            },
            issueDate,
            expireDate,
            badgeLink,
        }`
      )
      .then((data) => setCertification(data))
      .catch(console.error);
  }, []);

  return (
    <main className="min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center cursive">
          My Certifications
        </h1>
        <h2 className="text-lg text-gray-600 flex justify-center mb-12">
          Welcome to certification page
        </h2>
        {certification ? (
          certification.map((cert, index) => (
            <section className="grid grid-cols-3  gap-8" key={index}>
              <article className="flex flex-col items-center rounded-lg shadow-xl transition-shadow bg-white p-16 hover:shadow-2xl animate-fade-in">
                <h3 className=" flex flex-inline text-gray-800 text-5xl font-bold mb-2 cursive">
                  {cert.badgeLink ? (
                    <a
                      href={cert.badgeLink}
                      alt={cert.title}
                      rel="noopener noreferrer"
                      className=" hover:text-blue-700"
                      target="_blank"
                    >
                      {cert.title}
                    </a>
                  ) : (
                    cert.title
                  )}
                </h3>
                <div className="text-gray-500 text-xs space-x-4 md:flex">
                  <span>
                    <strong className="text-bold">Issued Date</strong>:{" "}
                    {new Date(cert.issueDate).toLocaleDateString()}
                  </span>
                  <span>
                    <strong className="text-bold">Expire Date</strong>:{" "}
                    {cert.expireDate
                      ? new Date(cert.expireDate).toLocaleDateString()
                      : "No expiration"}
                  </span>
                </div>
                <div className="mt-4">
                  <img
                    src={cert.badge.asset.url}
                    alt="certification badge"
                    className="object-contain h-full w-full"
                  />
                </div>
              </article>
            </section>
          ))
        ) : (
          <Spinner />
        )}
      </section>
    </main>
  );
};

export default Certification;

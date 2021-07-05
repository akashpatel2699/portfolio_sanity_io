import React, { useEffect, useState } from "react";
import sanityClient from "../client";
import Spinner from "./Spinner";

const Jobs = () => {

    const [jobs, setJobs] = useState(null);

    useEffect(() => {
        sanityClient
        .fetch(
          `*[_type == "jobs"]{
              jobTitle,
              companyLogo{
                  asset ->{
                      url,
                  },
              },
              JobDescription,
              startDate,
              endDate,
          }`
        )
        .then((data) => {
            setJobs(data);
            console.log(data)
        })
        .catch(console.error);
    },[]);

    return (
        <main className="min-h-screen p-12">
                  <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center cursive">
          Jobs
        </h1>
        <h2 className="text-lg text-gray-600 flex justify-center mb-12">
          Welcome to job history
        </h2>
            {jobs ? (
          jobs.map((job, index) => (
            <section className="grid grid-cols-3  gap-8" key={index}>
              <article className="flex flex-col items-center rounded-lg shadow-xl transition-shadow bg-white p-16 hover:shadow-2xl animate-fade-in">
                <h3 className=" flex flex-inline text-gray-800 text-5xl font-bold mb-2 cursive">
                    {job.jobTitle}
                </h3>
                <div className="text-gray-500 text-xs space-x-4 md:flex">
                  <span>
                    <strong className="text-bold">Start Date</strong>:{" "}
                    {new Date(job.startDate).toLocaleDateString()}
                  </span>
                  <span>
                    <strong className="text-bold">End Date</strong>:{" "}
                    {job.expireDate
                      ? new Date(job.endDate).toLocaleDateString()
                      : "Present"}
                  </span>
                </div>
                <div className="mt-4">
                  <img
                    src={job.companyLogo.asset.url}
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
    )
}

export default Jobs

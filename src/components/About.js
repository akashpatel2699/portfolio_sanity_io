import React, { useEffect, useState } from "react";
import sanityClient from "../client";
import Spinner from "./Spinner";

const About = () => {
  const [bio, setBio] = useState(null);

  useEffect(() => {
	console.log(process.env.REACT_APP_SANITY_PROJECT_ID)
    sanityClient
      .fetch(
        `*[_type == "profile"]{
            name,
            profileBio,
            profileImage{
              asset->{
                url,
              }
            },
        }`
      )
      .then((data) => setBio(data))
      .catch(console.error);
  }, []);

  if (!bio) return <Spinner />;

  return (
    <main className="min-h-screen p-12">
      {bio &&
        bio.map((profile,index) => (
          <div className="p-10 lg:pt-48 container mx-auto relative" key={index}>
            <section className=" bg-green-800 rounded-lg shadow-2xl lg:flex p-20 animate-bounce-in">
              <img
                src={profile.profileImage.asset.url}
                alt={profile.name}
                className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8"
              />
              <div className="text-lg flex flex-col justify-center">
                <h1 className="cursive text-6xl text-green-300 mb-4">
                  Hey there. I'm{" "}
                  <span className="text-green-100 underline">
                    {profile.name}
                  </span>
                </h1>
                <div className="prose lg:prose-xl text-white">
                  <p>{profile.profileBio}</p>
                </div>
              </div>
            </section>
          </div>
        ))}
    </main>
  );
};

export default About;

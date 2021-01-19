import React, { useEffect, useState } from "react";
import sanityClient from "../client";
import Spinner from "./Spinner";

const Contact = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "profile"]{
            name,
            email,
            phoneNumber,
        }`
      )
      .then((data) => setProfile(data))
      .catch(console.error);
  }, []);

  return (
    <main className="min-h-screen p-12">
      <section className="container ">
        <h1 className="text-4xl font-bold flex justify-center cursive">
          My Contact
        </h1>
        {profile ? (
          profile.map((each, index) => (
            <section
              className="flex flex-col w-full h-full items-center mt-5 animate-bounce-in "
              key={index}
            >
              <h1 className="text-8xl font-bold cursive">{each.name}</h1>
              <div className="">
                <span className="mx-3 font-gray-300">{each.email}</span>
                <span className="mx-3 font-gray-300">{each.phoneNumber}</span>
              </div>
            </section>
          ))
        ) : (
          <Spinner />
        )}
      </section>
    </main>
  );
};

export default Contact;

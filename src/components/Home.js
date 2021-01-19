import React from "react";
import image from "../img/homeBackgroundImage.jpg";

const Home = () => {
  return (
    <main>
      <img
        src={image}
        alt="Nice dark theme background"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8 animate-bounce-in">
        <h1 className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name">
          Hello, I'm Akash Patel.
        </h1>
      </section>
    </main>
  );
};

export default Home;

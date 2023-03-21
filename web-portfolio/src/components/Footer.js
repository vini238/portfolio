//https://jaketrent.github.io/react-social-icons/

import React from "react";
import { SocialIcon } from 'react-social-icons';

export default function Footer() {
  return (
    <section id="footer">
      <div className="container px-5 py-10 mx-auto mt-15">
        <div className="text-center mb-10">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Social Links
          </h1>
        </div>
            <div className="h-32 w-1/4 m-auto mb-15 justify-items-center grid grid-cols-3 gap-1 content-start">
                <div className="transform h-25 w-25 transition duration-500 hover:scale-125"><SocialIcon url="https://www.linkedin.com/in/vincent-meka-4b6035158/" fgColor="#10B981" bgColor="#24292F" /></div>
                <div className="transform h-25 w-25 transition duration-500 hover:scale-125"><SocialIcon url="https://github.com/vini238?tab=repositories" fgColor="#10B981" /></div>
                <div className="transform h-25 w-25 transition duration-500 hover:scale-125"><SocialIcon url="https://www.facebook.com/vincent.meka/" fgColor="#10B981" bgColor="#24292F" /></div>
            </div>
      </div>
    </section>
  );
}
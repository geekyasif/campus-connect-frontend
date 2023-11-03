import React from "react";

function SocialIcon({ link, element }) {
  return (
    link && (
      <a
        className="border p-1 lg:p-2 flex items-center justify-center rounded-md border-blue-300 hover:border-blue-400 ease-in transition-all"
        href={link}
      >
        {element}
      </a>
    )
  );
}

export default SocialIcon;

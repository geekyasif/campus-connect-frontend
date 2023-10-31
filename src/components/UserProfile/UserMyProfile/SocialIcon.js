import React from "react";

function SocialIcon({ link, element }) {
  return (
    link && (
      <a
        className="border p-1 lg:p-2 flex items-center justify-center rounded-md"
        href={link}
      >
        {element}
      </a>
    )
  );
}

export default SocialIcon;

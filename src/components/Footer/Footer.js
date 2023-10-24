import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="text-center border-t-2 p-2 py-4 bg-white ">
      <p className="text-xs md:text-base">
        Made with <span>❤️</span>{" "}
        <Link className="text-indigo-500 font-semibold">Campus Connect</Link> by{" "}
        <a
          className="text-indigo-500"
          href="https://geekyasif.github.io/"
          target="_blank" rel="noreferrer"
        >
          Mohammad Asif
        </a>
      </p>
    </div>
  );
}

export default Footer;

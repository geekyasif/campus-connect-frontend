import React from "react";

function UserCertificateCard({ certificate }) {
  return (
    <div className="border p-2 my-2 flex flex-col lg:flex-row flex-wrap" key={certificate?.certificate_id}>
      <img
        src={certificate?.certificate_image}
        className="lg:w-[250px] h-[150px] w-full"
      />
      <div className="lg:ml-4 mt-2 lg:mt-0">
        <p className="text-xs lg:text-sm">
          <span className="font-bold text-sm lg:text-base">Title</span> :{" "}
          {certificate?.certificate_title}
        </p>
        <p className="text-xs lg:text-sm">
          <span className="font-bold text-sm lg:text-base">Issue Date</span> :{" "}
          {certificate?.certificate_issue_date}
        </p>
        <p className="text-xs lg:text-sm">
          <span className="font-bold text-sm lg:text-base">Expire Date</span> :{" "}
          {certificate?.certificate_expire_date}
        </p>
        <p className="text-xs lg:text-sm">
          <span className="font-bold text-sm lg:text-base">
            Certificate url
          </span>
          <a
            href={certificate?.certificate_url}
            className="text-indigo-600 text-sm lg:text-base"
          >
            : view
          </a>
        </p>
        <p>
          <span className="font-bold text-sm lg:text-base">
            Verification Link
          </span>
          <a
            href={certificate?.credential_verification_link}
            className="text-indigo-600 text-sm lg:text-base"
          >
            : view
          </a>
        </p>
      </div>
    </div>
  );
}

export default UserCertificateCard;

import React from "react";

function UserCertificateCard({ certificate }) {
  return (
    <div className="border p-2 my-2 flex flex-row">
      <img
        src={certificate?.certificate_image}
        className="w-[250px]  h-[150px] "
      />
      <div className="ml-4">
        <p>Certificate title : {certificate?.certificate_title}</p>
        <p>Certificate issue date : {certificate?.certificate_issue_date}</p>
        <p>Certificate expire date : {certificate?.certificate_expire_date}</p>
        <p>
          Certificate Url
          <a href={certificate?.certificate_url}> view</a>
        </p>
        <p>
          credential_verification_link
          <a href={certificate?.credential_verification_link}> view</a>
        </p>
      </div>
    </div>
  );
}

export default UserCertificateCard;

import React from "react";

export default function RepoBody({
  name,
  description,
  stars,
  issues,
  updatedAt,
  ownerName,
}) {
    let presentDate = new Date();
    let fetchedDate = new Date(updatedAt);
    let submittedDate = Math.round((presentDate.getTime() - fetchedDate.getTime())/(1000*3600*24));
  return (
    <div className="RepoBody">
      <h2>{name}</h2>
      <p>{description}</p>
      <div className="body-info">
        <span>Stars: {stars}</span>
        <span>Issues: {issues}</span>
        <span>
          Submitted {submittedDate} days ago by {ownerName}
        </span>
      </div>
    </div>
  );
}

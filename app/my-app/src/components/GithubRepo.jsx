import React from 'react'
import Media from "react-bootstrap/Media";

import RepoImage from './RepoContents/RepoImage';
import RepoBody from './RepoContents/RepoBody';

export default function GithubRepo({
  ownerAvatar,
  name,
  description,
  stargazers_count,
  open_issues,
  updated_at,
  ownerName,
}) {
  return (
    <div className="GithubRepo">
      <Media>
        <RepoImage image={ownerAvatar} />
        <Media.Body>
          <RepoBody
            name={name}
            description={description}
            stars={stargazers_count}
            issues={open_issues}
            updatedAt={updated_at}
            ownerName={ownerName}
          />
        </Media.Body>
      </Media>
    </div>
  );
}

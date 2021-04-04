import React, { useEffect, useState } from "react";
import { axiosInstance } from "../network/axiosConfix";
import GithubRepo from "./GithubRepo";

export default function RepoList() {
  const [Repos, setRepos] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const getData = async (page) => {
    try {
      const res = await axiosInstance.get(`&page=${page}`);
      setRepos(res.data.items);
    } catch (error) {
      console.log(error);
    }
  };
  let RepoListDiv = document.getElementById("RepoList");

  const nextPage = () => {
    setPageNumber(pageNumber + 1);
    getData(pageNumber);
    RepoListDiv.scrollTo({ top: 0, behavior: "smooth" });
  };
  const previousPage = () => {
    setPageNumber(pageNumber - 1);
    getData(pageNumber);
    RepoListDiv.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    getData(pageNumber);
  }, [pageNumber]);

  const createRepo = (repo) => {
    return (
      <GithubRepo
        key={repo.id}
        name={repo.name}
        description={repo.description}
        stargazers_count={repo.stargazers_count}
        open_issues={repo.open_issues}
        updated_at={repo.updated_at}
        ownerName={repo.owner.login}
        ownerAvatar={repo.owner.avatar_url}
      />
    );
  };

  return (
    <div className="container Repo">
      <h1>Github Trending Repos</h1>
      <div className="RepoList" id="RepoList">
        {Repos ? Repos.map(createRepo) : "Loading"}
      </div>
      <div className="PaginationGroup">
        <button
          className="btn btn-outline-light"
          disabled={pageNumber === 1}
          onClick={previousPage}
        >
          Previous
        </button>
        <span>Page: {pageNumber}</span>
        <button className="btn btn-outline-light" onClick={nextPage}>
          Next
        </button>
      </div>
    </div>
  );
}

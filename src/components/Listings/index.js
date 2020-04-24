import React from "react";
import "./style.css";
import { useAsync } from "react-async";

const Repos = async () =>
  await fetch("https://api.github.com/users/thanawatgulati/repos")
    .then((res) => (res.ok ? res : Promise.reject(res)))
    .then((res) => res.json());

export default function Listings() {
  const { data, error, isLoading } = useAsync({ promiseFn: Repos });
  if (isLoading) return "Loading...";
  if (error) return `Something went wrong: ${error.message}`;
  if (data)
    return (
      <div>
        <h2>Github Repository</h2>
        <hr />
        {data.map((r) => (
          <li key={r.id}>
            <b>Name :</b> {r.name}
            <br />
            <b>Github Link : </b>
            <a href={r.html_url}>{r.html_url}</a>
            <br />
            <b>Language : </b>
            {r.language === null ? "None" : r.language}
            <br />
            <b>Stargazers Count : </b>
            {r.stargazers_count}
            <hr />
          </li>
        ))}
      </div>
    );
}

import React from 'react';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.

    <ul>
      {props.repos.map((item) => (
        <li>Name: {item.name} <br/> Forks: {item.forks}</li>
      ))}
    </ul>

  </div>
)

export default RepoList;
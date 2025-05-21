import React, { useEffect, useState } from 'react';

const Repositories = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/aydasholani/repos');
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        console.error('Error fetching repos:', error);
      }
    };
    fetchRepos();
  }, []);

  return (
    <div className="repositories">
      <h2>My GitHub Repositories</h2>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id} className="repo-item">
            {/* Visar bild från GitHub repo */}
            <img 
              src={`https://opengraph.githubassets.com/1/${repo.full_name}`} 
              alt={`${repo.name} thumbnail`} 
              className="repo-image"
            />
            <div className="repo-details">
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                <h3>{repo.name}</h3>
              </a>
              <p>{repo.description || "No description available"}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Repositories;

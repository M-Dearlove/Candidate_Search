import {useState, useEffect } from "react";
import { Candidate } from "../interfaces/Candidate.interface.tsx";
import '../index.css';

export default function SavedCandidates() {
  const [potentialCandidates, setPotentialCandidates] = useState<Candidate[]>([]);

  useEffect (() => {
    const storedCandidates = JSON.parse(localStorage.getItem("potentialCandidates") || "[]");
    setPotentialCandidates(storedCandidates);
  }, []);

  if (!potentialCandidates.length) {
    return <div>There are no saved candidates.</div>
  }

  return (
    <div className="potential-candidates">
      <h1>Potential Candidates</h1>
      <div className="candidates-grid">
        {potentialCandidates.map((candidate) => (
          <div className="card" key={candidate.id}>
            <img
              className="avatar"
              src={candidate.avatar_url}
              alt={`Avatar for ${candidate.login}`}
            />
            <h2>
              Login: {candidate.login}
            </h2>
            <p>
              Name: {candidate.name}
            </p>
            <p>
              Location: {candidate.location || "Unavailable"}
            </p>
            <p>
              Email: {candidate.email || "Unavailable"}
            </p>
            <p>
              Company: {candidate.company || "Unavailable"}
            </p>
            <a
              href={candidate.html_url}
              target="_blank"
            >
              Github Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};



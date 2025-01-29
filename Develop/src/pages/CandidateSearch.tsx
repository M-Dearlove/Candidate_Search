import { useState, useEffect } from 'react';
import { searchGithub } from '../api/API';
import { Candidate } from "../interfaces/Candidate.interface.tsx";
import '../index.css';

const CandidateSearch = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const getCandidate = async () => {
      try {
        const candidate = await searchGithub();
        console.log(candidate);
        setCandidates(candidate);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    getCandidate();
  }, []);

  const potentialCandidate = () => {
    const currentCandidate: Candidate = candidates[index];
    const potentialCandidates: Candidate[] = JSON.parse(localStorage.getItem("potentialCandidates") || "[]");
    potentialCandidates.push(currentCandidate);
    localStorage.setItem("potentialCandidates", JSON.stringify(potentialCandidates));
    showNext();
  };

  const showNext = () => {
    if (index < candidates.length - 1) {
      setIndex((prevIndex) => prevIndex + 1);
    } else {
      alert("There are no more candidates available at this time.");
    }
  };

  if (!candidates.length) {
    return <div>There are no candidates to display at this time.</div>
  }

  let currentCandidate = candidates[index];

  return (
    <div className="candidates">
      <h1>Potential Candidates</h1>
      <div className="card">
        <img
          src={currentCandidate.avatar_url}
          alt={`Avatar for ${currentCandidate.login}`}
          className="avatar"
        />
        <h2>
          Login: {currentCandidate.login}
        </h2>
        <p>
          Name: {currentCandidate.name || "Unavailable"}
        </p>
        <p>
          Location: {currentCandidate.location || "Unavailable"}
        </p>
        <p>
          Email: {currentCandidate.email || "Unavailable"}
        </p>
        <p>
          Company: {currentCandidate.company || "Unavailable"}
        </p>
        <a
          href={currentCandidate.html_url}
          target="_blank"
        >
          Github Profile
        </a>
      </div>
      <div className="choices">
        <button onClick={showNext}>-</button>
        <button onClick={potentialCandidate}>+</button>
      </div>
    </div>
  );
};

export default CandidateSearch;

import { CSSProperties } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Nav() {
  // TODO: Add necessary code to display the navigation bar and link between the pages
  const location = useLocation();

  const linkStyle: CSSProperties = {
    padding: '5px',
    color: 'white',
    fontSize: '16pt',
  };

  const activeLinkStyle: CSSProperties = {
    ...linkStyle,
    color: 'coral',
  };

  const navItems = [
    { path: '../pages/CandidateSearch', label: 'Home' },
    { path: '../pages/SavedCandidates', label: 'Potential Candidates' }
  ];

  const sectionStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: '1rem',
    margin: '0 auto'
  };

  return (
    <nav>
      <section style={sectionStyle}>
        {navItems.map(({ path, label }) => (
          <div key={path}>
            <Link
              to={path}
              style={location.pathname === path ? activeLinkStyle : linkStyle}
            >
              {label}
            </Link>
          </div>
        ))}
      </section>
    </nav>
  )
};

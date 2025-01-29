import { NavLink } from 'react-router-dom';
import '../index.css';

export default function Nav() {
  const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'active' : 'nav-link';
  return (
    <div>
      <nav className='nav'>
          <div className='nav-item'>
            <NavLink to='/' className={getNavLinkClass}>
              Home
            </NavLink>
          </div>
          <div className='nav-item'>
            <NavLink to='/SavedCandidates' className={getNavLinkClass}>
              Potential Candidate List
            </NavLink>
          </div >
      </nav >
    </div >
  );
};

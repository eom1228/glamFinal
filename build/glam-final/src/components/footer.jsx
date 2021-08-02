import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { FaUserAlt } from 'react-icons/fa';
// import styles from '../styles/footer.module.scss';

const Footer = ({ location }) => {
  return (
    <section className="footer">
      <ul className="icons">
        <li style={{ listStyleType: 'none' }}>
          <Link className="main" to="/">
            {location.pathname === '/' ? <FaHome style={{ color: 'black' }} /> : <FaHome style={{ color: 'grey' }} />}
          </Link>
        </li>
        <li style={{ listStyleType: 'none' }}>
          <Link className="myProfile" to="/myProfile">
            {location.pathname === '/myProfile' ? <FaUserAlt style={{ color: 'black' }} /> : <FaUserAlt style={{ color: 'grey' }} />}
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default withRouter(Footer);

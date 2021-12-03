import React from 'react';
import { NavLink } from 'react-router-dom';
import ArrowRightIcon from '../icons/arrow-right-icon';

function Button({ story, title, link }) {
  return (
    <div>
      <div className={`button ${story}`}>
        <NavLink to={link}>
          <span>{title}</span>
          <span className="arrowIcon"><ArrowRightIcon /></span>
        </NavLink>
        {/* <div className="button-line"></div> */}
      </div>
    </div>
  );
}

export default Button;

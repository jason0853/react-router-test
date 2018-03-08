import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/about/foo">About Foo</Link></li>
        <li><Link to="/Posts">Posts</Link></li>
      </ul>
      <hr/>
    </div>
  );
};

export default Menu;
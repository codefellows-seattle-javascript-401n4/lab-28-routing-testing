import React from 'react';
import {a} from 'react-router-dom'

//write module
//nav html being rendered
class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
            <ul>
              <li><a href="/">About this page</a></li>
              <li><a href="/">About me</a></li>
              <li><a href="/">Github</a></li>
            </ul>
          </li>
          <li>
            <a href="/budget">Budget</a>
            <ul>
              <li><a href="/budget">Current Version</a></li>
              <li><a href="/">About the project</a></li>
              <li><a href="/">Github</a></li>
            </ul>
          </li>
          <li>
            <a href="/jwt-auth">JWT</a>
            <ul>
              <li><a href="/">Current Version</a></li>
              <li><a href="/">About the project</a></li>
              <li><a href="/">Github</a></li>
            </ul>
          </li>
          <li>
            <a href="/bmp-transformer">Bitmap</a>
            <ul>
              <li><a href="/">Current Version</a></li>
              <li><a href="/">About the project</a></li>
              <li><a href="/">Github</a></li>
            </ul>
          </li>
          <li>
            <a href="/contact">Contact</a>
            <ul>
              <li><a href="/">Current Version</a></li>
              <li><a href="/">About the project</a></li>
              <li><a href="/">Github</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Navbar;

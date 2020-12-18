import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Begin, Pages } from './styles';

const Header = () => (
  <Container>
    <Begin>
      <Link to="/">
        <strong>Star Wars Portal</strong>
      </Link>
    </Begin>
    <Pages>
      <Link to="/people/">
        <p>People</p>
      </Link>
      <Link to="/starships/">
        <p>Starships</p>
      </Link>
    </Pages>
  </Container>
);

export default Header;

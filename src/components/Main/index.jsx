import React from 'react'
import Promo from '../Promo';
import AboutProject from '../AboutProject';
import Techs from '../Techs';
import AboutMe from '../AboutMe';
import Portfolio from '../Portfolio';
import Container from '../Container';
import './styles.scss';

const Main = () => {
  return (
    <main className="intro">
      <Promo />
      <Container>
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
      </Container>
    </main>
  )
}

export default Main
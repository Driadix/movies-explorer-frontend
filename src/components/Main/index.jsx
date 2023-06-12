import React from 'react'
import Promo from '../Promo';
import AboutProject from '../AboutProject';
import Techs from '../Techs';
import AboutMe from '../AboutMe';
import Portfolio from '../Portfolio';
import './styles.scss';

const Main = () => {
  return (
    <main className="intro">
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
    </main>
  )
}

export default Main
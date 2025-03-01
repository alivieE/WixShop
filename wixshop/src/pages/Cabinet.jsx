import React from 'react';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import images from '../assets/index';
import s from './Cabinet.module.css';

const Cabinet = () => {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <section>
        <p>Enjoy Our Special Recommendations</p>
        <ul>
          <li className={s.lii}>
            <img src={images.cheess} />
            <p>FRENCH BRIE CHEESE</p>
            <div></div>
            <p>$6.99</p>
          </li>
          <li className={s.lii}>
            <img src={images.bacon} />
            <p>smoked virgina bacon</p>
            <div></div>
            <p>$12.99</p>
          </li>
          <li className={s.lii}>
            <img src={images.oliva} />
            <p>GREEK KALAMATA OLIVES</p>
            <div></div>
            <p>$8.99</p>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Cabinet;

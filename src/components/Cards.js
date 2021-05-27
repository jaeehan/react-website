import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import snake from '../images/snake.jpg';
import tic from '../images/game2.png';

function Cards() {
  return (
    <div className='cards'>
      <h1>My Projects</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
            src= {snake}
            text='SNAKE GAME'
            label='INFO 3225'
            path='/services'
            />
            <CardItem
              src={tic}
              text='TIC-TAC-TOE GAME'
              label='Personal Project'
              path='/services'
              />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
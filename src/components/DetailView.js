import React from 'react';
import './styles/DetailView.css';

const DetailView = ({ pokemon }) => {
    const {id, name, sprite, type } = pokemon;

  return (
    <section className="detail-view">
      <img className='sprite-image' src={sprite} />
      <div className='data-wrapper'>
        <h1 className='data-name'>{id} {name}</h1>
        <p className="data-char">{type}</p>
      </div>
    </section>
  )
}

export default DetailView;
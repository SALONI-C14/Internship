import React from 'react';
import Button from '../Button/Button.jsx';
import './Card.css';

function Card({ title, description, image, buttonText, onButtonClick, badge }) {
  return <article className="card">{image && <img className="card__image" src={image} alt={`${title} illustration`} />}<div className="card__content">{badge && <span className="card__badge">{badge}</span>}<h3>{title}</h3><p>{description}</p>{buttonText && <Button variant="outline" size="small" onClick={onButtonClick}>{buttonText}</Button>}</div></article>;
}

export default Card;

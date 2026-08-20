import React from 'react';

function Card({ title, children }) {
  return (
    <article className="card">
      <h2>{title}</h2>
      <div className="card-content">{children}</div>
    </article>
  );
}

export default Card;

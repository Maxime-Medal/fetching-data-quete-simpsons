import React from 'react';
// import './quotecard.css';

function QuoteCard ({ quote }) {
  return  (quote && (
  <figure className="QuoteCard">
    <img src={quote.image} alt={quote.character} />
    <figcaption>
      <blockquote>{quote.quote}</blockquote>
      <cite>{quote.character}</cite>
    </figcaption>
  </figure>
  ))
};

export default QuoteCard;
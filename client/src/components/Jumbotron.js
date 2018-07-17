import React from 'react';

const Jumbotron = props => {
  return (
    <div className='jumbotron'>
      <header>
        <h1>{props.title}</h1>
      </header>
    </div>
  );
}

export default Jumbotron;


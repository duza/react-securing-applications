import React from 'react';

const FeedItem = props => {
  const { item } = props;
  return (
    <div className='feed-item'>
      <div className='feed-item-name'>
        {item.name}
      </div>
      <div className='feed-item-content'>
        {item.content}
      </div>
    </div>
  );
}

export default FeedItem;


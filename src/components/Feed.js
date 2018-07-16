import React from 'react';
import FeedItem from './FeedItem';

const Feed = props => {
  const { feeds } = props;
  return (
    <div className='feed'>
      {feeds.map((item, index) => 
        <FeedItem
          key={index}
          item={item}
        />
      )}     
    </div>
  );
}

export default Feed;


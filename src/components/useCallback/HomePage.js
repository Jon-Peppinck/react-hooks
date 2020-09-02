import React, { useState, useCallback, useMemo } from 'react';

import Title from '../useCallback/Title';
import Counter from '../useCallback/Counter';

function HomePage() {
  const [likes, setLikes] = useState(10);
  const [comments, setComments] = useState(3);
  const [string, setString] = useState('');
  const [searchString, setSearchString] = useState('');

  const incrementLikes = useCallback(() => {
    setLikes(likes + 1);
  }, [likes]);

  const incrementComments = useCallback(() => {
    setComments(comments + 1);
  }, [comments]);

  // simulate getting from an API - imagine very large list
  const subscribers = [
    { id: 1, name: 'Barry' },
    { id: 2, name: 'Harry' },
    { id: 3, name: 'Larry' },
  ];

  const changeString = (e) => {
    setString(e.target.value);
  };

  const searchName = () => {
    setSearchString(string);
  };

  const filteredSubscriberNames = useMemo(
    () =>
      subscribers.filter((subscriber) => {
        console.log('filteredSubscriberNames fired!');
        return subscriber.name
          .toLowerCase()
          .includes(searchString.toLowerCase());
      }),
    [searchString]
  );

  return (
    <div>
      <Title title={'Home Page'} />
      <Counter count={likes} incrementCount={incrementLikes}>
        YouTube Likes
      </Counter>
      <Counter count={comments} incrementCount={incrementComments}>
        YouTube Comments
      </Counter>
      <div>
        <input type="text" value={string} onChange={changeString} />
        <button type="button" onClick={searchName}>
          Find Subscriber
        </button>
      </div>
      <ul style={{ listStyleType: 'none', fontSize: '20px' }}>
        {filteredSubscriberNames.map((subscriber) => (
          <li key={subscriber.id}>{subscriber.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;

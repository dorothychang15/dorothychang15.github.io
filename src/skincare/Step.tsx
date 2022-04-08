import React from 'react';

import { Content } from './SkincareContent';

export default function Step({
  title, body, recs
}: Content) {
  return (
    <div className='step'>
      <h3>{title}</h3>
      <p>{body}</p>
      {recs.map(rec => (
        <div key={rec}>{rec}</div>
      ))}
    </div>
  );
}
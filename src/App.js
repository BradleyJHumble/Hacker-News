import React, {useEffect, useState} from 'react';
import {getStoryIds} from './services/hackerNewsApi.js'

export const App = () => {
const [storyIds, setStoryIds] = useState([]);

useEffect(()=> {
  getStoryIds().then(data => data && setStoryIds(data))
}, []);

return (
  <p>{JSON.stringify(storyIds)}</p>
)
};

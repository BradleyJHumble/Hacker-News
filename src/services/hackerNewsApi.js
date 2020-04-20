import axios from 'axios';

// API docs = https://github.com/HackerNews/API

export const baseUrl = `https://hacker-news.firebaseio.com/v0/`;
export const newStoriesUrl = `${baseUrl}newstories.json`; // new stories
export const storyUrl = `${baseUrl}item/`; // story data

export const getStoryIds = async  () => {
  const result = await axios.get(newStoriesUrl).then(data => data);
  return result;
}

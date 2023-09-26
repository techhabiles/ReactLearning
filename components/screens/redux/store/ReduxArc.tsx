import {createStore} from 'redux';

export type News = {
  id: number;
  author: string;
  title: string;
  description: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
  url: string;
};
export type Action = {
  type: string;
  value: any;
};

const news: News[] = [];

const newsReducer = (state = {news, selectedNews: null}, action: Action) => {
  if (action.type === 'news') {
    state.news = action.value;
  }
  if (action.type === 'details') {
    state.selectedNews = action.value;
  }
  return state;
};

const store = createStore(newsReducer);
export default store;

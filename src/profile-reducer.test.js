import React from 'react';
import profileReducer, {addPostActionCreator, deletePostActionCreator} from "./redux/profileReducer";

test('new post should be added', () => {
  let action = addPostActionCreator('hello!')
  let state = {
    posts: [
      {id: 0, message: "hello", like: "5"},
      {id: 1, message: "how are you?", like: "0"}
    ],
    profile: null,
    status: ''
  };
  let newState = profileReducer(state,action);

  expect(newState.posts.length).toBe(3)
});

test('right message of post', () => {
  let action = addPostActionCreator('hello!')
  let state = {
    posts: [
      {id: 0, message: "hello", like: "5"},
      {id: 1, message: "how are you?", like: "0"}
    ],
    profile: null,
    status: ''
  };
  let newState = profileReducer(state,action);

  expect(newState.posts[2].message).toBe('hello!')
});

test('length of posts should be decremented', () => {
  let action = deletePostActionCreator(0)
  let state = {
    posts: [
      {id: 0, message: "hello", like: "5"},
      {id: 1, message: "how are you?", like: "0"}
    ],
    profile: null,
    status: ''
  };
  let newState = profileReducer(state,action);

  expect(newState.posts.length).toBe(1)
});

test('length of posts should not be decremented if postId is wrong', () => {
  let action = deletePostActionCreator(1000)
  let state = {
    posts: [
      {id: 0, message: "hello", like: "5"},
      {id: 1, message: "how are you?", like: "0"}
    ],
    profile: null,
    status: ''
  };
  let newState = profileReducer(state,action);

  expect(newState.posts.length).toBe(2)
});


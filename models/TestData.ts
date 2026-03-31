import { User } from './User';

export const validUser: User = {
  username: 'tomsmith',
  password: 'SuperSecretPassword!'
};

export const invalidUsers = {
  wrongUsername: {
    username: 'wrongUser',
    password: 'SuperSecretPassword!'
  },
  wrongPassword: {
    username: 'tomsmith',
    password: 'wrongPass'
  },
  emptyCredentials: {
    username: '',
    password: ''
  },
  emptyUsername: {
    username: '',
    password: 'SuperSecretPassword!'
  },
  emptyPassword: {
    username: 'tomsmith',
    password: ''
  }
};
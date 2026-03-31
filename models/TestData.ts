import { User } from './User';

export const validUser: User = {
  username: 'tomsmith',
  password: 'SuperSecretPassword!'
};

export const invalidUserMap: Record<string, User> = {
  wrongUsername: {
    username: 'wrongUser',
    password: 'SuperSecretPassword!'
  },
  wrongPassword: {
    username: 'tomsmith',
    password: 'wrongPass'
  },
  empty: {
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
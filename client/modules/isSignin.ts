import setToken from './setToken';
import jwt from 'jsonwebtoken';
import { User } from 'const/types';

const isSignin = () => {
  const { access, refresh } = setToken.get();

  if (!access || !refresh) return;

  const user = jwt.decode(access) as User;
  return user;
};

export default isSignin;

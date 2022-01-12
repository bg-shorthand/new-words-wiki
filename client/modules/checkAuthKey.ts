import emailAuthApi from 'api/emailAuth';

const checkAuthKey = async (email: string, authKey: string) => {
  const { data } = await emailAuthApi.get(email, authKey);
  if (data.auth) return true;
  else return false;
};

export default checkAuthKey;

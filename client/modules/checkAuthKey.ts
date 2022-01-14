import emailAuthApi from 'api/emailAuth';

const checkAuthKey = async (email: string, authKey: string) => {
  const { data } = await emailAuthApi.get(email, authKey);
  return data.success;
};

export default checkAuthKey;

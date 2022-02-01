const countStringSize = (string: string) => {
  return encodeURI(string).split(/%..|./).length - 1;
};

export default countStringSize;

const generateResponse = {
  success(data) {
    return { success: true, data };
  },
  fail(errMsg, newAccess) {
    return { success: false, errMsg, newAccess };
  },
};

module.exports = generateResponse;

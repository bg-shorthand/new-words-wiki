const setToken = {
  set(acc: string, ref: string, keepSignin: boolean) {
    const store = keepSignin ? localStorage : sessionStorage;
    store.setItem('access', acc);
    store.setItem('refresh', ref);
  },
  get() {
    return {
      access: localStorage.getItem('access')
        ? localStorage.getItem('access')
        : sessionStorage.getItem('access'),
      refresh: localStorage.getItem('refresh')
        ? localStorage.getItem('refresh')
        : sessionStorage.getItem('refresh'),
      keepSignin: !!localStorage.getItem('access'),
    };
  },
  clear() {
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    sessionStorage.removeItem('access');
    sessionStorage.removeItem('refresh');
  },
};

export default setToken;

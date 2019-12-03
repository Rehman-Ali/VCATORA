import axios from 'axios';

const setAuthUser = user => {
  if (user) {
    axios.defaults.headers.common['x-auth-user'] = user;
  } else {
    delete axios.defaults.headers.common['x-auth-user'];
  }
};

export default setAuthUser;

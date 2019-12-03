import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from './components/home';
import Routes from './routing/Routes';
import Layout from './components/layout/index';
// redux
import { Provider } from 'react-redux';
import store from './store';
// import { loadUser } from './actions/auth';
// import setAuthToken from './utils/setAuthToken';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
        <Layout>
          <Route exact path='/' component={Landing} />
          <Route component={Routes} />
        </Layout>
      </Router>
      </Provider>
    );
  }
}
export default App;

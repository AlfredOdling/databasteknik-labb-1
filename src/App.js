import React, { Component } from "react";
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import routes from './routes';
import Header from './common/components/Header'
import Footer from './common/components/Footer'

class App extends Component {

  render() {
    return (
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <div className="App">
              <Header />
              <div className="wrap">
                {routes}
              </div>
            </div>
          </ConnectedRouter>
        </Provider>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './app.scss';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Content, Theme } from '@carbon/react';
import TutorialHeader from './components/TutorialHeader';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Theme theme="g100">
          <TutorialHeader />
        </Theme>
        <Content>
          <Switch>
            <Route exact path="/" element={LandingPage} />
            <Route path="/repos" element={RepoPage} />
          </Switch>
        </Content>
      </BrowserRouter>
    );
  }
}

export default App;

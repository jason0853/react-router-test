import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Menu from 'components/Menu';
import { Home, About, Posts } from 'pages';

const App = () => {
  return (
    <React.Fragment>
      <Menu />
      <Route exact path="/" component={Home} />
      <Switch>
        <Route path="/about/:name" component={About} />
        <Route path="/about" component={About} />
      </Switch>
      <Route path="/posts" component={Posts} />
    </React.Fragment>
  )
};

export default App;
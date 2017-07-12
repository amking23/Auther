import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import history from './history';
import Root from './components/Root';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import UserList from './components/User/UserList';
import UserDetail from './components/User/UserDetail';
import StoryList from './components/Story/StoryList';
import StoryDetail from './components/Story/StoryDetail';
import { fetchUsers } from './redux/users';
import { fetchStories } from './redux/stories';

/* -----------------    COMPONENT     ------------------ */

class Routes extends Component {

  componentDidMount () {
    this.props.fetchInitialData();
  }

  render () {
    return (
      <Router history={history}>
        <Root>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route exact path="/users" component={UserList} />
            <Route path="/users/:id" component={UserDetail} />
            <Route exact path="/stories" component={StoryList} />
            <Route path="/stories/:id" component={StoryDetail} />
            <Route component={Home} />
          </Switch>
        </Root>
      </Router>
    );
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapProps = null;

const mapDispatch = dispatch => ({
  fetchInitialData: () => {
    dispatch(fetchUsers());
    dispatch(fetchStories());
    // what other data might we want to fetch on app load?
  }
});

export default connect(mapProps, mapDispatch)(Routes);

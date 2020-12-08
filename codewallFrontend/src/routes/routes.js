import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import withAuthProtection from '../utils/authHOC/withAuthProtection';
import noAuthProtection from '../utils/authHOC/noAuthProtection';
import { MenuComponent, WallComponent, SignIn, SignUp } from '../components';
import CreateSnippet from '../components/WallComponent/Wallcomponents/createSnippet'
import { connect } from 'react-redux';

const ProtectedCreateSnippet = withAuthProtection('/')(CreateSnippet)
const NoAuthSignIn = noAuthProtection('/')(SignIn)
const NoAuthSignUp = noAuthProtection('/')(SignUp)

const Routes = (props) => {
    const { auth } = props;
    return (
        <Router>
            <MenuComponent />
            <h1>codewall</  h1>

          <Switch>
            <Route exact path='/' component={WallComponent}/>
            <Route
            exact
            path='/signin'
            render={props => (
            <NoAuthSignIn me={auth.uid} {...props} />
            )}
            /> 
            <Route
            exact
            path='/signup'
            render={props => (
            <NoAuthSignUp me={auth.uid} {...props} />
            )}
            />
            <Route
            exact
            path='/createsnippet'
            render={props => (
            <ProtectedCreateSnippet me={auth.uid} {...props} />
            )}
            />
          </Switch>
        </Router>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
  }
  
  export default connect(mapStateToProps)(Routes)
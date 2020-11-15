import React from 'react';
import firebase from '../../config/fbConfig';

// create a function that take a path and then return HOC
// const withAuthProtection = redirectPath => HOC
const noAuthProtection = redirectPath => WrappedComponent => {
    class NoAuthProtection extends React.Component {
      componentDidMount() {
        // use history from parent.
        const { history } = this.props;
        console.log('in da current User', firebase.auth().currentUser)
        if (firebase.auth().currentUser) {
          // no auth at the beginning of the app, redirect them to login.
          return history.push(redirectPath)
        }
      }
      componentWillReceiveProps(nextProps) {
        const { me, history } = this.props;
        const { me: nextMe } = nextProps;
        console.log('in da me', me)
        console.log('in da nextMe', nextMe)
        if (!me && nextMe) {
          // this case is a must,
          // if user stay at auth route while they signing out
          // we must take them to login again immediately.
          history.push(redirectPath)
        }
      }
      render() {
        const { me } = this.props;
        if (me) {
          // don't render anything if no auth
          return null
        }
        return <WrappedComponent {...this.props} />
      }
    }
     
    return NoAuthProtection
  }

  export default noAuthProtection;
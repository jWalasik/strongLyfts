import React from 'react';
import { connect } from 'react-redux';
import { startLogin, startLoginTest } from '../actions/auth';

export const LoginPage = ({ startLogin, startLoginTest }) => {
  const testUser = window.referrer === 'https://jwalasik.netlify.app/'
  
  return (
    <div className="box-layout">
      <div className="box-layout__box">
        <p>Welcome to</p>
        <h1 className="box-layout__title">Strong Lyfts</h1>
        <p>Your personal gym helper</p>
        <button className="button" onClick={startLogin}>Login with Google</button>

        {testUser ?
          (<div>
            <h3>Redirect from portfolio detected!</h3>
            <p>You can continue as test user:</p>
            <button className="button" onClick={startLoginTest}>Login as Test User</button>
          </div>)
        : null}
        
        <div className='box-layout__desc'>Strong Lifts is workout tracker app based on popular training routine 5x5. 
        While simple, it's highly effective program for building strength.</div>
      </div>
    </div>
)};

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin()),
  startLoginTest: () => dispatch(startLoginTest()),
});

export default connect(undefined, mapDispatchToProps)(LoginPage);

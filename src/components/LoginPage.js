import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <p>Welcome to</p>
      <h1 className="box-layout__title">Strong Lyfts</h1>
      <p>Your personal gym helper</p>
      <button className="button" onClick={startLogin}>Login with Google</button>
      
      <div className='box-layout__desc'>Strong Lifts is workout tracker app based on popular training routine 5x5. 
      While simple, it's highly effective program for building strength.</div>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);

import React from 'react';
import { Link } from 'react-router-dom';
import Page from './Page'

const NotFoundPage = () => (
  <Page>
    <h2>404 - <Link to="/">Go home</Link></h2>
  </Page>
);

export default NotFoundPage;

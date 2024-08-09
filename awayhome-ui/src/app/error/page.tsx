import React from 'react';
import ErrorPage from '../../components/ErrorPage';

const ErrorPagePage: React.FC = () => {
  return <ErrorPage statusCode={404} message="Page not found" />;
};

export default ErrorPagePage;

import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './routes';
import reportWebVitals from './reportWebVitals';
import Layout from './components/Layout';

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  );
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
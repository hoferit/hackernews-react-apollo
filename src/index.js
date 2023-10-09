import './styles/index.css';
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000',
});

const root = ReactDOM.createRoot(document.getElementById('root'));

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
);

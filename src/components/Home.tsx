import React from 'react';
import { useOktaAuth } from '@okta/okta-react';

const Home = () => {
  const { authState } = useOktaAuth();
  return (
    <>
      <h1>Home</h1>
      {authState.isPending ? <div>Loading...</div> : !authState.isAuthenticated ? <div>Not logged in!</div> : <div>Logged in</div>}
    </>
  );
};

export default Home;

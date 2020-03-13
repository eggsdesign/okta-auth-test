import React from 'react';
import { useOktaAuth } from '@okta/okta-react';

const Header = () => {
  const { authState, authService } = useOktaAuth();

  const login = async () => {
    authService.login('/');
  };

  const logout = async () => {
    authService.logout('/');
  };

  return (
    <header>
      {authState.isAuthenticated ? (
        <button type="button" onClick={logout}>
          Log out
        </button>
      ) : (
        <button type="button" onClick={login}>
          Log in
        </button>
      )}
    </header>
  );
};

export default Header;

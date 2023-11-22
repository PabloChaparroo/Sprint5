export default function useIsLoggedIn() {
    return Boolean(window.localStorage.getItem('authData'));
  }

{/*Nos devolvera un booleano para saber si esta logeado o no*/}

export default function useIsLoggedIn() {
    return Boolean(window.localStorage.getItem('authData'));
  }
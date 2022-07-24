import Cookie from 'js-cookie';

const SetCookie = (cookiename, userin) => {
  Cookie.set(cookiename, userin, {
    expires: 365,
    secure: true,
    sameSite: 'strict',
    path: '/',
  });
};

export default SetCookie;

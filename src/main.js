// eslint-disable-next-line import/no-cycle
import { home } from './lib/Archivos JS/home.js';
// eslint-disable-next-line import/no-cycle
import { register } from './lib/Archivos JS/register.js';
// eslint-disable-next-line import/no-cycle
import { login } from './lib/Archivos JS/login.js';
// eslint-disable-next-line import/no-cycle
import { profile } from './lib/Archivos JS/profile.js';
// eslint-disable-next-line import/no-cycle
import { landingPage } from './lib/Archivos JS/landingPage.js';
// eslint-disable-next-line import/no-cycle
import { editProfile } from './lib/Archivos JS/editProfile.js';
// eslint-disable-next-line import/no-cycle
import { contact } from './lib/Archivos JS/contact.js';
// eslint-disable-next-line import/no-cycle
import { aboutTheApp } from './lib/Archivos JS/aboutTheApp.js';

// const rootDiv = document.getElementById('root');

/* export const onNavigate = (pathname) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(routes[pathname](onNavigate));
}; */

const routes = {
  '/': home,
  '/login': login,
  '/register': register,
  '/profile': profile,
  '/editProfile': editProfile,
  '/landingPage': landingPage,
  '/contact': contact,
  '/aboutTheApp': aboutTheApp,
};

// función para anexar un registro al historial del navegador (.pushState)
export const onNavigate = (pathname, routesList = routes) => {
  const rootDiv = document.getElementById('root');
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  rootDiv.replaceChildren(routesList[pathname]());
};

// onpopstate, se dispara realizando una acción en el navegador como volver
window.onpopstate = () => {
  onNavigate(window.location.pathname);
};
window.addEventListener('load', () => onNavigate(window.location.pathname));

/* const component = routes[window.location.pathname](onNavigate);

window.onpopstate = () => {
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(routes[window.location.pathname]());
}; */

/* if (rootDiv) {
  rootDiv.appendChild(component);
}
 */

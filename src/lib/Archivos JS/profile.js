import { getAuth } from 'firebase/auth';

// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../../main';

const rootDiv = document.getElementById('root');

export const profile = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  //console.log(user);
  //console.log(user.photoURL);
  rootDiv.innerHTML = ' ';

  let photo;

  if (user.photoURL != null) {
    photo = user.photoURL;
  } else {
    const avatar = [
      './lib/img/avatar-1.png',
      './lib/img/avatar-2.png',
      './lib/img/avatar-3.png',
      './lib/img/avatar-4.png',
      './lib/img/avatar-5.png',
    ];
    const selectedAvatar = avatar[Math.floor(Math.random() * avatar.length)];
    user.photoURL = selectedAvatar;
    photo = selectedAvatar;
  }

  const homeDiv = document.createElement('div');
  const container = document.createElement('section');
  const containerRegister = document.createElement('div');
  const containerImg = document.createElement('section');
  const imgwelcome = document.createElement('img');
  const imgTop = document.createElement('img');
  const imgBottom = document.createElement('img');
  const fondoImagen = document.createElement('div');
  const title = document.createElement('h2');
  const titleImg = document.createElement('img');
  const avatar = document.createElement('img');
  const homeDiv2 = document.createElement('div');
  const p = document.createElement('p');
  const homeDiv3 = document.createElement('div');
  const p2 = document.createElement('p');
  const homeDiv4 = document.createElement('div');
  const p3 = document.createElement('p');
  const p4 = document.createElement('p');
  const p5 = document.createElement('p');
  const p6 = document.createElement('p');
  const homeDiv5 = document.createElement('div');
  const btnHome = document.createElement('button');
  const btnEdit = document.createElement('button');
  /*const btnCerrar = document.createElement('button');*/

  homeDiv.className = 'container';
  container.className = 'container-im-and-register';
  containerImg.className = 'container-img';
  titleImg.src = './lib/img/flowers1.png';
  titleImg.className = 'img-title';
  title.textContent = 'Mi Perfil';
  title.className = 'title-register';
  imgwelcome.src = './lib/img/Women-cel.png';
  imgwelcome.className = 'img-welcome-2';
  imgTop.src = './lib/img/collage-3.png';
  imgTop.className = 'img-top-2';
  imgBottom.src = './lib/img/collage-5.png';
  imgBottom.className = 'img-bottom-2';
  containerRegister.className = 'container-register';
  p.textContent = 'Usuario';
  p.className = 'text-subtitle2';
  avatar.referrerPolicy = 'no-referrer';
  avatar.src = `${photo}`;
  avatar.className = 'avatar-class';
  fondoImagen.className = 'avatar-class';
  p2.textContent = 'Descripción';
  p2.className = 'text-subtitle2';
  p3.textContent = 'Email';
  p3.className = 'text-subtitle2';
  p4.textContent = `${user.displayName}`;
  p4.className = 'text-subtitle3';
  p5.textContent = `Hola, soy estudiante de Desarrollo Web, 
  tengo 24 años, disfruto muchos salir y enfrentarme a nuevos retos`;
  p5.className = 'text-subtitle4';
  p6.textContent = `${user.email}`;
  p6.className = 'text-subtitle3';
  btnHome.textContent = 'Ir al Home';
  btnHome.className = 'buttonRegister';
  btnEdit.textContent = 'Editar Perfil';
  btnEdit.className = 'buttonEditProfile';
  /*btnCerrar.textContent = 'Cerrar Sesión';*/
  homeDiv2.className = 'container-div';
  homeDiv3.className = 'container-div';
  homeDiv4.className = 'container-div';
  homeDiv5.className = 'container-div';

  homeDiv.appendChild(container);
  container.appendChild(containerRegister);
  container.appendChild(containerImg);
  homeDiv.appendChild(imgTop);
  homeDiv.appendChild(imgBottom);
  containerImg.appendChild(imgwelcome);
  containerRegister.appendChild(titleImg);
  containerRegister.appendChild(title);
  fondoImagen.appendChild(avatar);
  containerRegister.appendChild(fondoImagen);
  homeDiv2.appendChild(p);
  homeDiv2.appendChild(p4);
  containerRegister.appendChild(homeDiv2);
  homeDiv3.appendChild(p2);
  homeDiv3.appendChild(p5);
  containerRegister.appendChild(homeDiv3);
  homeDiv4.appendChild(p3);
  homeDiv4.appendChild(p6);
  containerRegister.appendChild(homeDiv4);
  homeDiv5.appendChild(btnHome);
  homeDiv5.appendChild(btnEdit);
  /*homeDiv5.appendChild(btnCerrar);*/
  containerRegister.appendChild(homeDiv5);

  /*btnCerrar.addEventListener('click', async () => {
    await signOut(auth);
    //console.log('user signed out');
    onNavigate('/');
  });*/

  btnEdit.addEventListener('click', () => onNavigate('/editProfile'));

  btnHome.addEventListener('click', () => onNavigate('/landingPage'));

  return homeDiv;
};

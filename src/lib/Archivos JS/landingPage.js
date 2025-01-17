import { getAuth } from 'firebase/auth';
import './firebase.js';
// eslint-disable-next-line import/no-cycle, import/no-cycle
import { onNavigate } from '../../main';
import { carousel } from './carousel.js';
import {
  functionSignOut,
  functionDeleteTask,
  functionGetTask2,
  functionUpdateTask,
  functionSaveTask,
  functionOnGetTask,
} from './index.js';

let editStatus = false;
let id = '';

export const landingPage = () => {
  const auth = getAuth();
  const user = JSON.parse(localStorage.getItem('user'));
  // Creación de elementos
  const postAll = document.createElement('div');
  const imgBackground = document.createElement('img');
  const containerHeader = document.createElement('section');
  const avatarIcon = document.createElement('img');
  const greeting = document.createElement('p');

  const containerSlider = document.createElement('section');
  const divSlider = document.createElement('div');
  const imgSlider1 = document.createElement('div');
  const slider1 = document.createElement('img');
  const imgSlider2 = document.createElement('div');
  const slider2 = document.createElement('img');
  const imgSlider3 = document.createElement('div');
  const slider3 = document.createElement('img');
  const btnLeft = document.createElement('button');
  const btnRight = document.createElement('button');

  const containerCategories = document.createElement('section');
  const saludDiv = document.createElement('div');
  const socialDiv = document.createElement('div');
  const emocionalDiv = document.createElement('div');
  const imgSalud = document.createElement('img');
  const imgSocial = document.createElement('img');
  const imgEmocional = document.createElement('img');
  const pSalud = document.createElement('p');
  const pSocial = document.createElement('p');
  const pEmocional = document.createElement('p');

  const containerPosts = document.createElement('section');
  const estructuraPost = document.createElement('div');
  const postDiv = document.createElement('div');

  const titlePost = document.createElement('h2');
  const homeDiv3 = document.createElement('form');
  const showConfirmationDiv = document.createElement('div');
  const editDescription = document.createElement('textarea');
  const saveChanges = document.createElement('button');
  const titleSelect = document.createElement('h3');
  const containerSelect = document.createElement('select');

  editDescription.rows = '3';
  editDescription.placeholder = 'Quiero compartir con ustedes...';
  editDescription.id = 'editDescription';
  editDescription.className = 'text-content-post-description';
  saveChanges.id = 'saveChanges';
  saveChanges.textContent = 'Publicar';
  saveChanges.className = 'buttonRegister button-post';
  homeDiv3.className = 'container-divPost';
  showConfirmationDiv.className = 'container-divPost';
  titlePost.textContent = 'Comparte con Nosotras:';
  titlePost.className = 'subtitle-post';
  imgBackground.src = 'https://i.postimg.cc/02NPHv7h/img-flw.png';
  imgBackground.className = 'img-background';
  titleSelect.textContent = 'Selecciona una categoría:';
  titleSelect.className = 'title-categoría';
  containerSelect.className = 'content-select';
  containerSelect.id = 'content-select';
  containerSelect.name = 'categorias';
  containerSelect.innerHTML = `
  <option value="social" class="option-select">Social</option>
  <option value="emocional" class="option-select">Emocional</option>
  <option value="salud" class="option-select">Salud</option>`;

  homeDiv3.appendChild(editDescription);
  homeDiv3.appendChild(titleSelect);
  homeDiv3.appendChild(containerSelect);
  homeDiv3.appendChild(saveChanges);
  postDiv.appendChild(titlePost);
  postDiv.appendChild(homeDiv3);
  postDiv.appendChild(showConfirmationDiv);
  const btnshowPost = document.createElement('button');
  btnshowPost.textContent = 'Ver publicaciones';
  btnshowPost.className = 'buttonSeePosts button-See-Posts';
  const showPostDiv = document.createElement('div');

  const imgPostDiv = document.createElement('div');
  const imgPost = document.createElement('img');
  const postAuthor = document.createElement('p');
  const divisionLine = document.createElement('div');
  const postInferiorDiv = document.createElement('div');
  const categoryDiv = document.createElement('div');
  const likeDiv = document.createElement('div');
  const editDiv = document.createElement('div');
  const deleteDiv = document.createElement('div');
  const likeImg = document.createElement('img');
  const editImg = document.createElement('img');
  const deleteImg = document.createElement('img');
  const likeText = document.createElement('p');
  const editText = document.createElement('p');
  const iconMenu = document.createElement('img');
  const menuDisplayed = document.createElement('div');

  // Asignación de clases
  postAll.className = 'containerLandingPage';
  containerHeader.className = 'containerHeader';
  containerSlider.className = 'containerSlider';
  containerCategories.className = 'containerCategories';
  containerPosts.className = 'containerPosts';
  showPostDiv.className = 'containerPosts2';
  avatarIcon.referrerPolicy = 'no-referrer';
  avatarIcon.src = user ? user.photoURL : 'https://i.postimg.cc/Wz1LKmq0/avatar-1.png';
  avatarIcon.className = 'avatarIcon-class';
  iconMenu.src = 'https://i.postimg.cc/gJGfXyD1/menu-icon-8.png';
  iconMenu.className = 'icon-menu';
  greeting.textContent = user ? user.displayName : 'prueba';
  greeting.className = 'class-greeting';
  imgSlider1.className = 'slider';
  slider1.src = 'https://i.postimg.cc/k5vHm6ms/slider-1.png';
  slider1.className = 'slider-img';
  slider1.id = 'imgSlider1';
  imgSlider2.className = 'slider';
  slider2.src = 'https://i.postimg.cc/9fCxJm77/slider-2.png';
  slider2.className = 'slider-img';
  imgSlider3.className = 'slider';
  slider3.src = 'https://i.postimg.cc/s2mTLkY0/slider-3.png';
  slider3.className = 'slider-img';
  divSlider.className = 'imgSlider';
  divSlider.id = 'imgSlider-container';
  btnLeft.textContent = '<';
  btnLeft.className = 'btnSlider1';
  btnLeft.id = 'btnSlider-left';
  btnRight.textContent = '>';
  btnRight.className = 'btnSlider2';
  btnRight.id = 'btnSlider-right';

  saludDiv.className = 'class-categories';
  socialDiv.className = 'class-categories';
  emocionalDiv.className = 'class-categories';
  imgSalud.src = 'https://i.postimg.cc/kMLPwSXR/salud-Icon.png';
  imgSalud.className = 'class-categories-icons';
  imgSocial.src = 'https://i.postimg.cc/xTHDZdcx/social-Icon.png';
  imgSocial.className = 'class-categories-icons';
  imgEmocional.src = 'https://i.postimg.cc/mgsfWG9b/emocional-Icon.png';
  imgEmocional.className = 'class-categories-icons';
  pSalud.textContent = 'Salud';
  pSalud.className = 'text-categories';
  pSocial.textContent = 'Social';
  pSocial.className = 'text-categories';
  pEmocional.textContent = 'Emocional';
  pEmocional.className = 'text-categories';

  estructuraPost.classList = 'class-estructuraPost';
  postDiv.classList = 'class-postDiv';
  imgPostDiv.classList = 'class-post-emocional';
  imgPost.src = 'https://i.postimg.cc/W4NBt6SC/meditando.png';
  imgPost.className = 'class-imgPost';
  postAuthor.textContent = user ? user.displayName : 'prueba';
  postAuthor.className = 'class-postAuthor';
  divisionLine.className = 'class-divisionLine';
  postInferiorDiv.className = 'class-postInferiorDiv';
  categoryDiv.textContent = 'Emocional';
  categoryDiv.className = 'class-category';
  likeDiv.className = 'class-like';
  editDiv.className = 'class-edit';
  deleteDiv.className = 'class-delete';
  likeImg.src = 'https://i.postimg.cc/JhY20wsH/like-icon.png';
  likeImg.className = 'class-likeImg';
  editImg.src = 'https://i.postimg.cc/QtRYgpkX/edit-icon.png';
  editImg.className = 'class-editImg';
  deleteImg.src = 'https://i.postimg.cc/L6F0n38D/delete-icon.png';
  deleteImg.className = 'class-deleteImg';
  likeText.textContent = 'Me gusta';
  editText.textContent = 'Editar';
  menuDisplayed.className = 'menu-desplegable';
  menuDisplayed.id = 'menu-desplegable-id';

  // Añadiendo hijos
  postAll.appendChild(containerHeader);
  postAll.appendChild(menuDisplayed);
  postAll.appendChild(imgBackground);
  containerHeader.appendChild(avatarIcon);
  containerHeader.appendChild(greeting);
  containerHeader.appendChild(iconMenu);
  containerSlider.appendChild(btnLeft);
  containerSlider.appendChild(divSlider);
  divSlider.appendChild(imgSlider1);
  imgSlider1.appendChild(slider1);
  divSlider.appendChild(imgSlider2);
  imgSlider2.appendChild(slider2);
  divSlider.appendChild(imgSlider3);
  imgSlider3.appendChild(slider3);
  containerSlider.appendChild(btnRight);
  postAll.appendChild(containerSlider);
  containerCategories.appendChild(saludDiv);
  containerCategories.appendChild(socialDiv);
  containerCategories.appendChild(emocionalDiv);
  saludDiv.appendChild(imgSalud);
  saludDiv.appendChild(pSalud);
  socialDiv.appendChild(imgSocial);
  socialDiv.appendChild(pSocial);
  emocionalDiv.appendChild(imgEmocional);
  emocionalDiv.appendChild(pEmocional);
  postAll.appendChild(containerCategories);
  postAll.appendChild(containerPosts);
  containerPosts.appendChild(postDiv);
  imgPostDiv.appendChild(imgPost);
  imgPostDiv.appendChild(categoryDiv);
  likeDiv.appendChild(likeImg);
  likeDiv.appendChild(likeText);
  editDiv.appendChild(editImg);
  editDiv.appendChild(editText);
  deleteDiv.appendChild(deleteImg);
  containerPosts.appendChild(btnshowPost);
  containerPosts.appendChild(showPostDiv);

  // Menú hambuguesa
  iconMenu.addEventListener('click', () => {
    menuDisplayed.style.display = 'flex';
    const options = `<nav class='menu-nav'>
      <li><a class='option' id='option1'>Mi Perfil</a></li>
      <li><a class='option' id='option2'>Contáctanos</a></li>
      <li><a class='option' id='option3'>Cerrar Sesión</a></li>
      <img src='https://i.postimg.cc/mg8dpxNp/icon-close.png' alt='close' class='close-button' id='close-button'>
      </nav>`;
    menuDisplayed.innerHTML = options;

    /* Al dar click a el icono cerrar */
    const closeButton = document.getElementById('close-button');
    closeButton.addEventListener('click', () => {
      menuDisplayed.style.display = 'none';
    });

    const miPerfil = document.getElementById('option1');
    miPerfil.addEventListener('click', () => onNavigate('/profile'));

    const contactanos = document.getElementById('option2');
    contactanos.addEventListener('click', () => onNavigate('/contact'));

    const cerrarSesion = document.getElementById('option3');
    cerrarSesion.addEventListener('click', async () => {
      await functionSignOut(auth);
      localStorage.clear();
      // console.log('user signed out');
      onNavigate('/');
    });
  });

  // Redirección al click en el slider1
  imgSlider1.addEventListener('click', () => onNavigate('/aboutTheApp'));

  // Lamar a la función Carrusel- slider
  const arraySliders = [imgSlider1, imgSlider2, imgSlider3];
  carousel(btnRight, btnLeft, arraySliders);

  // Función de fireBase - firestore*/
  btnshowPost.classList.remove('button-See-Posts');
  btnshowPost.addEventListener('click', async () => {
    functionOnGetTask((querySnapshot) => {
      // console.log('querySnapshot', querySnapshot);
      let html = '';
      btnshowPost.classList.remove('buttonSeePosts');
      btnshowPost.classList.add('button-See-Posts');

      // creando nuevo array de la data que llega de firebase para realizar el sort.
      const newArr = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const idDoc = doc.id;
        newArr.push([data, { id: idDoc }]);
      });
      const data = newArr.sort(
        (a, b) => new Date(b[0].creationDate) - new Date(a[0].creationDate),
      );

      data.forEach((doc) => {
        // const task = doc.data();
        const date = new Date(doc[0].creationDate);
        if (doc[0].idUser === user.uid) {
          html += `
          <div class = 'class-estructuraPost2'>
            <p>${doc[0].editdescription}</p>
            <h3 class='task-nameUser'>${doc[0].nameUser}</h3>
            <h3 class='task-date'>${date.toLocaleDateString()}</h3>
            <img src='https://i.postimg.cc/7LhKpBKH/adorno-comentarios.png' alt='img-adorno' class='img-adorno'>
            <section class='class-optionsDiv2'>
              <div class='class-like' data-id= '${doc[1].id}' ><img class= 'class-likeImg' src = ${doc[0].likes.includes(user.uid) ? 'https://i.postimg.cc/JhY20wsH/like-icon.png' : 'https://i.postimg.cc/9QFb785d/no-like.png'}> 'Me gusta'  <span class= 'count-likes'>${doc[0].likes.length}</span></div>
              <button class= 'class-edit' data-id= '${doc[1].id}'> Editar </>
              <button class= 'class-delete' data-id= '${doc[1].id}'> Eliminar </button>
            </section>
          </div>`;
        } else {
          html += `
          <div class = 'class-estructuraPost2'>
            <p>${doc[0].editdescription}</p>
            <h3 class='task-nameUser'>${doc[0].nameUser}</h3>
            <h3 class='task-date'>${date.toLocaleDateString()}</h3>
            <img src='https://i.postimg.cc/7LhKpBKH/adorno-comentarios.png' alt='img-adorno' class='img-adorno'>
            <section class='class-optionsDiv'>
              <div class='class-like' data-id= '${doc[1].id}'><img class= 'class-likeImg' src = ${doc[0].likes.includes(user.uid) ? 'https://i.postimg.cc/JhY20wsH/like-icon.png' : 'https://i.postimg.cc/9QFb785d/no-like.png'}> ${'Me gusta'}<span class= 'count-likes'>${doc[0].likes.length}</span></div>
            </section>
            </div>`;
        }
      });

      showPostDiv.innerHTML = html;

      // Boton para eliminar comentarios del usuario.
      const btnsDelete = showPostDiv.querySelectorAll('.class-delete');
      btnsDelete.forEach((btn) => {
        // console.log('si se ingresando');
        btn.addEventListener('click', ({ target: { dataset } }) => {
          // console.log('si se esta eliminando');
          showConfirmationDiv.classList.remove('container-divPost');
          showConfirmationDiv.classList.add('container-confirmationDiv');
          showConfirmationDiv.innerHTML = `
              <p> ¿Borrar posts? </p>
              <div class='container-confirmationBts'>
                <button id='buttonYes' class='buttonYes'> Sí </button> <button id='buttonNo' class='buttonNo'> No </button>
              </div>`;
          showConfirmationDiv.style.display = 'block';
          const buttonYes = document.querySelector('.buttonYes');
          buttonYes.addEventListener('click', () => {
            functionDeleteTask(dataset.id);
            showConfirmationDiv.style.display = 'none';
          });
          const buttonNo = document.querySelector('.buttonNo');
          buttonNo.addEventListener('click', () => {
            showConfirmationDiv.style.display = 'none';
          });
        });
      });

      // Boton para editar comentarios del usuario.
      const btnsEdit = showPostDiv.querySelectorAll('.class-edit');

      btnsEdit.forEach((btn) => {
        btn.addEventListener('click', async ({ target: { dataset } }) => {
          // homeDiv3.style.position = 'fixed';
          homeDiv3.classList.remove('container-divPost');
          homeDiv3.classList.add('container-divPost2');

          const doc = await functionGetTask2(dataset.id);
          const task = doc.data();

          editDescription.value = task.editdescription;

          editStatus = true;
          id = doc.id;
          saveChanges.innerText = 'Guardar cambios';
        });
      });

      // Boton para likear comentarios del usuario.
      const btnsLike = document.querySelectorAll('.class-like');

      btnsLike.forEach((btn) => {
        // eslint-disable-next-line consistent-return
        btn.addEventListener('click', async ({ target: { dataset } }) => {
          try {
            const doc = await functionGetTask2(dataset.id);
            const task = doc.data();
            id = doc.id;

            if (doc !== undefined) {
              try {
                if (!task.likes.includes(user.uid)) {
                  const newLikes = [...task.likes, user.uid];
                  functionUpdateTask(id, {
                    likes: newLikes,
                  });
                } else {
                  const filterUsers = task.likes.filter((el) => el !== user.uid);
                  functionUpdateTask(id, {
                    likes: filterUsers,
                  });
                }
              } catch (err) {
                return err;
              }
            }
          } catch (err) {
            return err;
          }
        });
      });
    });
  });

  // función para obtener los valores de las opciones del selector.

  const selectCategory = containerSelect;
  let valueOption = '';

  selectCategory.addEventListener('change', () => {
    // eslint-disable-next-line default-case
    switch (selectCategory.value) {
      case 'social':
        valueOption = 'social';
        break;
      case 'emocional':
        valueOption = 'emocional';
        break;
      case 'salud':
        valueOption = 'salud';
        break;
    }
    // console.log(valueOption);
  });

  // Boton para enviar cambios al formulario - comentarios del usuario.
  homeDiv3.addEventListener('submit', async (e) => {
    e.preventDefault();

    postDiv.classList.remove('edit-container-divPost');

    const editdescription = editDescription.value;
    const nameUser = user.displayName;
    const idUser = user.uid;
    const creationDate = Date.now();
    const likes = [];
    let category;

    if (valueOption === '') {
      category = 'social';
    } else {
      category = valueOption;
    }

    if (!editStatus) {
      functionSaveTask(editdescription, nameUser, idUser, creationDate, likes, category);
    } else {
      // función modificar firebase para edición de post
      functionUpdateTask(id, {
        editdescription: editDescription.value,
      });
      homeDiv3.classList.remove('container-divPost2');
      homeDiv3.classList.add('container-divPost');
      saveChanges.innerText = 'Publicar';
      editStatus = false;
    }
    homeDiv3.reset();
  });

  // función para llamar a las categorias

  // Redirección al click en el slider1
  saludDiv.addEventListener('click', () => {
    localStorage.setItem('category', JSON.stringify('salud'));
    onNavigate('/categoryPost');
  });
  socialDiv.addEventListener('click', () => {
    localStorage.setItem('category', JSON.stringify('social'));
    onNavigate('/categoryPost');
  });
  emocionalDiv.addEventListener('click', () => {
    localStorage.setItem('category', JSON.stringify('emocional'));
    onNavigate('/categoryPost');
  });

  avatarIcon.addEventListener('click', () => onNavigate('/profile'));

  return postAll;
};

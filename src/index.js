import './style.css';
import createHeader from './header';
import createHome from './home';
import createMenu from './menu';
// import createContact from './contact';
import { createButton } from './toolshed';

function loadWebsite() {
  const body = document.querySelector('body');
  // reset page
  const header = createHeader();
  header.appendChild(createButton('Home', createHome));
  header.appendChild(createButton('Menu', createMenu));
  // header.appendChild(createButton('Contact', 'myButton', createContact));
  body.appendChild(header);
  createHome();
}
loadWebsite();

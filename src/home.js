import {
  createHtmlElement,
  resetPage,
  buildLayout,
  createCard,
} from './toolshed';

const Home = (() => {
  const openingHours = {
    title: 'Opening Hours',
    text: ['Sunday: 8am - 8pm', 'Monday: 6am - 6pm', 'Tuesday: 6am - 6pm', 'Wednesday: 6am - 6pm', 'Thursday: 6am - 10pm', 'Friday: 6am - 10pm', 'Saturday: 8am - 10pm'],
  };
  const tripadvisor = {
    title: 'Fancy Prenzlberg Schnösel says',
    text: ['Enter this mysterious Reälm. The atmosphere is truly spooky. Maybe you do not want to come back.'],
  };
  const location = {
    title: 'Location',
    text: ['777 chill side alley', '98765 Hogsmeade'],
  };
  return {
    openingHours,
    tripadvisor,
    location,
  };
})();

function createHome() {
  resetPage();
  // configure Webpage content here
  const title = 'Mysterious Magic Restaurant';
  // build webpage
  const mainCol = buildLayout();
  const restaurantTitle = createHtmlElement(title, 'h1', 'restaurant-title', 'h1', 'p-3');
  restaurantTitle.classList.add('text-center');
  mainCol.appendChild(restaurantTitle);
  createCard(mainCol, Home.tripadvisor);
  createCard(mainCol, Home.openingHours);
  createCard(mainCol, Home.location);
}

export default createHome;

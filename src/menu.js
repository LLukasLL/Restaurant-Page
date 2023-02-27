import {
  createHtmlElement,
  resetPage,
  buildLayout,
  createCard,
} from './toolshed';

const menu = (() => {
  const honeybeer = {
    title: 'Honey Beer',
    text: ['come here to experience this special stuff'],
  };
  const trollschnaps = {
    title: 'Troll Schnaps',
    text: ['contains ... alcohol', 'maybe a bit strong'],
  };
  const prorridge = {
    title: 'Porridge',
    text: ['some Oats'],
  };
  return {
    honeybeer,
    trollschnaps,
    prorridge,
  };
})();

function createMenu() {
  resetPage();
  // build webpage
  const mainCol = buildLayout();
  const beverages = createHtmlElement('Beverages', 'h1', 'beverages', 'h1', 'p-3', 'text-center');
  mainCol.appendChild(beverages);
  createCard(mainCol, menu.honeybeer);
  createCard(mainCol, menu.trollschnaps);
  const meals = createHtmlElement('Meals', 'h1', 'meals', 'h1', 'p-3', 'text-center');
  mainCol.appendChild(meals);
  createCard(mainCol, menu.prorridge);
}

export default createMenu;

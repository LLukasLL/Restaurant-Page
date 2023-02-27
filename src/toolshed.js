function createButton(myName, eventFunction) {
  const htmlButton = document.createElement('button');
  htmlButton.classList.add('btn', 'btn-outline-success', 'my-2', 'my-sm-0');
  htmlButton.innerHTML = myName;
  htmlButton.addEventListener('click', eventFunction);
  return htmlButton;
}
function createHtmlElement(myName, myType, myID, ...myClasses) {
  const element = document.createElement(myType);
  // eslint-disable-next-line no-restricted-syntax
  for (const myClass of myClasses) {
    element.classList.add(myClass);
  }
  element.innerHTML = myName;
  element.id = myID;
  return element;
}
function resetPage() {
  const body = document.querySelector('body');
  const content = document.getElementById('content');
  content.remove();
  const newcontent = createHtmlElement('', 'div', '', 'container');
  newcontent.id = 'content';
  body.appendChild(newcontent);
  // return content;
}
function buildLayout() {
  const content = document.getElementById('content');
  const contentRow = createHtmlElement('', 'div', '', 'row');
  const col1 = createHtmlElement('', 'div', '', 'col');
  const mainCol = createHtmlElement('', 'div', '', 'col-8');
  // mainCol.classList.add('row');
  // mainCol.classList.add('justify-content-center');
  const col3 = createHtmlElement('', 'div', '', 'col');
  contentRow.appendChild(col1);
  contentRow.appendChild(mainCol);
  contentRow.appendChild(col3);
  content.appendChild(contentRow);
  return mainCol;
}

function createCard(mainCol, myCard) {
  const row = createHtmlElement('', 'div', '', 'row', 'justify-content-center', 'p-3');
  const card = createHtmlElement('', 'div', myCard.title, 'card', 'w-50');
  const cardBody = createHtmlElement('', 'div', '', 'card-body');
  const cardTitle = createHtmlElement(myCard.title, 'h3', '', 'card-title');
  cardBody.appendChild(cardTitle);
  // eslint-disable-next-line no-restricted-syntax
  for (const text of myCard.text) {
    const textItem = createHtmlElement(text, 'p', '', 'card-text');
    cardBody.appendChild(textItem);
  }
  card.appendChild(cardBody);
  row.appendChild(card);
  mainCol.appendChild(row);
}

export {
  createButton,
  createHtmlElement,
  resetPage,
  buildLayout,
  createCard,
};

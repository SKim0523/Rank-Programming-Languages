const draggable_list = document.getElementById('draggable-list');
const check = document.getElementById('check');

const mostPopularLanguages = [
    'JavaScript',
    'Python',
    'HTML',
    'CSS',
    'Java',
    'SQL',
    'NoSQL',
    'C#',
    'Rust',
    'Perl'
];

// Store Listitems (after sorting)
const listItems = [];

// Index to keep track of each list item
let dragStartIndex;

createList();

// Insert list items into DOM
function createList() {
    //[...spread operator >> makes copy of the array]
    [...mostPopularLanguages]
    //map will take the array and return a new array
    .map(a => ({value: a, sort: Math.random()}))

    .sort((a, b) => a.sort - b.sort)

    .map(a => a.value)
    //forEach >> highOrder Array method
    .forEach((language, index) => {
        //Creating a new item to insert into the DOM
      const listItem = document.createElement('li');
        //When creating custom attribute in HTML I want to use 'data' attribute
      listItem.setAttribute('data-index', index);

      listItem.innerHTML = `
      <span class="number">${index + 1}</span>
      <div class="draggable" draggable='true'>
          <p class="language-name">${language}</p>
          <i class="fas fa-grip-lines"></i>
      </div>
      `;

      listItems.push(listItem);

      draggable_list.appendChild(listItem);
    });
    addEventListeners();
}

function dragStart() {
  // console.log('Event: ', 'dragstart');
  dragStartIndex = +this.closest('li').getAttribute('data-index')
}

function dragEnter() {
  // console.log('Event: ', 'dragenter');
  this.classList.add('over')
}

function dragLeave() {
  // console.log('Event: ', 'dragsleave');
  this.classList.remove('over')
}

function dragOver(e) {
  // console.log('Event: ', 'dragover');
  e.preventDefault();
}

function dragDrop() {
  // console.log('Event: ', 'drop');
  const dragEndIndex = +this.getAttribute('data-index');
  swapItems(dragStartIndex, dragEndIndex;
    this.classList.remove('over')
}

function swapItems(fromIndex, toIndex) {
  const intemOne = listItems[fromIndex].querySelector('draggable')
  const intemTwo = listItems[fromIndex].querySelector('draggable')

  listItems[fromIndex].appendChild(itemTwo);
  listItems[toIndex].appendChild(itemOne);
}

function addEventListeners(){
  const draggables = document.querySelectorAll('.draggable');
  const dragListItems = document.querySelectorAll('.draggable-list li');

  draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', dragStart);
  })

  dragListItems.forEach(item => {
    item.addEventListener('dragover', dragOver);
    item.addEventListener('drop', dragDrop);
    item.addEventListener('dragenter', dragEnter);
    item.addEventListener('dragleave', dragLeave);
  })
  
}
const draggable_list = document.getElementById('draggable-list');
const check = document.getElementById('check');

const mostPopularLanguages = [
    'Python',
    'Java',
    'JavaScript',
    'C#',
    'C/C++',
    'PHP',
    'R',
    'TypeScript',
    'Objective-C',
    'Swift'
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
  swapItems(dragStartIndex, dragEndIndex); 
    this.classList.remove('over')
}

//Swap list items that are drag and drop
function swapItems(fromIndex, toIndex) {
  const itemOne = listItems[fromIndex].querySelector('.draggable')
  const itemTwo = listItems[toIndex].querySelector('.draggable')

  listItems[fromIndex].appendChild(itemTwo);
  listItems[toIndex].appendChild(itemOne);
}

//Check the order of list items
function checkOrder() {
  listItems.forEach((listItem, index) => {
    const languageName = listItem.querySelector('.draggable').innerText.trim();

    if(languageName !== mostPopularLanguages[index]) {
      listItem.classList.add('wrong');
    } else {
      listItem.classList.remove('wrong');
      listItem.classList.add('right');
    }
  });
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

check.addEventListener('click', checkOrder);

function openLanguage(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
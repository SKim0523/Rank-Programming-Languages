const draggable_list = document.getElementById('draggable_list');
const check_btn = document.getElementById('check-btn');

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

// Store Listitems
const listItems = [];

let dragStartIndex;

createList();

// Insert list items into DOM
function createList() {
    [...mostPopularLanguages]
    .forEach((language, index) => {
      const listItem = document.createElement('li');

      listItem.setAttribute('data-index', index);

      listItem.innerHTML = `
      <span class="number">${index + 1}</span>
      <div class="draggable" draggable='true'>
          <p class="language-name">${language}</p>
          <i class="fas fa-grip-lines"></i>
      </div>
      `;
      listItems.push(listItem);

      draggable_list.appendChile(listItem);
    });
}
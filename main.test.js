/**
 * @jest-environment jsdom
 */
import { sort, search, newsList } from "./main.js";

//Example testing for search function
test("Search function testing", () => {
  document.body.innerHTML = `
    <div class="container">
      <div class="input-form">
        <input id="search-input" type="text" placeholder="Search for news"/>
        <button id="search-btn" type="button">Search</button>

        <div class="small-button-container">
          <span>Filters:</span>
          <button id="filter-btn-1" type="button">A ↓ </button>
          <button id="filter-btn-2" type="button">A ↑ </button>
        </div>
      </div>
    </div>

    <div id="news-list-container">

  </div>
  `;
  require('./main.js');
  require('./assets/js/controller.js')
  expect(search(newsList)).toBe(newsList);
});

//Sort Ascending Testing
test("Sort ascending testing", ()=>{
  document.body.innerHTML = `
    <div class="container">
      <div class="input-form">
        <input id="search-input" type="text" placeholder="Search for news"/>
        <button id="search-btn" type="button">Search</button>

        <div class="small-button-container">
          <span>Filters:</span>
          <button id="filter-btn-1" type="button">A ↓ </button>
          <button id="filter-btn-2" type="button">A ↑ </button>
        </div>
      </div>
    </div>

    <div id="news-list-container">

  </div>
  `;
  require('./main.js');
  require('./assets/js/controller.js')
  expect(sort("ascending")).toBe(newsList.sort())
});
//Sort Descending Testing
test("Sort descendig testing", ()=>{
  document.body.innerHTML = `
    <div class="container">
      <div class="input-form">
        <input id="search-input" type="text" placeholder="Search for news"/>
        <button id="search-btn" type="button">Search</button>

        <div class="small-button-container">
          <span>Filters:</span>
          <button id="filter-btn-1" type="button">A ↓ </button>
          <button id="filter-btn-2" type="button">A ↑ </button>
        </div>
      </div>
    </div>

    <div id="news-list-container">

  </div>
  `;
  require('./main.js');
  require('./assets/js/controller.js')
  expect(sort("descending")).toBe(newsList.sort().reverse())
});
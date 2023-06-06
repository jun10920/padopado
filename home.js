const searchBox = document.querySelector('#search-form');
const searchInput = document.querySelector('#search-form input');
const LOCATION_KEY = 'location';

function searchWS(event) {
  event.preventDefault();
  let locationName = searchInput.value.trim();
  if (locationName.length > 1) {
    localStorage.setItem(LOCATION_KEY, locationName);
    location.href = 'WaterPlayScore.html';
  } else {
    alert(`검색어 ${locationName}가 너무 짧습니다.`);
  }
}

searchBox.addEventListener('submit', searchWS);

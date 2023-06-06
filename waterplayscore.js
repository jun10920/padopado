import { beachList } from './data.js';

const leftSearchBox = document.querySelector('#leftSearch-form');
const leftSearchInput = document.querySelector('#leftSearch-form input');
const LOCATION_KEY = 'location';
const savedLocationname = localStorage.getItem(LOCATION_KEY);
const waterPlayScoreData = 

fetch 함수로 외부 api 불러오기
function leftSearchWS(event) {
  event.preventDefault();
  let locationName = leftSearchInput.value.trim();
  let beachCode = '';
  beachList.map((item) => {
    if (item['을왕리 해수욕장'].includes(locationName)) {
      beachCode = item[1];
    }
  });
  const APP_KEY =
    '1jNeSm%2BkOSVqQqKVo7LCyBElEH9TOvga83q3NvqhOCtgiJimlGpLTxBS%2BE4M5maA4kqw9Al5GL%2BFb5haxIOsjQ%3D%3D';
  const url = `http://apis.data.go.kr/1360000/BeachInfoservice/getUltraSrtFcstBeach?serviceKey=${APP_KEY}&base_date=20230606base_time=1831&beach_num=${beachCode}&dataType=JSON`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.response.body.items.sky));
}

function paintWaterPlayScore() {
  if (0 <= waterPlayScoreData && waterPlayScoreData < 10) {
    paintWaterScore1st();
  } else if (10 <= waterPlayScoreData && waterPlayScoreData < 20) {
    paintWaterScore2nd();
  } else if (20 <= waterPlayScoreData && waterPlayScoreData < 40) {
    paintWaterScore3rd();
  } else if (40 <= waterPlayScoreData && waterPlayScoreData < 70) {
    paintWaterScore4th();
  } else if (70 <= waterPlayScoreData && waterPlayScoreData <= 100) {
    paintWaterScore5th();
  }
}

function paintWaterScore1st()
function paintWaterScore2nd()
function paintWaterScore3rd()
function paintWaterScore4th()
function paintWaterScore5th()

if (savedLocationname !== null) {
  //savedLocationname을 가지고 외부 api를 불러오는 데이터 값으로 넣어서
  //원하는 데이터를 가지고 와서 함수에 맞게 넣는다.
}

function leftSearchWS(event) {
  event.preventDefault();
  let locationName = leftSearchInput.value.trim();
  if (locationName.length > 1) {
    localStorage.setItem(LOCATION_KEY, locationName);
    leftSearchInput.value = '';
    // location.href = 'WaterPlayScore.html';
  } else {
    alert(`검색어 ${locationName}가 너무 짧습니다.`);
  }
}

leftSearchBox.addEventListener('submit', leftSearchWS);

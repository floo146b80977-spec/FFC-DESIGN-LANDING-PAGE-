/*!
* Start Bootstrap - Business Casual v7.0.9 (https://startbootstrap.com/theme/business-casual)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-business-casual/blob/master/LICENSE)
*/
// Highlights current date on contact page
window.addEventListener('DOMContentLoaded', event => {
    const listHoursArray = document.body.querySelectorAll('.list-hours li');
    listHoursArray[new Date().getDay()].classList.add(('today'));
})


// js slider 1
let index1 = 0;
let index2 = 0;
let index3 = 0;

function moveSlide(step, sliderId, indexVarName) {
  const slider = document.getElementById(sliderId);
  const container = slider.parentElement;
  const containerWidth = container.offsetWidth;
  const total = slider.children.length;

  if (indexVarName === 'index1') {
    index1 = (index1 + step + total) % total;
    slider.style.transform = `translateX(-${index1 * containerWidth}px)`;
  } else if (indexVarName === 'index2') {
    index2 = (index2 + step + total) % total;
    slider.style.transform = `translateX(-${index2 * containerWidth}px)`;
  } else if (indexVarName === 'index3') {
    index3 = (index3 + step + total) % total;
    slider.style.transform = `translateX(-${index3 * containerWidth}px)`;
  }
}



//    ซูมเปิดภภาพ 
  function openFullscreen(img) {
    const viewer = document.getElementById("fullscreenViewer");
    const viewerImg = document.getElementById("fullscreenImage");
    viewerImg.src = img.src;
    viewer.style.display = "flex";
  }

  function closeFullscreen() {
    document.getElementById("fullscreenViewer").style.display = "none";
  }


//   alert box 
function showAlert(message) {
  const alertBox = document.getElementById('customAlert');
  const messageSpan = document.getElementById('alertMessage');
  messageSpan.textContent = message;
  alertBox.style.display = 'block';

  // ซ่อนอัตโนมัติหลัง 3 วินาที (เลือกได้)
  setTimeout(() => {
    alertBox.style.display = 'none';
  }, 10000);
}

function closeAlert() {
  document.getElementById('customAlert').style.display = 'none'; } 
  showAlert(" หน้านี้สามารถกดเข้าดูรูปผลงานเต็มได้!");
  
let slideIndex = 1;
function showSlides() {
  const slides = document.querySelector(".slides");
  const dots = document.querySelectorAll(".dot");

  if (slides && slideIndex > slides.childElementCount) {
    slideIndex = 1;
  }

  if (slides && slideIndex < 1) {
    slideIndex = slides.childElementCount;
  }

  slides &&
    (slides.style.transform = `translateX(${-100 * (slideIndex - 1)}%)`);

  dots && dots.forEach((dot) => dot.classList.remove("active"));
  dots[slideIndex - 1] && dots[slideIndex - 1].classList.add("active");
}

function nextSlide() {
  slideIndex++;
  showSlides();
}

function prevSlide() {
  slideIndex--;
  showSlides();
}

function currentSlide(index) {
  slideIndex = index;
  showSlides();
}

setInterval(nextSlide, 80000); // Auto slide every 3 seconds

showSlides();

function handleSignPopup(paramater) {
  const sign = document.querySelector("#sign");
  sign.setAttribute("class", "");
  sign.classList.add("active", paramater);
}
function cancelSignPopup() {
  const sign = document.querySelector("#sign");
  sign.setAttribute("class", "");
}
function handleInfoPopup() {
  const headerDetail = document.querySelector(".header_detail");
  headerDetail.classList.toggle("active");
}
function handleAlertPopup() {
  const headerDetail = document.querySelector(".header_alert_new");
  headerDetail.classList.toggle("active");
}
function handleFindPopup() {
  const headerDetail = document.querySelector(".header_result");
  headerDetail.classList.toggle("active");
}
document.addEventListener("click", function (event) {
  var headerDetail = document.querySelector(".header_detail");
  var info = document.querySelector("#infoPopup");
  var headerDetailA = document.querySelector(".header_alert_new");
  var infoA = document.querySelector(".signed_alert");
  var headerDetailS = document.querySelector(".header_result");
  var infoS = document.querySelector(".header_search button");

  // Check if the clicked element is outside the headerDetail element
  if (!headerDetail.contains(event.target) && !info.contains(event.target)) {
    // If it is, hide the headerDetail element
    headerDetail.classList.remove("active");
  }
  if (!headerDetailA.contains(event.target) && !infoA.contains(event.target)) {
    // If it is, hide the headerDetail element
    headerDetailA.classList.remove("active");
  }
  if (!headerDetailS.contains(event.target) && !infoS.contains(event.target)) {
    // If it is, hide the headerDetail element
    headerDetailS.classList.remove("active");
  }
});
var searchInput = document.getElementById("search_input");
var headerResult = document.querySelector(".header_result");
var headerResultHeader = document.querySelector(".header_result_header h4");
var searchTimeout;

searchInput.addEventListener("input", function () {
  // Clear the previous timeout
  clearTimeout(searchTimeout);

  // Set a new timeout for 300ms
  searchTimeout = setTimeout(function () {
    // Perform search operation (you can replace this with your own logic)
    var searchTerm = searchInput.value.trim();
    if (searchTerm !== "") {
      // Mock search result (replace this with your actual search logic)
      var searchResultExists = Math.random() < 0.5;

      if (searchResultExists) {
        // If search result exists, render UI and add class "active"
        headerResult.classList.add("active");
        headerResultHeader.innerText = "Search Results for: " + searchTerm;
        // You can add logic to render other search result UI elements here
      } else {
        // If no search result, still add class "active" and display a message
        headerResult.classList.add("active");
        headerResultHeader.innerText = "Không tìm thấy kết quả";
      }
    } else {
      // If search term is empty, hide the result container
      headerResult.classList.remove("active");
    }
  }, 300);
});
var liElements = document.querySelectorAll(".course_info ul li");
var pElement = document.querySelector(".course_info_head p");
var pLiElement = document.querySelectorAll(".course_info ul li p:first-child");
// Lặp qua từng phần tử và thêm sự kiện click
pLiElement &&
  pLiElement.forEach(function (pLiElement) {
    pLiElement.addEventListener("click", function () {
      pLiElement.parentElement.classList.toggle("active");
    });
  });
function toggleAll() {
  // Kiểm tra nếu có class active ở ít nhất một phần tử li
  var hasActiveClass = Array.from(liElements).some(function (li) {
    return li.classList.contains("active");
  });

  // Nếu có, xóa class active khỏi tất cả các phần tử li và thay đổi innerText của p
  if (hasActiveClass) {
    liElements.forEach(function (li) {
      li.classList.remove("active");
    });
    pElement.innerText = "Hiện tất cả";
  } else {
    // Ngược lại, thêm class active cho tất cả các phần tử li và thay đổi innerText của p
    liElements.forEach(function (li) {
      li.classList.add("active");
    });
    pElement.innerText = "Đóng tất cả";
  }
}
const element = document.querySelector(".time_dashboard_hello_h1");
const text1 = "Xin chào, Trọng Phúc";
const text2 = "Học, học nữa, học mãi,...";
let currentText = text1;
let index = 0;

function type() {
  element && (element.textContent = currentText.slice(0, index++));
  if (index <= currentText.length) {
    setTimeout(type, 50); // Adjust typing speed as needed
  } else {
    setTimeout(erase, 5000); // Wait for 2 seconds before erasing
  }
}

function erase() {
  element.textContent = currentText.slice(0, index--);
  if (index >= 0) {
    setTimeout(erase, 50); // Adjust erasing speed as needed
  } else {
    // Toggle between text1 and text2
    currentText = currentText === text1 ? text2 : text1;
    index = 0;
    setTimeout(type, 1000); // Wait for 1 second before typing again
  }
}

type(); // Start the typing animation
function updateDateTime() {
  const dateElement = document.querySelector(".time_dashboard_hello_date");
  const now = new Date();

  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const day = now.getDate().toString().padStart(2, "0");
  const month = (now.getMonth() + 1).toString().padStart(2, "0"); // Tháng bắt đầu từ 0
  const year = now.getFullYear();

  const dateTimeString = `${hours}:${minutes} | ${day}/${month}/${year}`;
  dateElement && (dateElement.textContent = dateTimeString);
}

// Gọi hàm updateDateTime ngay khi trang được tải và sau mỗi phút
updateDateTime();
setInterval(updateDateTime, 60000); // 60000 milliseconds = 1 phút
// Lấy tất cả các phần tử li trong danh sách
const listItems = document.querySelectorAll(".learning_list_ul li");
document.addEventListener("DOMContentLoaded", function () {
  listItems && listItems[0] && listItems[0].click();
});
const totalItems = listItems.length;
const progressI = document.querySelector(".my_course_progress > i");
const progressNum = document.querySelector(".my_course_progress_num");
const progressTotal = document.querySelector(".my_course_progress_total");
const quiz = document.querySelector(".learning_quiz.active");
const quizi = document.querySelector(".learning_quiz");
const quizModal = document.querySelector(".quiz_modal.active");
const quizModalb = document.querySelector(".quiz_modal");
const quizCountDown = document.querySelector(".quiz_countdown");
function startQuiz() {
  quizi && quizi.classList.add("active");
  quizModalb && quizModalb.classList.remove("active");
  setTimeout(() => {
    quizCountDown && quizCountDown.classList.add("active");
  }, 1000);
}
function cancelQuiz() {
  quizModalb && quizModalb.classList.remove("active");
  quizModal && quizModal.classList.remove("active");
}
// Thêm sự kiện click cho mỗi phần tử li
listItems.forEach((item, index) => {
  quiz && quiz.classList.remove("active");
  item.addEventListener("click", () => {
    if (item.classList.contains("quiz")) {
      quizModalb && quizModalb.classList.add("active");
    }
    // Loại bỏ class "active" từ tất cả các phần tử li
    listItems.forEach((li) => li.classList.remove("active"));

    // Thêm class "actived" vào phần tử li trước đó (nếu tồn tại)
    if (index > 0) {
      listItems[index - 1].classList.add("actived");
    }

    // Thêm class "active" vào phần tử li được click
    item.classList.add("active");
    item.classList.add("actived");
    const percentage =
      (document.querySelectorAll(".learning_list_ul li.actived").length /
        totalItems) *
      100;
    // console.log(percentage);
    progressI.style.width = percentage + "%";
    progressNum.innerText = Math.round(percentage) + "%";
    progressTotal.innerText =
      document.querySelectorAll(".learning_list_ul li.actived").length +
      "/" +
      totalItems;
  });
});
document.addEventListener("DOMContentLoaded", function () {
  // Set the countdown time in seconds
  var countdownTime = 600; // 10 minutes

  // Get the countdown element
  var countdownElement = document.getElementById("countdown");

  // Update the countdown every second
  var countdownInterval = setInterval(function () {
    // Calculate minutes and seconds
    var minutes = Math.floor(countdownTime / 60);
    var seconds = countdownTime % 60;

    // Format the time as mm:ss
    var formattedTime = padNumber(minutes) + ":" + padNumber(seconds);

    // Update the countdown element
    countdownElement.textContent = formattedTime;

    // Decrease the countdown time
    countdownTime--;

    // If the countdown reaches zero, stop the interval
    if (countdownTime < 0) {
      clearInterval(countdownInterval);
      countdownElement.textContent = "00:00"; // Optional: Change text when countdown reaches zero
    }
  }, 1000);

  // Function to pad single-digit numbers with a leading zero
  function padNumber(number) {
    return number < 10 ? "0" + number : number;
  }
});

var quizOptions = document.querySelectorAll(".quiz_box p");

// Lặp qua từng phần tử và thêm sự kiện "click"
quizOptions.forEach(function (option) {
  option.addEventListener("click", function () {
    selectOption(this);
  });
});

function selectOption(selectedOption) {
  // Kiểm tra xem có phần tử đã được chọn trước đó không
  var previousSelectedOption = document.querySelector(".quiz_box p.chose");

  // Nếu có, loại bỏ lớp "chose" khỏi nó
  if (previousSelectedOption) {
    previousSelectedOption.classList.remove("chose");
  }

  // Thêm lớp "chose" vào phần tử đã được chọn
  selectedOption.classList.add("chose");

  // Phát âm thanh
  playCorrectAudio();
}

function playCorrectAudio() {
  var audio = document.getElementById("correctAudio");
  audio.play();
}

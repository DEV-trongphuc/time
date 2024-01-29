let courseTOP = [
  {
    courseName: "Quản trị Marketing 2",
    courseID: "QTMKT01",
    courseAvatar:
      "https://time.edu.vn/wp-content/uploads/2023/07/pexels-photo-5212339-500x400.jpeg",
    coursePrice: "0",
    courseLevel: "Bachelor of Business Administration",
  },
  {
    courseName: "Quản trị Marketing 2",
    courseID: "QTMKT01",
    courseAvatar:
      "https://time.edu.vn/wp-content/uploads/2023/07/pexels-photo-5212339-500x400.jpeg",
    coursePrice: "0",
    courseLevel: "Bachelor of Business Administration",
  },
  {
    courseName: "Quản trị Marketing 2",
    courseID: "QTMKT01",
    courseAvatar:
      "https://time.edu.vn/wp-content/uploads/2023/07/pexels-photo-5212339-500x400.jpeg",
    coursePrice: "0",
    courseLevel: "Bachelor of Business Administration",
  },
  {
    courseName: "Quản trị Marketing 2",
    courseID: "QTMKT01",
    courseAvatar:
      "https://time.edu.vn/wp-content/uploads/2023/07/pexels-photo-5212339-500x400.jpeg",
    coursePrice: "0",
    courseLevel: "Bachelor of Business Administration",
  },
  {
    courseName: "Quản trị Marketing 2",
    courseID: "QTMKT01",
    courseAvatar:
      "https://time.edu.vn/wp-content/uploads/2023/07/pexels-photo-5212339-500x400.jpeg",
    coursePrice: "0",
    courseLevel: "Bachelor of Business Administration",
  },
  {
    courseName: "Quản trị Marketing",
    courseID: "QTMKT01",
    courseAvatar:
      "https://time.edu.vn/wp-content/uploads/2023/07/pexels-photo-5212339-500x400.jpeg",
    coursePrice: "10",
    courseLevel: "Bachelor of Business Administration",
  },
  {
    courseName: "Quản trị Marketing",
    courseID: "QTMKT01",
    courseAvatar:
      "https://time.edu.vn/wp-content/uploads/2023/07/pexels-photo-5212339-500x400.jpeg",
    coursePrice: "10",
    courseLevel: "Bachelor of Business Administration",
  },
  {
    courseName: "Quản trị Marketing",
    courseID: "QTMKT01",
    courseAvatar:
      "https://time.edu.vn/wp-content/uploads/2023/07/pexels-photo-5212339-500x400.jpeg",
    coursePrice: "10",
    courseLevel: "Bachelor of Business Administration",
  },
];
window.addEventListener("load", function () {
  const courseInner = document.querySelector("#courseTOP");
  courseInner &&
    courseTOP.map((item, index) => {
      courseInner.innerHTML += `
    <div class="time_course_item">
    <img
      src=${item.courseAvatar} alt='${item.courseName}'
    />
    <div class="time_course_box">
      <a href="#" class="time_course_name">${item.courseName}</a>
      <p class="time_course_level">
        ${item.courseLevel}
      </p>
      <div class="time_course_price">
        <span><i class="fa-solid fa-award"></i>${
          item.coursePrice == "0" ? "Miễn phí" : item.coursePrice
        }</span>
        <a href="./course_list.html" class="time_course_button"
          >Học ngay <i class="fa-solid fa-chevron-right"></i
        ></a>
      </div>
    </div>
  </div>
    `;
    });
  if (true) {
    document.querySelector(".header_sign").classList.add("active");
  }
});
function handleLogout() {
  document.querySelector(".header_sign.active").classList.remove("active");
}
var headerResult = document.querySelector(".header_result");
var headerResultHeader = document.querySelector(".header_result_header h4");
var searchTimeout;

searchInput.addEventListener("input", function () {
  // Clear the previous timeout
  clearTimeout(searchTimeout);

  // Set a new timeout for 300ms
  searchTimeout = setTimeout(function () {
    // Perform search operation (you can replace this with your own logic)
    let searchTerm = document.getElementById("search_input").value;
    console.log(searchTerm);
    let filteredCourses = courseTOP.filter(function (course) {
      return course.courseName.toLowerCase().includes(searchTerm.toLowerCase());
    });

    if (filteredCourses.length > 0) {
      if (filteredCourses.length > 1) {
        headerResult.innerHTML = `<div class="header_result_header">
      <h4>${filteredCourses.length} Kết quả</h4>
      <a href="#">Xem tất cả <i class="fa-solid fa-angles-right"></i></a>
    </div>`;
      } else {
        headerResult.innerHTML = `<div class="header_result_header">
      <h4>Có phải bạn muốn tìm ?</h4>
    </div>`;
      }
      filteredCourses.length = 6;
      filteredCourses.map((item) => {
        headerResult.innerHTML += `  <a href="#" class="result_info">
        <div>
          <img
            src=${item.courseAvatar}
          />
        </div>
        <div class="result_info_detail">
          <h5>${item.courseName}</h5>
          <p>${item.courseLevel}</p>
        </div>
      </a>`;
        headerResult.classList.add("active");
      });
    } else {
      headerResult.classList.add("active");
      headerResult.innerHTML = `<div class="header_result_header">
    <h4>Không tìm thấy kết quả</h4>
   <p></p>
  </div>`;
    }
    if (searchTerm.length == 0) {
      headerResult.classList.remove("active");
    }
  }, 400);
});

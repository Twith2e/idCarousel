let currentIndex = 0;
const profilePicture = document.getElementById("image");
const userName = document.getElementById("name");
const userCourse = document.getElementById("course");
const userID = document.getElementById("ID");
const idArray = [
  {
    img: "miles.png",
    name: "Miles Gonzalo Morales",
    course: "Full-Stack Web Development",
    ID: "240280",
  },
  {
    img: "gwen.jpg",
    name: "Gwendolyne Maxine Stacy",
    course: "Data Science",
    ID: "290340",
  },
  {
    img: "miguel.jpg",
    name: "Miguel O'Hara",
    course: "Cybersecurity",
    ID: "240300",
  },
  {
    img: "porker.jpg",
    name: "Peter Benjamin Porker",
    course: "UI/UX",
    ID: "250300",
  },
  {
    img: "prabhakar.jpg",
    name: "Pavitr Prabhakar",
    course: "Machine Learning",
    ID: "240281",
  },
  {
    img: "hobie.jpg",
    name: "Hobart 'Hobie' Brown",
    course: "Graphics Design",
    ID: "240450",
  },
  {
    img: "benjamin.jpg",
    name: "Peter Benjamin Parker",
    course: "Computer-Aided-Design",
    ID: "240210",
  },
  {
    img: "peni.jpg",
    name: 'Peni "Penelope" Parker',
    course: "Robotics",
    ID: "240212",
  },
  {
    img: "jessica.webp",
    name: "Jessica Miriam Drew",
    course: "Python",
    ID: "240119",
  },
  {
    img: "noir.jpg",
    name: "Peter Parker(Noir)",
    course: "C",
    ID: "000002",
  },
];

function display() {
  profilePicture.src = idArray[currentIndex].img;
  userName.innerText = idArray[currentIndex].name;
  userCourse.innerText = idArray[currentIndex].course;
  userID.innerText = idArray[currentIndex].ID;
}

display();

function next() {
  currentIndex++;
  if (currentIndex < idArray.length) {
  } else if (currentIndex > idArray.length - 1) {
    currentIndex = 0;
  }
  display();
}

function prev() {
  if (currentIndex === 0) {
    currentIndex = idArray.length - 1;
  } else if (currentIndex > 0) {
    currentIndex--;
  }
  display();
}

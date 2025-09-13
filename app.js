const thumbnails = document.getElementById("thumbnailBar"); // small-size
const display = document.getElementById("mainDisplay"); // full-size container

const images = [
  {
    src: "https://wwd.com/wp-content/uploads/2019/06/rexfeatures_10320649g.jpg",
    alt: "Fashion Show",
  },
  {
    src: "https://hips.hearstapps.com/hmg-prod/images/model-walks-on-the-runway-during-lamour-jacquemus-spring-news-photo-1594977950.jpg",
    alt: "Model",
  },
  {
    src: "https://media.cnn.com/api/v1/images/stellar/prod/230627130222-02-jacquemus-fashion-062623.jpg?c=original",
    alt: "Models lined up",
  },
  {
    src: "https://wwd.com/wp-content/uploads/2023/06/image00014.jpeg?crop=4px%2C978px%2C1634px%2C916px&resize=1000%2C563",
    alt: "Portofino pop-up",
  },
  {
    src: "https://wwd.com/wp-content/uploads/2023/10/JACQUEMUS-SEOUL-EXTERIEUR-45-04.jpg?w=1000&h=563&crop=1",
    alt: "Giant bag",
  },
];

// create the main display image first
const fullImg = document.createElement("img");
fullImg.src = images[0].src;
fullImg.alt = images[0].alt;

fullImg.style.width = "100%"; // image fills container width
fullImg.style.height = "auto"; // keeps aspect ratio
fullImg.style.display = "block"; // removes small gap

display.appendChild(fullImg);


// loop through the images array and create <img> elements
images.forEach(function (imgObj) {
  const img = document.createElement("img");
  img.src = imgObj.src;
  img.alt = imgObj.alt;

  // when thumbnail is clicked - update full image
  img.addEventListener("click", function () {
    fullImg.src = img.src;
    fullImg.alt = img.alt;
  });

  thumbnails.appendChild(img); // add image to container
});

const leftBtn = document.getElementsByClassName("left")[0];
const rightBtn = document.getElementsByClassName("right")[0];
let currentIndex = 0;

function updateImage() {
  fullImg.src = images[currentIndex].src;
}

rightBtn.addEventListener("click", function () {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  updateImage();
});

leftBtn.addEventListener("click", function () {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  updateImage();
});

up



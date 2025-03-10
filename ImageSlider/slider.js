

const images = [
    "https://img.freepik.com/free-photo/person-front-computer-working-html_23-2150040428.jpg?t=st=1741625875~exp=1741629475~hmac=e4d43ceb82423d9886407b6413b05f4cc7f08fc2d91754b5e9909cfbeb52e448&w=1380",
    "https://img.freepik.com/free-photo/person-front-computer-working-html_23-2150040431.jpg?t=st=1741625891~exp=1741629491~hmac=f7bbef8c14aa9eea74ea86cdea36c0b63bb7133cc95bef2cc453575169c399e5&w=1380",
    "https://img.freepik.com/free-photo/person-working-html-computer_23-2150038860.jpg?t=st=1741625989~exp=1741629589~hmac=07128e358aba92839f59acb6c84b4a49c6b5cb24b0983b5b8c5ae285f980274a&w=1380",
    "https://img.freepik.com/free-vector/desktop-smartphone-app-development_23-2148683810.jpg?t=st=1741626030~exp=1741629630~hmac=a90d9e16705f0474c23187c19a684a8ed2d7a75313dcc9bd8180f43eea95110c&w=900",
  
];

let currentIndex = 0; 

function updateImage() {
    document.getElementById("slider").src = images[currentIndex];
}


function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}


updateImage();

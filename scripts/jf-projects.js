let slideIndexProject = 1;
showSlidesProject(slideIndexProject, '');

function plusSlidesProject(n) {
    showSlidesProject(slideIndexProject += n, n > 0 ? 'right' : 'left');
}

function currentSlideProject(n) {
    showSlidesProject(slideIndexProject = n, '');
}

function showSlidesProject(n, side) {
    let i;
    let slides = document.getElementsByClassName("jf-project");
    let dots = document.getElementsByClassName("project-dot");
    if (n > slides.length) { slideIndexProject = 1 }
    if (n < 1) { slideIndexProject = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove('jf-project-left');
        slides[i].classList.remove('jf-project-right');
  
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    if(side == 'right') {
        slides[slideIndexProject - 1].classList.add('jf-project-left');
    } else if(side == 'left') {
        slides[slideIndexProject - 1].classList.add('jf-project-right');
    }
    slides[slideIndexProject - 1].style.display = "block";
    dots[slideIndexProject - 1].className += " active";
}
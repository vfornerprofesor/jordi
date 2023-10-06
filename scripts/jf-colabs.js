let slideIndexColab = 1;
showSlidesColab(slideIndexColab, '');

function plusSlidesColab(n) {
    showSlidesColab(slideIndexColab += n, n > 0 ? 'right' : 'left');
}

function currentSlideColab(n) {
    showSlidesColab(slideIndexColab = n, '');
}

function showSlidesColab(n, side) {
    let i;
    let slides = document.getElementsByClassName("jf-colab");
    let dots = document.getElementsByClassName("colab-dot");
    if (n > slides.length) { slideIndexColab = 1 }
    if (n < 1) { slideIndexColab = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove('jf-colab-left');
        slides[i].classList.remove('jf-colab-right');
  
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    if(side == 'right') {
        slides[slideIndexColab - 1].classList.add('jf-colab-left');
    } else if(side == 'left') {
        slides[slideIndexColab - 1].classList.add('jf-colab-right');
    }
    slides[slideIndexColab - 1].style.display = "block";
    dots[slideIndexColab - 1].className += " active";
}
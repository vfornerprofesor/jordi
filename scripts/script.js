/*
Efect hover on click in IMPORTANT SECTION
*/
document.addEventListener('DOMContentLoaded', function() {
    const importantContent = document.getElementById('jf-s-important');
    
    importantContent.addEventListener('click', function() {
        if (window.matchMedia("(max-width: 767px)").matches) {
            var content = document.getElementById('jf-important-content');
            var img = document.getElementById('jf-important-img');
            if(!content.hasAttribute('clicked')) {
                content.setAttribute('clicked', '');
                content.style.transition = '1s';
                content.style.transform = 'scale(1)';
                img.style.filter = 'blur(2px)';

            } else {
                content.removeAttribute('clicked');
                content.style.transition = '1s';
                content.style.transform = 'scale(0)';
                img.style.filter = 'blur(0px)';
            }
        }
    });
});

/* JOR-D SECTION */
const jordSection1 = document.getElementById('jf-jord-1');
const jordSection2 = document.getElementById('jf-jord-2');

if(window.matchMedia("(min-width: 767px)").matches) {
    jordSection1.classList.add('col');
    jordSection2.classList.add('col');
    jordSection1.classList.add('jf-jord-col');
    jordSection2.classList.add('jf-jord-col');
}

/* LANGUAGE */
function clickLanguage(langEnable, langDisable) {
    itemLangEnable = document.getElementById('jf-language-'+langEnable);
    itemLangDisable = document.getElementById('jf-language-'+langDisable);

    itemLangEnable.classList.add('jf-language-selected');
    itemLangDisable.classList.remove('jf-language-selected');

    //canviar idioma elements
    elements = document.querySelectorAll('[jf-type="translate"]');
    for(i = 0; i < elements.length; i++) {
        elements[i].textContent = texts[langEnable][elements[i].getAttribute('jf-text')];
    }
}

const texts = {
    spanish: {
        jord: 'Jor-D',
        projects: 'Proyectos',
        colabs: 'Colabs',
        contact: 'Contacto',
        news: 'Noticias',
        title: 'Productor musical',
        first_text: 'Comenzó con 12 años a aprender a producir, tocando estilos como big room, progressive, trap, hybrid trap… Hasta que con 21 años se centro al 100% con la producción y encontró su sonido.',
        second_text: 'Ha conseguido por su cuenta llegar a las 100k visitas en Spotify sin discográfica con el tema “Allathat”.'
    },
    english: {
        jord: 'Jor-D',
        projects: 'Projects',
        colabs: 'Colabs',
        contact: 'Contact',
        news: 'News',
        title: 'Musical producer',
        first_text: 'He began learning how to produce at the age of 12, playing styles such as big room, progressive, trap, hybrid trap... Until at the age of 21 he focused 100% on production and found his sound.',
        second_text: 'He has managed on his own to reach 100k views on Spotify without a record label with the song “Allathat”.',
    }
};


// Nav Burger
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelector('.nav-links');

    // Toggle Nav
    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');

        //Animate links
        var i = 0;
        for (const child of navLinks.children) {
            if(child.style.animation) {
                child.style.animation = '';
            } else {
                child.style.animation = `navLinkFade 0.5s ease forwards ${i / 7 + 0.3}s`;
            }
            i++;
        }

        //Burger Animation
        burger.classList.toggle('toggle');
    });
}

// Nav bar scrolled fade
const navFade = () => {
    // Scroll Nav
    const header = document.querySelector('nav');

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        if(scrollPosition > 10) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

//click image to enlarge
const modal = () => {
    const modal = document.querySelector('.modal');
    const previews = document.querySelectorAll('.image-container img');
    const original = document.querySelector('.full-image');
    const imgText = document.querySelector('.caption');

    for (const preview of previews) {
        console.log(preview);
        preview.addEventListener('click', () => {
            modal.classList.add("open");
            original.classList.add("open");

            //Dynamic change
            const originalSrc = preview.getAttribute('data-original');
            original.src = `/images/compressed/${originalSrc}`;
            const altText = preview.alt;
            imgText.textContent = altText;
        });
    }

    modal.addEventListener("click", (e) => {
        if(e.target.classList.contains('modal')) {
            modal.classList.remove("open");
            original.classList.remove("open");
        }
    });
}

const app = ()=>{
    navSlide();
    navFade();
    modal();
}

app();


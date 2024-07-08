document.addEventListener('DOMContentLoaded', function() {
    const aboutSection = document.querySelector('#about');
    const projectsSection = document.querySelector('#projects');

 
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;

        const aboutSectionPosition = aboutSection.offsetTop;
        const projectsSectionPosition = projectsSection.offsetTop;

       
        if (scrollPosition >= aboutSectionPosition - window.innerHeight / 2 && scrollPosition < projectsSectionPosition - window.innerHeight / 2) {
            aboutSection.style.backgroundColor = '#e0f7fa';  
        } else {
            aboutSection.style.backgroundColor = ''; 
        }

        if (scrollPosition >= projectsSectionPosition - window.innerHeight / 2) {
            projectsSection.style.backgroundColor = '#e0f7fa';  
        } else {
            projectsSection.style.backgroundColor = '';  
        }
    });

    
    const projectItems = document.querySelectorAll('.project');

    projectItems.forEach(function(item) {
        item.addEventListener('click', function() {
            alert('You clicked on ' + item.querySelector('h3').innerText);
        });
    });
});

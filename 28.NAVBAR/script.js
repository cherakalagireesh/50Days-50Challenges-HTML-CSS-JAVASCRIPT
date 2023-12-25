const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(function(navLink){
    navLink.addEventListener('click',function(){
        navLinks.forEach(navLink=>{
            navLink.classList = 'nav-link';
        });
        navLink.classList.add('change');

        navLink.previousElementSibling.classList.add('prevElChange');
        navLink.nextElementSibling.classList.add('nextElChange');   
    });

});
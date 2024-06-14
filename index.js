 

    var typed = new Typed(".typed",{
        strings: [ "Frontend Developer",  "Logo Designer", "Web Developer", "Video Grapher"],
        typeSpeed: 60,
        backSpeed:70,
        loopCount:Infinity,
        // cursorChar: '❤️',
        loop:true

    });

 
    
    let mybutton = document.getElementById("back-to-top");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {
        scrollFunction();
    };
    
    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }
    
    // When the user clicks on the button, scroll to the top of the document
    mybutton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    


    document.getElementById('openOverlayButton').addEventListener('click', function() {
        const overlay = document.getElementById('overlay');
        overlay.classList.add('visible');
        overlay.classList.remove('hidden');
    });
    
    document.getElementById('closeOverlayButton').addEventListener('click', function() {
        const overlay = document.getElementById('overlay');
        overlay.classList.remove('visible');
        overlay.classList.add('hidden');
    });
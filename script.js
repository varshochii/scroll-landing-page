

/////// Get Elements from the Dom 
const checkPoints = document.querySelectorAll('.fixed-content');
const images      = document.querySelectorAll('.bg');

/////// Add scroll event to the entire window
window.addEventListener('scroll', () => {

    //// loop through all checkpoints elements 
    for(let i = 0; i < checkPoints.length; i++){
          
         /// if the scroll amount is within the current checkpoint 
         //// I also substract 200px to make the effect appear a little earlier 

          if(pageYOffset > checkPoints[i].offsetTop - 200 && pageYOffset < checkPoints[i].offsetTop + checkPoints[i].offsetHeight - 200){
               
             /// loop through all images 
              images.forEach(img => {
                 /// Remove the active class from each image 
                 img.classList.remove('bg-active');
              });

              //// set active class to current checkpoint image 
              images[i].classList.add('bg-active');
          }
    }

});
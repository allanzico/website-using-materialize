


// document.addEventListener('DOMContentLoaded', function() {
//   var elems = document.querySelectorAll('.sidenav');
//   var instances = M.Sidenav.init(elems, { edge: 'left',
//  });
// });

//Initialize collapsible (uncomment the lines below if you use the dropdown variation)
//   var collapsibleElem = document.querySelector('.collapsible');
//   var collapsibleInstance = M.Collapsible.init(collapsibleElem, options);


// function openNav() {
//     document.getElementById("mySidenav").style.width = "250px";
//     document.getElementById("index-container").style.marginLeft = "250px";
//   }



// function openNav() {

//     document.getElementById("side-menu").style.width = "250px";
//     document.getElementById("index-container").style.marginLeft = "250px";
//     document.getElementById("close-btn").style.visibility = "visible";
//     document.getElementById("open-btn").style.visibility = "hidden";
//     document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
 
  
// }

// function closeNav() {
//   document.getElementById("side-menu").style.width = "0";
//   document.getElementById("index-container").style.marginLeft = "0";
//   document.getElementById("close-btn").style.visibility = "hidden";
//   document.getElementById("open-btn").style.visibility = "visible";
//   document.body.style.backgroundColor = "white";
// }

//Side Nav Switch


//Side Nav
document.querySelector( "#nav-toggle" )
  .addEventListener( "click", function() {


    var open = this.classList.toggle( "active" );  
    var responsive = window.matchMedia("(max-width:768px)");
    if(open){
   
        document.getElementById("side-menu").style.width = "250px";
        document.getElementById("index-container").style.marginLeft = "250px";
        //document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
        document.body.style.overflow = "hidden";
        document.getElementById("overlay").style.display = "block";
      
        
       
    } 

    else {
      
      document.getElementById("side-menu").style.width = "0";
      document.getElementById("index-container").style.marginLeft = "0";
      //document.body.style.backgroundColor = "white";
      document.body.style.overflow = "visible";
      document.getElementById("overlay").style.display = "none";
      
      
    }
    
  });

//Scroll Animation

AOS.init({
  offset: 200, // offset (in px) from the original trigger point
delay: 0, // values from 0 to 3000, with step 50ms
duration: 3000, // values from 0 to 3000, with step 50ms
easing: 'ease', // default easing for AOS animations
once: false, // whether animation should happen only once - while scrolling down
mirror: false, // whether elements should animate out while scrolling past them
});


//Filter JQuery

$(document).ready(function(){

    var $mediaElements = $('.media');

    $('.filter_link').click(function(e){
        e.preventDefault();
        // get the category from the attribute
        var filterVal = $(this).data('filter');
    
        if(filterVal === 'all'){
          $mediaElements.fadeIn(1500);
        }else{
           // hide all then filter the ones to show
           $mediaElements.hide().filter('.' + filterVal).fadeIn(1500);
        }
    });


});


/*
 *    This file contains the javascript code for our gallery
 */

// variables for all of the templates so we only have to compile
// them once on page load and can then use the same compiled 
// templates many times
var animals_template, description_template, slideshow_template;

// a helper function that instantiates a template
// and displays the results in the content div
function showTemplate(template, data){
  var html    = template(data);
  $('#content').html(html);
}

// document read gets called when the whole document
// is loaded, so we put most of the code that needs to run
// in here
$(document).ready(function(){

  //
  // compile all of our templates ready for use
  //
  var source   = $("#animals-template").html();
  animals_template = Handlebars.compile(source);

  source   = $("#description-template").html();
  description_template = Handlebars.compile(source);

  source   = $("#slideshow-template").html();
  slideshow_template = Handlebars.compile(source);

 

    // displays the animals template
  $("#animals-tab").click(function() {
    showTemplate(animals_template, animals_data);

    // make the animals tab the active one
    // first make the currently active tab inactive
    $(".nav-tabs .active").removeClass("active");
    // then make animals tab active
    $("#animals-tab").addClass("active");
    
  });


  

  // displays the description template
  $("#description-tab").click(function(){
    showTemplate(description_template, animals_data); 

    // make the description tab the active one
    // first make the currently active tab inactive
    $(".nav-tabs .active").removeClass("active");
    // then make description tab active
    $("#description-tab").addClass("active"); 

});
 





  // displays the slideshow template
  $("#slideshow-tab").click(function() {
    showTemplate(slideshow_template, animals_data);

    // make the slideshow tab the active one
    // first make the currently active tab inactive
    $(".nav-tabs .active").removeClass("active");
    // then make slideshow tab active
    $("#slideshow-tab").addClass("active");

    
  });

  // start the page by showing the animals tab view
  // we do this by virtually clicking on the 
  // animals tab
  $("#animals-tab").click();
    
   

});
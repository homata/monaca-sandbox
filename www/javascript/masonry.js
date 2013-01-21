// This is a JavaScript file

monaca.viewport({ width: 320 });

/*
$(function(){
  var $container = $('#container');
  $container.imagesLoaded( function(){
    $container.masonry({
          itemSelector : '.item',
          isFitWidth: true,
          isAnimated: true
    });
  });
});
*/

function addTodoPicture() {
  navigator.camera.getPicture(addTodo,
    function() {
      alert("Failed to get camera.");
    }, {
        quality : 50,
        destinationType : Camera.DestinationType.FILE_URI,
        targetWidth : 320,
        targetHeight : 240
   });
}
function addTodo(camera_url) {
  var title = $( "#todo-title" ).val();
/*
  var body = $( "#todo-body" ).val();
*/
  var img_tag = "";
  if (camera_url) {
    img_tag = "<img src='" + camera_url + "'>";
  }
  
  $.mobile.changePage($( "#list-page" ));

/*
  $("#todo-list").append("<li>" + img_tag + "<h3>" + title + "</h3><p>" + body + "</p></li>");
*/ 
  $(".item").append("<p class='image'>" + img_tag + "</p><p class='caption'>" + title + "</p>");

  /*$("#todo-list").listview('refresh');*/
}

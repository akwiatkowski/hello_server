// Put your application scripts here
$(function() {
  $.ajax({
    type: "POST",
    url: "/background/refresh",
    success: (function( data ) {
      console.log("Refreshed");
      $("#services").effect("highlight", {}, 3000);
    })
  });
});
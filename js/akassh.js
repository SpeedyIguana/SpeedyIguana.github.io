// $(document).ready(function () {
//   $(".nav li a").removeClass("active");//this will remove the active class from  
//   // //previously active menu item 
//   // $('#home').addClass('active');
//   // // for demo
//   // $('#demo').addClass('active');
//   // // for sale 
//   // $('#sale').addClass('active');
// });

$(document).ready(function () {
  var url = window.location;
  $('ul.nav a[href="'+ url +'"]').parent().addClass('active');
  $('ul.nav a').filter(function() {
       return this.href == url;
  }).parent().addClass('active');
});
//Form validation using Jquery
$("document").ready(function isEmail(email){
  var regex=/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
});
$("#submitButton").click(function(){
  alert("hello");
  if($("#fullname").val() == false){
    $("#e-name").show();
  }
  if(isEmail($("#email").val()) == false){
    $("#e-email").show();
    }
  if($("#subject").val()== false){
    $("#e-subject").show();
  }
});

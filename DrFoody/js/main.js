$(document).ready(function(){
  $('#call-table').on("click", function(){
      $(this).addClass('active');
      
      alert($(this).val());
  });
});
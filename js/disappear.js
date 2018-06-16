document.addEventListener("DOMContentLoaded", function(event) {

  var mosquitoes = document.querySelectorAll('.mosquito');

  mosquitoes.forEach(function(element) {
    element.addEventListener('click', function() {
      this.classList.add("hidden");
    });
  });

});

// $(document).ready(function() {

//   // var total = $('ul li:visible').length;
//   $('ul li').each(function() {
//     $(this).click(function() {
//       $(this).hide();
//     });
//   });

//   if ( $('ul li:visible').length == 0) {
//     $('#win').removeClass('hidden');
//     window.location = "http://against-malaria.pagedemo.co/";
//   }

// });

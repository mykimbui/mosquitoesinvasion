document.addEventListener("DOMContentLoaded", function(event) {

  var mosquitoes = document.querySelectorAll('.mosquito');
  var win = document.getElementById('win');
  var total = mosquitoes.length;

  mosquitoes.forEach(function(element) {
    if (element.classList.contains('hidden')) {
      win.classList.remove('hidden');
      window.location = "http://against-malaria.pagedemo.co/";
    }
  });

});

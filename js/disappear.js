document.addEventListener("DOMContentLoaded", function(event) {

  var mosquitoes = document.querySelectorAll('.mosquito');

  mosquitoes.forEach(function(element) {
    element.addEventListener('click', function() {
      this.classList.add("hidden");
    });
  });

});

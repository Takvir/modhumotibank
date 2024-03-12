document.addEventListener('DOMContentLoaded', function () {
    var links = document.querySelectorAll('.topnav a');
    links.forEach(function (link) {
      link.addEventListener('click', function () {
        var current = document.querySelector('.topnav a.active');
        if (current) {
          current.classList.remove('active');
        }
        this.classList.add('active');
      });
    });
  });
  
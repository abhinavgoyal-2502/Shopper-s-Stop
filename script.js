document.addEventListener('DOMContentLoaded', function () {
    var header = document.getElementById('header');
    var initialColor = '#fff'; // White
    var scrolledColor = '#aaa'; // Grey
    var scrollThreshold = 50;

    function updateHeaderColor() {
        if (document.body.scrollTop > scrollThreshold || document.documentElement.scrollTop > scrollThreshold) {
            header.style.backgroundColor = scrolledColor;
        } else {
            header.style.backgroundColor = initialColor;
        }
    }

    window.onscroll = function () {
        updateHeaderColor();
    };

    // Initial call to set the header color based on the initial scroll position
    updateHeaderColor();
});

// Get the scroll-to-top button
var scrollToTopBtn = document.querySelector("#scroll-to-top");

// Add event listener to window scroll
window.addEventListener("scroll", function() {
  // If the user has scrolled down from the top of the document
  if (window.pageYOffset > 100) {
    // Show the button
    scrollToTopBtn.classList.add("show");
  } else {
    // Hide the button
    scrollToTopBtn.classList.remove("show");
  }
});

// Add event listener to the scroll-to-top button
scrollToTopBtn.addEventListener("click", function() {
  // Scroll to the top of the document
  window.scrollTo(0, 0);
});
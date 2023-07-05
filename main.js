const textContainer = document.querySelector('.rightColumnContainer');
const textItems = textContainer.querySelectorAll('.rightColumn');
const toggleButtons = document.querySelectorAll('.toggle-button');

let currentActiveText = 0;

textItems[currentActiveText].classList.add('active');

window.setActiveText = function (index) {
  if (textItems.length > 0 && index >= 0 && index < textItems.length) {
    textItems[currentActiveText].classList.remove('active');
    toggleButtons[currentActiveText].style.backgroundColor = "";

    currentActiveText = index;

    textItems[currentActiveText].classList.add('active');
    toggleButtons[currentActiveText].style.backgroundColor =  "white";
  }
}


document.querySelector('.menu-button').addEventListener('click', function() {
  const leftColumn = document.querySelector('.leftColumn');
  leftColumn.style.display = 'block';
  leftColumn.style.zIndex = '1000';  // Ensures left column overlays the right column
});

for (let i = 0; i < toggleButtons.length; i++) {
  toggleButtons[i].addEventListener('click', function() {
    setActiveText(i);

    if (window.innerWidth <= 768) {
      const leftColumn = document.querySelector('.leftColumn');
      leftColumn.style.display = 'none';
      leftColumn.style.zIndex = '0';  // Resets the zIndex back to default
    }
  });
}



$(document).ready(function() {
  $('.clickableImage').click(function() {
    var overlay = $('<div class="overlay"></div>');
    var closeButton = $('<button class="close-button">X</button>');
    closeButton.click(function() {
      overlay.removeClass('active');
      setTimeout(function() {
        overlay.remove();
      }, 500);
    });
    var image = $('<img src="' + $(this).attr('src') + '">');
    image.click(function(e) {
      e.stopPropagation();
    });
    overlay.append(closeButton);
    overlay.append(image);
    $('body').append(overlay);
    setTimeout(function() {
      overlay.addClass('active');
    }, 50);

    overlay.click(function() {
      closeButton.click();
    });
  });
});




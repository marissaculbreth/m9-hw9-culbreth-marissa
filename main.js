var accordionHeaders = document.querySelectorAll('#accordion .accordion-headers');
var accordionDescriptons = document.querySelectorAll('#accordion .accordion-description');

// Handles accordion dropdown action
function expandAccordionDescription() {


  // Handles toggle indicator
  for (i = 0; i < accordionHeaders.length; i++) {
    accordionHeaders[i].childNodes[3].innerHTML = '+';
    accordionDescriptons[i].classList.remove('accordion-open');
  }

  this.nextElementSibling.classList.toggle('accordion-open');
  this.childNodes[3].innerHTML = '-';

}

//Add click event listener for accordion headers
for (i = 0; i < accordionHeaders.length; i++) {
  accordionHeaders[i].addEventListener('click', expandAccordionDescription);
}

var accordionHeaders = document.querySelectorAll('#accordion .accordion-headers');

function expandAccordionDescription() {
  this.childNodes[3].innerHTML = '-';
}

for (i = 0; i < accordionHeaders.length; i++) {
  accordionHeaders[i].addEventListener('click', expandAccordionDescription);
}

// tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

// init Isotope
var $grid = $('.menu-list').isotope({
  // options
});
// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

// remove active button
var filterBtns = $('.filter-button-group button');
filterBtns.on('click', function(){

  // remove active class from all buttons
  resetFilterBtns();

  // remove active class from all buttons
  $(this).addClass('active-filter-btn');
});

function resetFilterBtns() {
  filterBtns.removeClass('active-filter-btn');
}
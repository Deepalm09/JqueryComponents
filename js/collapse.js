$('.expandable-list__item-content').toggle();
$('.expandable-list__item-wrapper').click(function() {
  $(this).toggleClass('expandable-list__item--expanded');
  $(this).find('.expandable-list__item-content').toggle();
});
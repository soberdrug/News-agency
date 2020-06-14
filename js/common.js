$(document).ready(function() {

  const tabsTriggerEL = $('.js-tabs-triggers-item');
        tabsContentEL = $('.js-tabs-content-item');

  tabsTriggerEL.click(function(e) {
    e.preventDefault();

    tabsTriggerEL.removeClass('triggers-item-active');
    tabsContentEL.removeClass('content-item-active');

    $(this).addClass('triggers-item-active');
    $($(this).attr('href')).addClass('content-item-active');
  })
});

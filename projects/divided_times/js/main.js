$('#primary-nav a').click(toggleDropdown);

function toggleDropdown(e) {
  e.preventDefault();
  var $this = $(this);
  var $tab = $(this).parent();
  var id = $this.attr('href');
  var $dropdown = $(id);
  $tab.siblings().removeClass('active');
  $tab.toggleClass('active');
  var opening = $tab.hasClass('active');
  if(opening) {
    if($('#slide-down').hasClass('open')) {
      $('#slide-down .drop.open').fadeOut(150, function(){
        $dropdown.fadeIn(250).addClass('open');      
      }).removeClass('open');
    } else {
      $('#slide-down .drop').hide();
      $dropdown.fadeIn(250).addClass('open');
      $('#slide-down').slideDown(150).addClass('open');			
    }
  } else {
    $('#slide-down').slideUp(150)
    $('#slide-down').removeClass('open');
  }
}
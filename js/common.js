$(document).ready(function () {

  $(".navbar-toggler").on("click", function() {
    $(this).toggleClass("active");
    $("body").toggleClass("menubar-in");
  });

  $(".navbar-toggler-2").on("click", function() {
    $(this).toggleClass("active");
    $("body").toggleClass("menubar");
  });

  Waves.attach('.wave, .btn', ['waves-light']);
  Waves.attach('.wave2', ['waves-dark']);
  Waves.init();

  $('.find').on('click', function() {
    $(this).parent().toggleClass('open');
  });

	function navbar() {
		if ($(this).scrollTop() >= $(window).height()/2) {
			$('.page-navbar').addClass("fixed-top");
		} else {
			$('.page-navbar').removeClass("fixed-top");
		};
	};
	navbar();
	$(window).on("scroll", navbar);

// STEPS

  $('.btn-select').on('click', function() {
    $('.card-step').addClass('step-2-active');
  });
  $("#btnto-step-3").on("click", function(){
    $(".card-step").addClass("step-3-active");
  });
  $("#btnto-step-4").on("click", function(){
    $(".card-step").addClass("step-4-active");
  });

  $("#step-back-2").on("click", function(){
    $(".card-step").removeClass("step-2-active");
  });
  $("#step-back-3").on("click", function(){
    $(".card-step").removeClass("step-3-active");
  });
  $("#step-back-4").on("click", function(){
    $(".card-step").removeClass("step-4-active");
  });

  // STEPS END

  $('#form').validate({
    rules: {
      name: {
        required: true,
        minlength: 5,
      },
      address: {
        required: true,
        minlength: 5
      },
      city: {
        required: true,
        minlength: 2
      },
      zip: {
        required: true,
        minlength: 5
      },
      card: {
        required: true,
        minlength: 16
      },
      exp: {
        required: true,
        minlength: 4
      },
      sec: {
        required: true,
        minlength: 3
      }
    },
    messages: {
      name: {
        required: "Invalid Name",
      },
      address: {
        required: "Invalid Address",
      },
      city: {
        required: "Invalid City",
      },
      zip: {
        required: "Invalid Zip",
      },
      card: {
        required: "Invalid Card Number",
      },
      exp: {
        required: "Invalid Expiration Date",
      },
      sec: {
        required: "Invalid Security Code",
      }
    },
  });

  $('.owl-1').owlCarousel({
    center: true,
    items: 1,
    loop: true,
    margin: 4,
    autoplay: true,
    responsive: {
      600: {
        items: 4
      }
    }
  });

// CALENDAR

$('input[name="birthday1"]').daterangepicker({
  singleDatePicker: true,
  showDropdowns: true,
  minYear: 2000,
  maxYear: parseInt(moment().format('YYYY'),10)
});

 // SELECT2

(function($) {
  var Defaults = $.fn.select2.amd.require('select2/defaults');
  $.extend(Defaults.defaults, {
    dropdownPosition: 'auto'
  });
  var AttachBody = $.fn.select2.amd.require('select2/dropdown/attachBody');
  var _positionDropdown = AttachBody.prototype._positionDropdown;
  AttachBody.prototype._positionDropdown = function() {
    var $window = $(window);
    var isCurrentlyAbove = this.$dropdown.hasClass('select2-dropdown--above');
    var isCurrentlyBelow = this.$dropdown.hasClass('select2-dropdown--below');
    var newDirection = null;
    var offset = this.$container.offset();
    offset.bottom = offset.top + this.$container.outerHeight(false);
    var container = {
        height: this.$container.outerHeight(false)
    };
    container.top = offset.top;
    container.bottom = offset.top + container.height;
    var dropdown = {
      height: this.$dropdown.outerHeight(false)
    };
    var viewport = {
      top: $window.scrollTop(),
      bottom: $window.scrollTop() + $window.height()
    };
    var enoughRoomAbove = viewport.top < (offset.top - dropdown.height);
    var enoughRoomBelow = viewport.bottom > (offset.bottom + dropdown.height);
    var css = {
      left: offset.left,
      top: container.bottom
    };
    // Determine what the parent element is to use for calciulating the offset
    var $offsetParent = this.$dropdownParent;
    // For statically positoned elements, we need to get the element
    // that is determining the offset
    if ($offsetParent.css('position') === 'static') {
      $offsetParent = $offsetParent.offsetParent();
    }
    var parentOffset = $offsetParent.offset();
    css.top -= parentOffset.top
    css.left -= parentOffset.left;
    var dropdownPositionOption = this.options.get('dropdownPosition');
    if (dropdownPositionOption === 'above' || dropdownPositionOption === 'below') {
      newDirection = dropdownPositionOption;
    } else {
      if (!isCurrentlyAbove && !isCurrentlyBelow) {
        newDirection = 'below';
      }
      if (!enoughRoomBelow && enoughRoomAbove && !isCurrentlyAbove) {
        newDirection = 'above';
      } else if (!enoughRoomAbove && enoughRoomBelow && isCurrentlyAbove) {
        newDirection = 'below';
      }
    }
    if (newDirection == 'above' ||
    (isCurrentlyAbove && newDirection !== 'below')) {
        css.top = container.top - parentOffset.top - dropdown.height;
    }
    if (newDirection != null) {
      this.$dropdown
        .removeClass('select2-dropdown--below select2-dropdown--above')
        .addClass('select2-dropdown--' + newDirection);
      this.$container
        .removeClass('select2-container--below select2-container--above')
        .addClass('select2-container--' + newDirection);
    }
    this.$dropdownContainer.css(css);
  };
})(window.jQuery);

    $("select.select2").select2({
      dropdownPosition: 'below',
      allowClear: true
    });

});
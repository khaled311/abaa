$(function() {
  // Toggle open
  $(".sideNav li").on("click", function(e) {
    $(this)
      .find(".drop")
      .slideToggle();
    $(this)
      .siblings()
      .find(".drop")
      .slideUp();
    $(this)
      .find("i")
      .toggleClass("open");
    $(this)
      .siblings()
      .find("i")
      .removeClass("open");
    e.stopPropagation();
  });

  // open Side Nav
  $(".menuTriger").on("click", function() {
    $(this).fadeOut();
    $(".sideNav").toggleClass("open");
    $("body").css("overflow", "hidden");
    setTimeout(function() {
      $(".sideNav").addClass("origin");
    }, 500);
  });

  // Close Side Nav
  $(".navover, .close1").on("click", function() {
    if ($(".sideNav").hasClass("open")) {
      $(".menuTriger").fadeIn();
      $(".sideNav").toggleClass("open");
      // $(".sideNav").toggleClass("origin");
      $("body").css("overflow", "auto");
      setTimeout(function() {
        $(".sideNav").removeClass("origin");
      }, 600);
    }
  });

  // Parallax Effect
  // $(window).on("scroll", function() {
  //   var ypos = window.pageYOffset,
  //     img = document.querySelector("#barallax1 img");
  //   img.style.top = ypos * 1 + "px";
  // });
  $("#barallax1 a").css("top", $("#nav").innerHeight());
  $("body").css("padding-top", $("#nav").innerHeight());

  $(window).on("resize", function(){
    $("#barallax1 a").css("top", $("#nav").innerHeight());
    $("body").css("padding-top", $("#nav").innerHeight());
  })

  // Nav
  $(window).on("scroll", function() {
    if($(window).scrollTop() >= 100){
      $("#nav").addClass("scrolled");
    }
    else{
      $("#nav").removeClass("scrolled");
    }
  });

  // Navbar Effect On Scroll
  var zero = 0;
  $(window).on('scroll', function() {
    if($(window).scrollTop() >= $(".main").offset().top){
      $("#nav").toggleClass('hidee', $(window).scrollTop() > zero);
      zero = $(window).scrollTop();
    }
  });

  // $("#barallax1").css("height", $("#barallax img").height());

  // Product Counting
  $("button.plus").click(function(e) {
    e.preventDefault();
    var newValue = parseFloat(
      $(this)
        .parent()
        .find(".quantity")
        .val()
    );
    $(this)
      .parent()
      .find(".quantity")
      .val(newValue + 1);
  });

  $("button.minus").click(function(e) {
    e.preventDefault();
    var newValue = parseFloat(
      $(this)
        .parent()
        .find(".quantity")
        .val()
    );
    if (newValue <= 1) {
    } else {
      $(this)
        .parent()
        .find(".quantity")
        .val(newValue - 1);
    }
  });

  //footer accordion
  if ($(window).width() < 992) {
    $(".foot-links button").attr("data-toggle", "collapse");
  }

  $(".foot-links button").on("click", function() {
    $(this).toggleClass("trans");
    $(this)
      .parent()
      .parent()
      .siblings()
      .find(".collapse")
      .collapse("hide");
    $(this)
      .parent()
      .parent()
      .siblings()
      .find("button")
      .removeClass("trans");
  });

  // Preloder
  $(window).on("load", function() {
    $("html").css("overflow-y", "auto");
    $(".preloader").fadeOut(400, function() {
      $(this).remove();
    });
  });

  // PopUp
  // Open
  $("#parallax2 .pic").on("click", function() {
    $(".navover").addClass("open");
    $("body, html").css("overflow", "hidden");
  });

  // Close
  $(".navover .popClose, .navover").on("click", function() {
    $(".navover").removeClass("open");
    $("body, html").css("overflow-y", "auto");
  });

  $(".navover .program").on("click", function(e) {
    e.stopPropagation();
  });

  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const links = document.querySelectorAll(".nav-links li");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    links.forEach(link => {
      link.classList.toggle("fade");
    });
  });

  // Animation On Scroll
  AOS.init();
});

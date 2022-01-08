$(document).ready(function () {
  if ($(".accordion-item h2").length > 0) {
    $(".accordion-item h2").append('<i class="fas fa-angle-down"></i>');
  }

  // class module accordian
  if ($(".accordion-item h2")) {
    $(".accordion-item h2").click(function () {
      $(".accordion-item").removeClass("active");
      $(this).parent(".accordion-item").addClass("active");
      $(".accordion-item").children(".accordion-body").slideUp();
      $(this).parent(".accordion-item").children(".accordion-body").slideDown();
      // console.log("Hello World");
    });
  }

  //  videoChange function
  function changeVideo(element) {
    let videoId = $(element).find("span").html().trim();
    if (videoId !== "Coming") {
      const embedLink = "https://www.youtube.com/embed/" + videoId;
      $("#class-video iframe").attr("src", embedLink);
      $(".coming-soon").fadeOut(100);
    } else {
      $(".coming-soon").fadeIn(100);
      $("#class-video iframe").attr("src", "");
    }
  }

  if ($(".accordion-body ul li a").length > 0) {
    $(".accordion-body ul li a").click(function () {
      // exicure the changeVideo() Function
      changeVideo(this);

      $(".accordion-body ul li a").removeClass("play");
      $(this).addClass("play");
      return false;
    });
  }

  //   mobile menu
  if ($("div#mobile-menu-icon").length) {
    $("div#mobile-menu-icon").click(function () {
      //   alert("hello");
      $("#sidebar").toggleClass("mobile-menu");
      $(".backDrop").fadeToggle();
    });
  }

  // remove  backdrop
  //   if ($("main.main-content.backDrop")[0]) {
  $(".backDrop").click(function () {
    $(this).fadeOut();
    $("#sidebar").removeClass("mobile-menu");
  });
  //   }
});

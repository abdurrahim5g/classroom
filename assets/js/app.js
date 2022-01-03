$(document).ready(function () {
  if ($(".accordion-item").length > 0) {
    $(".accordion-item").append('<i class="fas fa-angle-down"></i>');
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
    let videoId = $(element).find("span").html();
    if (videoId !== "Coming") {
      const embedLink = "https://www.youtube.com/embed/" + videoId;
      $("#class-video iframe").attr("src", embedLink);
      $(".coming-soon").fadeOut(100);
    } else {
      $(".coming-soon").fadeIn(100);
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
});

$(document).ready(function () {
  if ($(".accordion-item h2").length > 0) {
    $(".accordion-item h2").append('<i class="fas fa-angle-down"></i>');
  }

  // class module accordian
  if ($(".accordion-item h2")) {
    $(".accordion-item h2").click(function () {
      $(".accordion-item").removeClass("active");
      $(this).parent(".accordion-item").addClass("active");
      $(".accordion-item").children(".accordion-body").slideUp(200);
      $(this)
        .parent(".accordion-item")
        .children(".accordion-body")
        .slideDown(200);
      // console.log("Hello World");
    });
  }

  // Video change handler
  function changeVideo(element) {
    const oldId = $("#class-video iframe").attr("src").slice(30, 41);
    let videoId = $(element).find("span").text().trim();

    if (oldId !== videoId) {
      if (videoId !== "Coming") {
        const embedLink = "https://www.youtube.com/embed/" + videoId;
        $("#class-video iframe").attr("src", embedLink);
        $(".coming-soon").fadeOut(100);
      } else {
        $(".coming-soon").fadeIn(100);
        $("#class-video iframe").attr("src", "");
      }
    } else {
      return false;
    }
  }

  if ($(".accordion-body a").length > 0) {
    $(".accordion-body a").click(function () {
      // exicure the changeVideo() Function
      changeVideo(this);

      $(".accordion-body a").removeClass("play");
      $(this).addClass("play");
      return false;
    });
  }

  //   mobile menu
  if ($("div#mobile-menu-icon").length) {
    $("div#mobile-menu-icon").click(function () {
      $("#sidebar").toggleClass("mobile-menu");
      $(".backDrop").fadeToggle();
    });
  }

  // remove  backdrop
  $(".backDrop").click(function () {
    $(this).fadeOut();
    $("#sidebar").removeClass("mobile-menu");
  });
});

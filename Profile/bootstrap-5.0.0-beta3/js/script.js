// parallax
$(window).on("load", function () {
  $(".kiri").addClass("kiri-go");
  $(".kanan").addClass("kanan-go");
});

$(window).scroll(function () {
  var wScroll = $(this).scrollTop();

  $(".jumbotron img").css({
    transform: "translate(0px, " + wScroll / 4 + "%)",
  });

  $(".jumbotron h1").css({
    transform: "translate(0px, " + wScroll / 2 + "%)",
  });

  //portfolio;
  if (wScroll > $(".portfolio").offset().top - 50) {
    $(".card-effect").each(function (i) {
      setTimeout(function () {
        $(".card-effect").eq(i).addClass("muncul");
      }, 100 * (i + 1));
    });
  }
});

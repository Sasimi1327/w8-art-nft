// masonry Initialize (先準備好masonry)
// var $grid = $(".grid").masonry({
//   // set itemSelector so .grid-sizer is not used in layout
//   itemSelector: ".grid-item",
//   // use element for option
//   columnWidth: ".grid-sizer",
//   percentPosition: true,
// });

let masonryInit = function () {
  console.log("masonryInit trigger...");
  $("#gallery").imagesLoaded(function () {
    $("#gallery").masonry({
      itemSelector: ".portfolio-item",
    });
  });
};

// 圖片都載入之後，才會呈現 masonry (接著才做 圖片加載)
// $grid.imagesLoaded().progress(function () {
//   $grid.masonry("layout");
// });

let pc = window.matchMedia("(min-width: 991px)");
pc.addListener(checkMenuClose);

function checkMenuClose(pMatchMedia) {
  if (pMatchMedia.matches) {
    console.log("大於991");
    $("#navbarSearch").collapse("hide");
  } else {
    console.log("小於991");
    $("#navbarSearch").collapse("hide");
  }
}

$(document).ready(function () {
  $(".burger-btn").on("click", function (e) {
    if ($(this).hasClass("collapsed")) {
      // close
      $(this).find(".fa-solid").removeClass("fa-xmark").addClass("fa-bars");
    } else {
      //open
      $(this).find(".fa-solid").removeClass("fa-bars").addClass("fa-xmark");
    }
  });

  $(".search-btn").on("click", function (e) {
    if ($(this).hasClass("collapsed")) {
      console.log("open->close");
      $(this)
        .closest(".search-form")
        .removeClass(
          "position-absolute position-lg-relative right-0 zindex-0 w-100"
        );
      $(this).closest(".search-form").find("#navbarSearch").removeClass("show");
      $(this)
        .closest(".search-form")
        .find(".return-btn")
        .removeClass("d-block")
        .addClass("d-none");
    } else {
      console.log("close->open");
      //close->open
      if ($(window).width() < 992) {
        console.log("lessThan-992");
        $(this)
          .closest(".search-form")
          .siblings()
          .find(".fa-solid")
          .removeClass("fa-xmark")
          .addClass("fa-bars");

        $(this)
          .closest(".search-form")
          .siblings()
          .addClass("collapsed")
          .siblings()
          .removeClass("show");

        $(this)
          .closest(".search-form")
          .addClass(
            "position-absolute position-lg-relative right-0 zindex-0 w-100"
          );
        $(this).closest(".search-form").find("#navbarSearch").addClass("show");
        $(this)
          .closest(".search-form")
          .find(".return-btn")
          .removeClass("d-none")
          .addClass("d-block");
      }
    }
  });

  $(".return-btn").on("click", function (e) {
    console.log("open->close");
    //open->close
    $(this)
      .closest(".search-form")
      .removeClass(
        "position-absolute position-lg-relative right-0 zindex-0 w-100"
      );
    $(this).closest(".search-form").find("#navbarSearch").removeClass("show");
    $(this).removeClass("d-block").addClass("d-none");
  });

  $(".rank-item").hover(
    function () {
      //hover in
      $(this).find(".card-image").addClass("hvr");
    },
    function () {
      //hover out
      $(this).find(".card-image").removeClass("hvr");
    }
  );
  $(".wallet-grp").on("click", function (e) {
    $(".wallet-grp").not(this).removeClass("active border-primary border-2");
    $(this).toggleClass("active border-primary border-2");
  });

  // nav-tab時，需reload這個部分的masonry
  $(".masonry").on("shown.bs.tab", masonryInit);
});

//輪播
const swiper = new Swiper(".mySwiper", {
  centeredSlides: true,
  loop: true,
  speed: 500,
  slidesPerView: 1.5,
  spaceBetween: 16,
  // autoplay: {
  //   disableOnInteraction: false,
  //   delay: 3000,
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // 640: {
    //   slidesPerView: 2.5,
    // },
    768: {
      slidesPerView: 1.75,
    },
    992: {
      slidesPerView: 3.25,
    },
    // 1280: {
    //   slidesPerView: 3.75,
    // },
  },
});

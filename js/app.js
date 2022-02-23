// burger menu + scroll

const burgerBtn = document.querySelector(".burger__btn"),
  burger = document.querySelector(".burger"),
  burgerOverlay = document.querySelector(".burger__overlay"),
  header = document.querySelector(".header");

// links

$('a[href^="#"]').on('click', function (event) {
  event.preventDefault();
  burger.classList.remove("active");
  header.classList.remove('fixed')
  document.body.classList.remove('fixed')
  var sc = $(this).attr("href"),
    dn = $(sc).offset().top - 120;
  $('html, body').animate({
    scrollTop: dn
  }, 800);
});


burgerBtn.addEventListener("click", () => {
  burger.classList.toggle("active");
});
burgerOverlay.addEventListener("click", () => {
  burger.classList.remove("active");
});

// siders

$('.programm__slider').slick({
  slidesToShow: 2,
  slidesToScroll: 2,
  arrows: false,
  dots: true,
  responsive: [{
    breakpoint: 576,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1

    }
  }]
});
$('.reviews__slider').slick({
  slidesToShow: 2,
  slidesToScroll: 2,
  arrows: false,
  dots: true,
  responsive: [{
    breakpoint: 769,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1

    }
  }]
});


// collecting answers

const finishTestBtn = document.querySelector('.test .main-btn');
const testForms = document.querySelectorAll('.test form');
let counter = 0,
  commentCont = '';
finishTestBtn.addEventListener('click', e => {
  e.preventDefault();
  testForms.forEach(form => {
    if (form.querySelector('input:checked')) {
      counter++
      commentCont += `\n ${counter + '. ' + form.querySelector('input:checked+span').innerText + ';'}`
    }
  });

  // writing in input value

  if (counter === 7) {
    if(!document.querySelector('form input[name="answers"]')){
      const comment = document.createElement('input');
      comment.setAttribute('type', 'hidden');
      comment.setAttribute('name', 'answers');
      comment.value = commentCont
      const formGroup = document.querySelector('#register_form_2 .form_group--hidden');
      if (formGroup) {
        formGroup.appendChild(comment);
      }
    }
    counter = 0;
    $('.main-modal__content').fadeIn(1);
    $('.main-modal .form-wrapper').fadeOut(1);
    $('.main-modal').fadeIn(300)
  } else {
    $('.test-modal').fadeIn(200);
    $('.main-modal__content').fadeIn(200);
    setTimeout(() => {
      $('.test-modal').fadeOut(200);
    }, 3000);
    counter = 0;
  }
});

// open form in main modal

$('.main-modal .main-btn').on('click', () => {
  $('.main-modal__content').fadeOut(200);
  setTimeout(() => {
    $('.main-modal .form-wrapper').fadeIn(400);
  }, 250);
});

$('.steps__item .orange').on('click', () => {
  $('.main-modal__content').fadeOut(1);
  $('.main-modal .form-wrapper').fadeIn(400);
  $('.main-modal').fadeIn(200)
})


// close main modal

$('.main-modal__close').on('click', () => {
  $('.main-modal').fadeOut(300)
});

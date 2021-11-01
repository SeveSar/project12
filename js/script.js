document.addEventListener("DOMContentLoaded",(e) => {
  const isMobile = {
  Android: function() {
      return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function() {
      return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function() {
      return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function() {
      return navigator.userAgent.match(/IEMobile/i);
  },
  any: function() {
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
  }
};

if (isMobile.any()) {
    document.body.classList.add('isMobile')
} else {
    document.body.classList.remove('isMobile')
};
  function animationHeight(bodyContent, button, isVisible = false) {
    if (bodyContent.style.maxHeight) {
      bodyContent.style.maxHeight = null
      button.classList.remove('opened')
    } else {
      bodyContent.style.maxHeight = bodyContent.scrollHeight + "px";
      button.classList.add('opened')
    }
}
function openBodyHeight(bodyContent, button, isVisible = false) {
  if (bodyContent.style.maxHeight) {
    if (isVisible && bodyContent.classList.contains('visible')) {
      bodyContent.style.overflow = 'hidden'
    }
    bodyContent.style.maxHeight = null
    button.classList.remove('opened')
  } else {
    if (isVisible && bodyContent.classList.contains('visible')) {
      bodyContent.style.overflow = 'visible'
    }
    bodyContent.style.maxHeight = '100%';
    button.classList.add('opened')
  }
}


// question-block-animate
const btnsCaption = document.querySelectorAll('.questions__item');
if (btnsCaption.length) {
  btnsCaption.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const bodyContent = e.currentTarget.closest('.questions__item').querySelector('.questions__item-body');
      animationHeight(bodyContent, e.currentTarget)
    })
  })
}
// /end question-block-animate;
  const header = document.querySelector('.header');
let headerH = header.scrollHeight;
let pos = window.scrollY;
console.log(pos)
checkPos(headerH, pos)
function checkPos(headerH, pos) {
  pos = window.scrollY;
  headerH = header.scrollHeight;
  if (pos >= headerH) {
    if (!header.classList.contains('fixed')) {
      header.classList.add('fixed')
    }
  } else {
    if (header.classList.contains('fixed')) {
      header.classList.remove('fixed')
    }
  }
}

window.addEventListener('scroll', checkPos);
window.addEventListener('resize', checkPos);;
  const mobileMenu = document.querySelector('.mobile-menu');
const burgerBtn = document.querySelector('.burger');

// const overlayItem = document.querySelector('.overlay');
if (mobileMenu) {
  function toggleMobileMenu() {
    mobileMenu.classList.toggle('show');
    document.body.classList.toggle('no-scroll');
    burgerBtn.classList.toggle('active')
    header.classList.toggle('change-bg');
  }
  burgerBtn.addEventListener('click', toggleMobileMenu)
  // overlayItem.addEventListener('click',toggleMobileMenu )
}
;
  ;
  // init mask-intel
const input1 = document.querySelector("#phone-1");
const input2 = document.querySelector("#phone-2");
const input3 = document.querySelector("#phone-3");
const input4 = document.querySelector("#phone-4");
function masks_number() {
        /* Phone mask with country code */
        // Р·Р°РїСѓСЃРєР°РµРј IntlTelInput
        function runIntlTelInput(element) {
            return window.intlTelInput(element, {
                separateDialCode: true, // РїРѕРєР°Р·Р°С‚СЊ РєРѕРґ СЃС‚СЂР°РЅС‹
                initialCountry: "auto", // Р°РІС‚РѕРјР°С‚РёС‡РµСЃРєРё РѕРїСЂРµРґРµР»СЏС‚СЊ СЃС‚СЂР°РЅСѓ РїРѕ ip
                geoIpLookup: function (callback) {
                    $.get("https://ipinfo.io", function () {}, "jsonp").always(function (resp) {
                        var countryCode = (resp && resp.country) ? resp.country : "";
                        callback(countryCode);
                    });
                },
                utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@17.0.3/build/js/utils.js",
                autoPlaceholder: "aggressive",
                // Р·Р°РјРµРЅСЏРµРј placeholder РЅР° 999 999... РІРјРµСЃС‚Рѕ СЂР°РЅРґРѕРјРЅС‹С… С†РёС„СЂ, РєРѕС‚РѕСЂС‹Рµ РїРѕРґСЃС‚Р°РІР»СЏРµС‚ IntlTelInput
                customPlaceholder:function(selectedCountryPlaceholder,selectedCountryData){
                    return ''+selectedCountryPlaceholder.replace(/[0-9]/g,'9');
                },
            });
        }
        // РїРѕРґРєР»СЋС‡Р°РµРј IntlTelInput РєРѕ РІСЃРµРј РїРѕР»СЏРј .form__input_tel
        if (input1) {
            let iti1 = runIntlTelInput(input1);
            input1.addEventListener('countrychange', function(e) {
                const inputCountry = e.target.closest('.form').querySelector('.code-country');
                if (inputCountry) {
                    inputCountry.value = iti1.getSelectedCountryData().dialCode
                }
            })
        }
        if (input2) {
            let iti2 = runIntlTelInput(input2);
            input2.addEventListener('countrychange', function(e) {
                const inputCountry = e.target.closest('.form').querySelector('.code-country');
                if (inputCountry) {
                    inputCountry.value = iti2.getSelectedCountryData().dialCode
                }
            })
        }
        if (input3) {
            let iti3 = runIntlTelInput(input3);
            input3.addEventListener('countrychange', function(e) {
                this.style.paddingLeft = 123 + 'px'
                const inputCountry = e.target.closest('.form').querySelector('.code-country');
                if (inputCountry) {
                    inputCountry.value = iti3.getSelectedCountryData().dialCode
                }
            })
        }
        if (input4) {
            let iti4 = runIntlTelInput(input4);
            input4.addEventListener('countrychange', function(e) {
                this.style.paddingLeft = 123 + 'px'
                const inputCountry = e.target.closest('.form').querySelector('.code-country');
                if (inputCountry) {
                    inputCountry.value = iti4.getSelectedCountryData().dialCode;
                }
            })
        }
        // РїРѕСЃР»Рµ Р·Р°РіСЂСѓР·РєРё IntlTelInput РїРѕРґРєР»СЋС‡Р°РµРј РјР°СЃРєСѓ
        // СЃРЅР°С‡Р°Р»Р° IntlTelInput РѕРїСЂРµРґРµР»СЏРµС‚ СЃС‚СЂР°РЅСѓ Рё СЃРѕР·РґР°РµС‚ placeholder (РїРѕСЌС‚РѕРјСѓ РЅСѓР¶РµРЅ settimeout, С‡С‚РѕР±С‹ РѕРЅ СѓСЃРїРµР» СЌС‚Рѕ СЃРґРµР»Р°С‚СЊ)
        // Р·Р°С‚РµРј РјС‹ РІС‹С‚Р°СЃРєРёРІР°РµРј placeholder Рё РїСЂРµРѕР±СЂР°Р·РѕРІС‹РІР°РµРј РµРіРѕ РІ РјР°СЃРєСѓ
        setTimeout(function(){
            var pl = $('.form__input_tel').attr('placeholder') + '';
            var res = pl.replace( /[0-9]/g ,'9');
            if(res != 'undefined'){
                $('.form__input_tel').inputmask(res, {clearMaskOnLostFocus: true, showMaskOnHover: false,});
            }
        }, 2000);

        // РјРµРЅСЏРµРј РјР°СЃРєСѓ РїСЂРё РІС‹Р±РѕСЂРµ РґСЂСѓРіРѕР№ СЃС‚СЂР°РЅС‹
        $('.form__input_tel').on("countrychange", function(e, countryData) {
            var pl = $(this).attr('placeholder') + '';
            var res = pl.replace( /[0-9]/g ,'9');
            if(res != 'undefined'){
                $(this).inputmask(res, {clearMaskOnLostFocus: true, showMaskOnHover: false,});
            }
        });
}

masks_number()

// /end init mask-intel

;
  document.body.addEventListener('click', (e) => {
  const modalBtn = e.target.closest('[data-modal]')
  const modalOverlay = document.querySelector('.modal-overlay')
  if (modalBtn) {
    e.preventDefault()
    const modal = document.querySelector(modalBtn.dataset.modal)
    modalOverlay.classList.add('modal-overlay--show')
    showModal(modal)
  }
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay || e.target.closest('.modal__close')) {
      const modals = document.querySelectorAll('.modal')
      closeModal(modals)
    }
  })
  function showModal(modal) {
    modal.style.display = 'flex'
    setTimeout(() => {
      modal.classList.add('active')
    }, 200)
    document.body.classList.add('no-scroll')
  }
  function closeModal(modals) {
    if (!document.querySelector('.mobile-menu.show')) {
      document.body.classList.remove('no-scroll')
    }
    modals.forEach((modal) => {
      modal.classList.remove('active')
      setTimeout(() => {
        modal.style.display = 'none'
        modalOverlay.classList.remove('modal-overlay--show')
      }, 300)
    })
  }
})
;

});

$(function() {
  const mobileLinks = $('.mobile-menu nav a');
const hedearH = $('.header').innerHeight();
$(mobileLinks).on('click', function(e) {
  e.preventDefault();
  const id = $(this).attr('href');
  const targetOffset = $(id).offset().top;
  const body = $("html, body");
  body.stop().animate({scrollTop: targetOffset - (hedearH + 10 )}, 200)
  $('.mobile-menu').removeClass('show')
  $(body).removeClass('no-scroll');
  $('.burger').removeClass('active')
  $('.header').removeClass('change-bg');
});

  Inputmask.extendDefinitions({
    'A': {
      validator: "[аАбБвВгГдДеЕёЁжЖзЗиИйЙкКлЛмМнНоОпПрРсСтТуУфФхХцЦчЧшШщЩъЪыЫьЬэЭюЮяЯ]",
      casing: "upper"
    }
  });
  const selector = $('.selector')
  $(selector).inputmask("A 999 AA 999")

})
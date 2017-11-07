// sources:
// https://blog.entelect.co.za/view/7526/staggered-pinterest-like-grid-layout

$(document).ready(function () {
   // var container = document.querySelector('#itemContainer');     <=== vanilla

   const container = $('#itemContainer');

   // var msnry = new Masonry(container, {                          <=== vanilla
   //    itemSelector: '.selectorClass'
   // });
   container.masonry({
      itemSelector: '.selectorClass'
   });

   container.imagesLoaded().progress(function () {
      container.masonry('layout');
   });

   $('.selectorClass a').click(function (el) {
      setTimeout(function () {
         $('.progress').removeClass('hidden');
      }, 800);
   })

   const submit = $('button[type="submit"]');

   submit.click(function (el) {
      $(submit).addClass('disabled');

      const form = $('form input');

      for (let input of form) {
         if (input.value.length === 0) {
            el.preventDefault();
            $(input).addClass('invalid');
            Materialize.toast(`${ input.name } is required`, 3000);
         }
      }

      const data = form.map((i, input) => input.value);

      // console.log(`${ window.location.href }/submission`);

      setTimeout(function () {
         $(submit).removeClass('disabled');
      }, 3000);

      const payload = {
         fname: data[0],
         lname: data[1],
         subject: data[2],
         message: data[3]
      }
      el.preventDefault();
      $.ajax({
         type: "POST",
         url: `${ window.location.href }/submission`,
         dataType: "json",
         data: payload,
         success: function (msg) {
            Materialize.toast(msg.success, 1500);

            setTimeout(function () {
               window.location.href = window.location.origin;
            }, 2000)
         },
         error: function (msg) {
            console.log(msg.error);
            Materialize.toast(msg.error, 3000);
         }
      })
   });
});
          function prepareCallbackFormFilledFieldEntriesForSubmission (  ) {

            var customer_name = $("input[name=contact-name-whom-to-call]").val ();

            var customer_number = $("input[name=contact-number-to-call ]").val ();

            $ .ajax ( {

              type: "POST",

              url: "mailer.php",

              data: "customername=" + customer_name + "&phonecontactNumber=" + customer_number,

              dataType: "json",

              encode: true,

              success: function ( data ) {

                

                $("#call-me-back_form").trigger( "reset" ) ;

                

              } ,

              error: function (  ) {

                

              } ,

            } ) ;

          }
         ( function ( $ ) {


             "use strict";

             var input_field_tocheck_isfilled_isvalid = $ ( '.validate_this-input .field-entry_required' ) ;

             var formValidCorrectCheckedAndReadyToProcessSubmit ;


             $ ( '.validate-form_callmeback' ) .on ( 'submit', function ( e ) {

               e .preventDefault (  ) ;

               formValidCorrectCheckedAndReadyToProcessSubmit = !0 ;


               for ( var i = 0 ; i < input_field_tocheck_isfilled_isvalid .length ; i++ ) {

                 if ( validateCallbackFormFieldEntriesFieldByFieldForValidAndCorrect ( input_field_tocheck_isfilled_isvalid [i] ) == !1 ) {

                   showAlertOfIncorrectlyFilledFieldOrNull ( input_field_tocheck_isfilled_isvalid [i] ) ;

                   formValidCorrectCheckedAndReadyToProcessSubmit = !1 ;

                 } else {

                   formValidCorrectCheckedAndReadyToProcessSubmit = !0 ;

                 }
                 // closing brace of if ( validateCallbackFormFieldEntriesFieldByFieldForValidAndCorrect ( input_field_tocheck_isfilled_isvalid [i] ) == !1 ) -else

               }
               // closing brace of for loop ( var i = 0 ; i < input_field_tocheck_isfilled_isvalid .length ; i++ )


               if ( formValidCorrectCheckedAndReadyToProcessSubmit == !0 ) {

                 e .preventDefault (  ) ;

                 prepareCallbackFormFilledFieldEntriesForSubmission (  ) ;

               }
               // closing brace of if ( formValidCorrectCheckedAndReadyToProcessSubmit = !0 )


             } ) ;
             // closing brace of on submit form


             $ ( '.validate-form_callmeback .field-entry_required' ) .each ( function (  ) {

               $ ( this ) .focus ( function (  ) {

                 hideAlertOfIncorrectlyFilledFieldOrNull (  ) ;

               } ) ;

             } ) ;
             // 


             function validateCallbackFormFieldEntriesFieldByFieldForValidAndCorrect ( input_field_tocheck_isfilled_isvalid ) {


               if ( $ ( input_field_tocheck_isfilled_isvalid ) .attr ( 'name' ) == 'contact-name-whom-to-call' ) {

                 if ( $ ( input_field_tocheck_isfilled_isvalid ) .val (  ) != '' ) {

                   if ( $ ( input_field_tocheck_isfilled_isvalid ) .val (  ) .trim (  ) .match ( /^[a-zA-Z ]*$/ ) == null ) {

                     return !1 ;

                   }
                   // closing brace of if ( $ ( input_field_tocheck_isfilled_isvalid ) .val (  ) .trim (  ) .match ( /^[a-zA-Z ]*$/ ) == null )

                 } else {

                   return !1 ;

                 }
                 // closing brace of if ( $ ( input_field_tocheck_isfilled_isvalid ) .val (  ) != '' ) -else

               }
               // closing brace of if ( $ ( input_field_tocheck_isfilled_isvalid ) .attr ( 'name' ) == 'contact-name-whom-to-call' )


               if ( $ ( input_field_tocheck_isfilled_isvalid ) .attr ( 'name' ) == 'contact-number-to-call' ) {

                 if ( $ ( input_field_tocheck_isfilled_isvalid ) .val (  ) != '' ) {

                   if ( $ ( input_field_tocheck_isfilled_isvalid ) .val (  ) .trim (  ) .match ( /^(?:(?:\(?(?:0(?:0|11)\)?[\s-]?\(?|\+)44\)?[\s-]?(?:\(?0\)?[\s-]?)?)|(?:\(?0))(?:(?:\d{5}\)?[\s-]?\d{4,5})|(?:\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3}))|(?:\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4})|(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}))(?:[\s-]?(?:x|ext\.?|\#)\d{3,4})?$/, ) == null ) {

                     return !1 ;

                   }
                   // closing brace of if ( $ ( input_field_tocheck_isfilled_isvalid ) .val (  ) .trim (  ) .match ( /^(?:(?:\(?(?:0(?:0|11)\)?[\s-]?\(?|\+)44\)?[\s-]?(?:\(?0\)?[\s-]?)?)|(?:\(?0))(?:(?:\d{5}\)?[\s-]?\d{4,5})|(?:\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3}))|(?:\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4})|(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}))(?:[\s-]?(?:x|ext\.?|\#)\d{3,4})?$/, ) == null )

                 } else {

                   return !1 ;

                 }
                 // closing brace of if ( $ ( input_field_tocheck_isfilled_isvalid ) .val (  ) != '' ) -else

               }
               // closing brace of if ( $ ( input_field_tocheck_isfilled_isvalid ) .attr ( 'name' ) == 'contact-number-to-call' )


             }
             // closing brace of function validateCallbackFormFieldEntriesFieldByFieldForValidAndCorrect ( input_field_tocheck_isfilled_isvalid )


             function showAlertOfIncorrectlyFilledFieldOrNull ( input_field_tocheck_isfilled_isvalid ) {

               var alertToThisFormFieldOfInvalidOrNull = $ ( input_field_tocheck_isfilled_isvalid ) .parent (  ) ;

               $ ( alertToThisFormFieldOfInvalidOrNull ) .addClass ( 'alert_of-invalid-input-entry' );

             }
             // closing brace of function showAlertOfIncorrectlyFilledFieldOrNull ( input_field_tocheck_isfilled_isvalid )


             function hideAlertOfIncorrectlyFilledFieldOrNull ( input_field_tocheck_isfilled_isvalid ) {

               var alertToThisFormFieldOfInvalidOrNull = $ ( input_field_tocheck_isfilled_isvalid ) .parent (  ) ;

               $ ( alertToThisFormFieldOfInvalidOrNull ) .removeClass ( 'alert_of-invalid-input-entry' );

             }
             // closing brace of function hideAlertOfIncorrectlyFilledFieldOrNull ( input_field_tocheck_isfilled_isvalid )


           } ) ( jQuery ) ;
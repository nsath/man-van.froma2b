  ( function ( $ ) {


    $.carouselOfReviews_config = $.carouselOfReviews_config || {


      confClass_prop_ky_review_carousel : '.carousel_review_view' ,

      confClass_prop_ky_slide_track : '.review_slide_track' ,

      confClass_prop_ky_slide : '.slide_review' ,

      confClass_prop_ky_control_left_arrow_previous : '.left_control' ,

      confClass_prop_ky_control_right_arrow_next : '.right_control' ,

      confClass_prop_ky_dot_control_wrap : '.wrap_dot_control_indicator' ,

      confClass_prop_ky_control_current_goto_slide_indicator : '.dot_control_index_indicator' ,

      confClass_prop_ky_control : '.control' ,

      confClass_prop_ky_control_play : '.control_play_carousel' ,

      confClass_prop_ky_control_pause : '.control_pause_carousel' ,


      confClass_prop_ky_width : null ,

      confClass_prop_ky_height : null ,

      confClass_prop_ky_spaceBetweenSlide : 0 ,

      confClass_prop_ky_numberOfSlidesInViewport : 1 ,


      confClass_prop_ky_swipeEnabled : !0 ,

      confClass_prop_ky_richSwipingEnabled : !0 ,


      confClass_prop_ky_slideDirection : 'horizontal' ,

      confClass_prop_ky_cssTransitionType : 'slide' ,

      confClass_prop_ky_transitionInterval : 500 ,

      confClass_prop_ky_easing : 'swing' ,

      confClass_prop_ky_loopSlides : !0 ,

      confClass_prop_ky_seamlessLooping : !0 ,

      confClass_prop_ky_cssTransform : !0 ,


      confClass_prop_ky_autoPlayCarousel : !0 ,

      confClass_prop_ky_autoPlayInterval : 7050 ,

      confClass_prop_ky_pauseOnClick : !1 ,


      confClass_prop_ky_resizeCarouselOnBrowserResize : !0,

      confClass_prop_ky_showControlArrows : !0,

      confClass_prop_ky_showControlIndexIndicators : !0,

      confClass_prop_ky_hideControlArrows : !0,

      confClass_prop_ky_addTextControlIndexIndicators : !1,

      confClass_prop_ky_initialSlideIndex : 1,

      confClass_prop_ky_slideChangeCallback : null,

      confClass_prop_ky_slideChangeCompleteCallback : null


    } ;
    // closing brace & semicolon for class carouselOfReviews_config


    $ .fn .reviewsCarousel = function ( param ) {


      var objsMergedIntoOneNewOb = $ .extend ( { } , $ .carouselOfReviews_config, param ) ;

      objsMergedIntoOneNewOb .id = $ (this) .attr ( 'id' ) ? $ ( this ).attr ( 'id' ) : '' ;

      this .each ( function (  ) {

        try {

          $ ( this ) .data ( 'reviewsCarousel' ) .makeObjEligibleForGarbageCollection (  ) ;

        } catch ( e ) {  }

        $ ( this ) .unbind (  ) .data ( 'reviewsCarousel' , new createReviewsCarousel ( $ ( this ), objsMergedIntoOneNewOb ) ) ;

      } ) ;


      return this ;


    } ;
    // closing brace & semicolon of function reviewsCarousel


    $ .fn .updateMergedCarouselObj = function ( objsMergedIntoOneNewOb ) {

      try {

        $ ( this ) .data ( 'reviewsCarousel' ) .updateCarouselObjs ( objsMergedIntoOneNewOb ) ;

      } catch (e) {  }

    } ;
    // closing brace & semicolon of function updateMergedCarouselObj


    $ .fn .goToASpecificSlide = function ( slideToGoTo, skipSlide ) {

      try {

        $ ( this ) .data ( 'reviewsCarousel' ) .slideOverToASpecificCarouselSlide ( slideToGoTo, skipSlide );

      } catch (e) {  } 

    } ;
    // closing brace & semicolon of function goToASpecificSlide


    $ .fn .animateSlideToTheNextSlide = function (  ) {

      try {

        $ ( this ) .data ( 'reviewsCarousel' ) .goToNextSlideFromCurrent (  ) ;

      } catch (e) {  }

    } ;
    // closing brace & semicolon of function animateSlideToTheNextSlide


    $ .fn .animateSlideToThePreviousSlide = function (  ) {

      try {

        $ ( this ) .data ( 'reviewsCarousel' ) .goToPreviousSlideFromCurrent (  ) ;

      } catch (e) {  }

    } ;
    // closing brace & semicolon of function slideToThePreviousSlide


    $ .fn .pauseCarouselOfReviews = function (  ) {

      try {

        $ ( this ) .data ( 'reviewsCarousel' ) .pauseAnimationCarouselSliding (  ) ;

      } catch (e) {  }

    } ;
    // closing brace & semicolon of function pauseCarouselOfReviews


    $ .fn .playCarouselOfReviews = function (  ) {

      try {

        $ ( this ) .data ( 'reviewsCarousel' ) .resumePlayAnimationCarouselSliding (  ) ;

      } catch (e) {  }

    } ;
    // closing brace & semicolon of function playCarouselOfReviews


    $ .fn .captureSwipeGestureInCarousel = function ( event, phase, direction, distance, orientation, callback ) {

      try {

        $ ( this ) .data ( 'reviewsCarousel' ) .swipe ( event, phase, direction, distance, orientation, callback ) ;

        } catch ( e ) {  } ;

    } ;
    // closing brace & semicolon of function captureSwipeGestureInCarousel


    $ .fn .resizeCarouselRespectiveToViewPort = function (  ) {

      try {

        $ ( this ) .data ( 'reviewsCarousel' ) .resizeCarouselToViewPort (  ) ;

      } catch (e) {  }

    } ;
    // closing brace & semicolon of function resizeCarouselRespectiveToViewPort


    $ .fn .makeThisCarouselObjEligibleForGarbageCollection = function (  ) {

      try {

        $ ( this ) .data ( 'reviewsCarousel' ) .makeObjEligibleForGarbageCollection (  ) ;

        $ ( this ) .unbind (  ) .data ( 'reviewsCarousel', null ) ;

      } catch ( e ) {  } ;

    } ;
    // closing brace & semicolon of function makeThisCarouselObjEligibleForGarbageCollection


    $ .fn .findCurrentSlideInCarousel  = function (  ) {

      try {

        $ ( this ) .data ( 'reviewsCarousel' ) .getCurrentSlideInCarouselCenter (  ) ;

      } catch ( e ) { 

        return !1 ;

      } ;

    } ;
    // closing brace & semicolon of function findCurrentSlideInCarousel



    function createReviewsCarousel ( root, objsMergedIntoOneNewOb ) {


      var reviews_carouselClass = {

        cls_prop_ky_carousel : root ,

        cls_prop_ky_element_obj_arr : {} ,

        cls_prop_ky_width : 0 ,

        cls_prop_ky_height : 0 ,


        cls_prop_ky_total_count_of_slide : 0 ,

        cls_prop_ky_current_slide : 0 ,

        cls_prop_ky_previous_slide : 1 ,

        cls_prop_ky_next_slide : 1 ,

        cls_prop_ky_current_position : 0 ,

        cls_prop_ky_carousel_paused : !1 ,

        cls_prop_ky_css_transform : !1 ,

        cls_prop_ky_cloned : !1 ,

        cls_prop_ky_timer_1 : null ,

        cls_prop_ky_timer_2 : null ,


        instantiateObjOfReviewCarousel : function (  ) {

          reviews_carouselClass .cls_prop_ky_css_transform = objsMergedIntoOneNewOb .confClass_prop_ky_cssTransform != !0 ? !1 : reviews_carouselClass .testCSSPropertyTranform (  ) ;

          reviews_carouselClass .cls_prop_ky_cloned = objsMergedIntoOneNewOb .confClass_prop_ky_cssTransitionType == 'slide' && objsMergedIntoOneNewOb .confClass_prop_ky_loopSlides == !0 && objsMergedIntoOneNewOb .confClass_prop_ky_seamlessLooping == !0 ? !0 : !1 ;

          reviews_carouselClass .getCarouselElement (  ) ;

          reviews_carouselClass .getCarouselInfo (  ) ;

          reviews_carouselClass .updateCarouselClass (  ) ;

          reviews_carouselClass .getCarouselHeightWidthDimensions (  ) ;

          reviews_carouselClass .updateCarouselHeightWidthDimensions (  ) ;

          reviews_carouselClass .checkSlideTransitionType (  ) ;

          reviews_carouselClass .createCloneOfSlide (  ) ;

          reviews_carouselClass .addDotIndicatorSelectorControl (  ) ;

          reviews_carouselClass .addPreviousNextArrowControl (  ) ;

          reviews_carouselClass .addHiddenPlayPauseCarouselControl (  ) ;

          reviews_carouselClass .resize .add (  ) ;

          reviews_carouselClass .swipe .add (  ) ;

          reviews_carouselClass .hidePreviousNextArrowControl (  ) ;

          if ( typeof $.easing [ objsMergedIntoOneNewOb .confClass_prop_ky_easing ] === 'undefined' ) {

            objsMergedIntoOneNewOb .confClass_prop_ky_easing = 'swing' ;

          }
          // closing brace of if ( typeof $.easing [ objsMergedIntoOneNewOb .confClass_prop_ky_easing ] === 'undefined' )

          reviews_carouselClass .goToClickedSwipedSelectedSlide ( objsMergedIntoOneNewOb .confClass_prop_ky_initialSlideIndex, !0 ) ;

          if ( typeof objsMergedIntoOneNewOb .confClass_prop_ky_slideChangeCallback === 'function' ) {

            objsMergedIntoOneNewOb .confClass_prop_ky_slideChangeCallback ( reviews_carouselClass .cls_prop_ky_current_slide, reviews_carouselClass .cls_prop_ky_total_count_of_slide ) ;

          }
          // closing brace of if ( typeof objsMergedIntoOneNewOb .confClass_prop_ky_slideChangeCallback === 'function' )


          if ( typeof objsMergedIntoOneNewOb .confClass_prop_ky_slideChangeCompleteCallback === 'function' ) {

            objsMergedIntoOneNewOb .confClass_prop_ky_slideChangeCompleteCallback ( reviews_carouselClass .cls_prop_ky_current_slide, reviews_carouselClass .cls_prop_ky_total_count_of_slide ) ;

          }
          // closing brace of if ( typeof objsMergedIntoOneNewOb .confClass_prop_ky_slideChangeCompleteCallback === 'function' )

          reviews_carouselClass .autoplay (  ) ;

          reviews_carouselClass .cls_prop_ky_carousel .addClass ( 'initiate_carousel_slides' ) ;

        } ,
        // closing brace of function instantiateCarouselObjOfReview


        testCSSPropertyTranform : function (  ) {

          var crossBrowserTransformPrefixes = '-webkit-transform -moz-transform -ms-transform -o-transform' .split ( ' ' ) ;

          var divElement = document .createElement ( 'div' ) ;

          for ( var i = 0 ; i < crossBrowserTransformPrefixes .length ; i++ ) {

            if ( divElement && divElement .style [ crossBrowserTransformPrefixes [i] ] !== undefined ) {

              // console. log ( !0 ) ;

              return !0 ;

            }
            // closing brace of if ( divElement && divElement .style [ crossBrowserTransformPrefixes [i] ] !== undefined )

          }
          // closing brace of for loop ( var i = 0 ; i < crossBrowserPrefix .length ; i++ )

          return !1 ;

        } ,
        // closing brace of function testCSSPropertyTranform


        getCarouselElement : function (  ) {

          reviews_carouselClass .cls_prop_ky_element_obj_arr .carousel_view = reviews_carouselClass .cls_prop_ky_carousel .find ( objsMergedIntoOneNewOb .confClass_prop_ky_review_carousel ) ;

          reviews_carouselClass .cls_prop_ky_element_obj_arr .slide_track = reviews_carouselClass .cls_prop_ky_carousel .find ( objsMergedIntoOneNewOb .confClass_prop_ky_slide_track ) ;

          reviews_carouselClass .cls_prop_ky_element_obj_arr .slide = reviews_carouselClass .cls_prop_ky_carousel .find ( objsMergedIntoOneNewOb .confClass_prop_ky_slide ) ;

          reviews_carouselClass .cls_prop_ky_element_obj_arr .arrow_control_previous = reviews_carouselClass .cls_prop_ky_carousel .find ( objsMergedIntoOneNewOb .confClass_prop_ky_control_left_arrow_previous ) ;

          reviews_carouselClass .cls_prop_ky_element_obj_arr .arrow_control_next = reviews_carouselClass .cls_prop_ky_carousel .find ( objsMergedIntoOneNewOb .confClass_prop_ky_control_right_arrow_next ) ;

          reviews_carouselClass .cls_prop_ky_element_obj_arr .slide_index_control_wrap = reviews_carouselClass .cls_prop_ky_carousel .find ( objsMergedIntoOneNewOb .confClass_prop_ky_dot_control_wrap ) ;

          reviews_carouselClass .cls_prop_ky_element_obj_arr .control = reviews_carouselClass .cls_prop_ky_carousel .find ( objsMergedIntoOneNewOb .confClass_prop_ky_control ) ;

          reviews_carouselClass .cls_prop_ky_element_obj_arr .control_play_carousel = reviews_carouselClass .cls_prop_ky_carousel .find ( objsMergedIntoOneNewOb .confClass_prop_ky_control_play ) ;

          reviews_carouselClass .cls_prop_ky_element_obj_arr .control_pause_carousel = reviews_carouselClass .cls_prop_ky_carousel .find ( objsMergedIntoOneNewOb .confClass_prop_ky_control_pause ) ;

        } ,
        // closing brace of function getCarouselElement


        getCarouselInfo : function (  ) {

          reviews_carouselClass .cls_prop_ky_total_count_of_slide = reviews_carouselClass .cls_prop_ky_carousel .find ( objsMergedIntoOneNewOb .confClass_prop_ky_slide ) .length ;

        } ,
        // closing brace of function getCarouselInfo


        updateCarouselClass : function (  ) {

          if ( objsMergedIntoOneNewOb .confClass_prop_ky_cssTransitionType == 'fade' ) {

            reviews_carouselClass .cls_prop_ky_carousel .addClass ( 'fade' ) ;

          } else {

            reviews_carouselClass .cls_prop_ky_carousel .removeClass ( 'fade' ) ;

          }
          // closing brace of if-else ( objsMergedIntoOneNewOb .confClass_prop_ky_cssTransitionType == 'fade' )


          if ( objsMergedIntoOneNewOb .confClass_prop_ky_slideDirection == 'vertical' ) {

            reviews_carouselClass .cls_prop_ky_carousel .addClass ( 'vertical' ) ;

          } else {

            reviews_carouselClass .cls_prop_ky_carousel .removeClass ( 'vertical' ) ;

          }
          // closing brace of if-else ( objsMergedIntoOneNewOb .confClass_prop_ky_slideDirection == 'vertical' )

        } ,
        // closing brace of function updateCarouselClass


        getCarouselHeightWidthDimensions : function (  ) {

          reviews_carouselClass .cls_prop_ky_carousel .removeAttr ( 'style' ) ;

          reviews_carouselClass .cls_prop_ky_element_obj_arr .carousel_view .removeAttr ( 'style' ) ;

          reviews_carouselClass .cls_prop_ky_element_obj_arr .slide_track .removeAttr ( 'style' ) ;

          reviews_carouselClass .cls_prop_ky_element_obj_arr .slide .removeAttr ( 'style' ) ;

          reviews_carouselClass .cls_prop_ky_carousel .find ( objsMergedIntoOneNewOb .confClass_prop_ky_slide ) .show (  ) ;


          if ( objsMergedIntoOneNewOb .width == null ) {

            reviews_carouselClass .cls_prop_ky_width = reviews_carouselClass .cls_prop_ky_element_obj_arr .carousel_view .width (  ) ;

          } else {

            reviews_carouselClass .cls_prop_ky_width = objsMergedIntoOneNewOb .width ;

          }
          // closing brace of if-else ( objsMergedIntoOneNewOb .width == null )


          if ( objsMergedIntoOneNewOb .height == null ) {

            if ( objsMergedIntoOneNewOb .transition == 'fade' ) {

              reviews_carouselClass .cls_prop_ky_height = 0 ;

              reviews_carouselClass .cls_prop_ky_carousel .find ( objsMergedIntoOneNewOb .confClass_prop_ky_slide ) .each ( function (  ) {

                var h2 = $ ( this ) .height (  ) ;

                if ( h2 > reviews_carouselClass .cls_prop_ky_height ) {

                  reviews_carouselClass .cls_prop_ky_height = h2 ;

                }
                // closing brace of if ( h2 > reviews_carouselClass .cls_prop_ky_height )

              } ) ;

            } else {

              reviews_carouselClass .cls_prop_ky_carousel .find ( objsMergedIntoOneNewOb .confClass_prop_ky_slide ) .css ( {

                width: reviews_carouselClass .cls_prop_ky_width / objsMergedIntoOneNewOb .confClass_prop_ky_numberOfSlidesInViewport

              } ) ;


              reviews_carouselClass .cls_prop_ky_element_obj_arr .slide_track .css ( {

                width: ( reviews_carouselClass .cls_prop_ky_width / objsMergedIntoOneNewOb .confClass_prop_ky_numberOfSlidesInViewport ) * ( reviews_carouselClass .cls_prop_ky_total_count_of_slide + 2 * objsMergedIntoOneNewOb .confClass_prop_ky_numberOfSlidesInViewport )

              } ) ;


              if ( objsMergedIntoOneNewOb .direction == 'vertical' ) {

                reviews_carouselClass .cls_prop_ky_height = 0 ;

                reviews_carouselClass .cls_prop_ky_carousel .find ( objsMergedIntoOneNewOb .confClass_prop_ky_slide ) .each ( function (  ) {

                  var h2 = $ ( this ) .height (  ) ;

                  if ( h2 > reviews_carouselClass .cls_prop_ky_height ) {

                    reviews_carouselClass .cls_prop_ky_height = h2 ;

                  }
                  // closing brace of if ( h2 > reviews_carouselClass .cls_prop_ky_height )

                } ) ;

              } else {

                reviews_carouselClass .cls_prop_ky_height = reviews_carouselClass .cls_prop_ky_element_obj_arr .carousel_view .innerHeight (  ) ;

              }
              // closing brace of if-else ( objsMergedIntoOneNewOb .direction == 'vertical' )


              return !1 ;


            }
            // closing brace of if-else ( objsMergedIntoOneNewOb .transition == 'fade' )

            var h3 = reviews_carouselClass .cls_prop_ky_carousel .height (  ) ;

            if ( h3 > reviews_carouselClass .cls_prop_ky_height ) {

              reviews_carouselClass .cls_prop_ky_height = h3 ;

            }
            // closing brace of if ( h3 > reviews_carouselClass .cls_prop_ky_height )

          } else {

            reviews_carouselClass .cls_prop_ky_height = objsMergedIntoOneNewOb .height ;

          }
          // closing brace of if-else ( objsMergedIntoOneNewOb .height == null )


          reviews_carouselClass .cls_prop_ky_element_obj_arr .carousel_view .removeAttr ( 'style' ) ;

          reviews_carouselClass .cls_prop_ky_carousel .find ( objsMergedIntoOneNewOb .confClass_prop_ky_slide ) .removeAttr ( 'style' ) .show (  ) ;


        } ,
        // closing brace of function getCarouselHeightWidthDimensions


        updateCarouselHeightWidthDimensions : function (  ) {

          if ( objsMergedIntoOneNewOb .confClass_prop_ky_width != null ) {

            reviews_carouselClass .cls_prop_ky_carousel .css ( {

              width : reviews_carouselClass .cls_prop_ky_width

            } ) ;

          }
          // closing brace of if ( objsMergedIntoOneNewOb .confClass_prop_ky_width != null )


          if ( objsMergedIntoOneNewOb .confClass_prop_ky_height != null ) {

            reviews_carouselClass .cls_prop_ky_carousel .css ( {

              height : reviews_carouselClass .cls_prop_ky_height

            } ) ;

          }
          // closing brace of if ( objsMergedIntoOneNewOb .confClass_prop_ky_height != null )


          reviews_carouselClass .cls_prop_ky_element_obj_arr .carousel_view .css ( {

            width : reviews_carouselClass .cls_prop_ky_width ,

            height : reviews_carouselClass .cls_prop_ky_height

          } ) ;


          if ( objsMergedIntoOneNewOb .confClass_prop_ky_cssTransitionType == 'fade' ) {

            reviews_carouselClass .cls_prop_ky_element_obj_arr .slide_track .css ( {

              width : reviews_carouselClass .cls_prop_ky_width ,

              height : reviews_carouselClass .cls_prop_ky_height

            } ) ;

          } else {

            if ( objsMergedIntoOneNewOb .confClass_prop_ky_slideDirection == 'vertical' ) {

              var h ;

              if ( reviews_carouselClass .cls_prop_ky_cloned == !0 ) {

                h = reviews_carouselClass .cls_prop_ky_height * ( reviews_carouselClass .cls_prop_ky_total_count_of_slide + ( objsMergedIntoOneNewOb .confClass_prop_ky_numberOfSlidesInViewport * 2 ) ) ;

              } else {

                h = reviews_carouselClass .cls_prop_ky_height * reviews_carouselClass .cls_prop_ky_total_count_of_slide ;

              }
              // closing brace of if-else ( reviews_carouselClass .cls_prop_ky_cloned == !0 )


              reviews_carouselClass .cls_prop_ky_element_obj_arr .slide_track .css ( {

                width : reviews_carouselClass .cls_prop_ky_width ,

                height : h / objsMergedIntoOneNewOb .confClass_prop_ky_numberOfSlidesInViewport

              } ) ;


            } else {

              var w ;

              if ( reviews_carouselClass .cls_prop_ky_cloned == !0 ) {

                w = reviews_carouselClass .cls_prop_ky_width * ( reviews_carouselClass .cls_prop_ky_total_count_of_slide + ( objsMergedIntoOneNewOb .confClass_prop_ky_numberOfSlidesInViewport * 2 ) ) ;

              } else {

                w = reviews_carouselClass .cls_prop_ky_width * reviews_carouselClass .cls_prop_ky_total_count_of_slide ;

              }
              // closing brace of if-else ( reviews_carouselClass .cls_prop_ky_cloned == !0 )


              reviews_carouselClass .cls_prop_ky_element_obj_arr .slide_track .css ( {

                width : w / objsMergedIntoOneNewOb .confClass_prop_ky_numberOfSlidesInViewport ,

                height : reviews_carouselClass .cls_prop_ky_height

              } ) ;


            }
            // closing brace of if-else ( objsMergedIntoOneNewOb .confClass_prop_ky_slideDirection == 'vertical' )

          }
          // closing brace of if-else ( objsMergedIntoOneNewOb .confClass_prop_ky_cssTransitionType == 'fade' )


          if ( objsMergedIntoOneNewOb .confClass_prop_ky_slideDirection == 'vertical' ) {

            reviews_carouselClass .cls_prop_ky_element_obj_arr .slide .css ( {

              width : reviews_carouselClass .cls_prop_ky_width ,

              height : reviews_carouselClass .cls_prop_ky_height / objsMergedIntoOneNewOb .confClass_prop_ky_numberOfSlidesInViewport

            } ) ;

          } else {

            reviews_carouselClass .cls_prop_ky_element_obj_arr .slide .css ( {

              width : reviews_carouselClass .cls_prop_ky_width / objsMergedIntoOneNewOb .confClass_prop_ky_numberOfSlidesInViewport ,

              height : reviews_carouselClass .cls_prop_ky_height

            } ) ;

          }
          // closing brace of if-else ( objsMergedIntoOneNewOb .confClass_prop_ky_slideDirection == 'vertical' )


        } ,
        // closing brace of function updateCarouselHeightWidthDimensions


        checkSlideTransitionType : function (  ) {

          if ( objsMergedIntoOneNewOb .transition == 'fade' ) {

            reviews_carouselClass .cls_prop_ky_carousel .find ( objsMergedIntoOneNewOb .confClass_prop_ky_slide ) .hide (  ) ;

            reviews_carouselClass .cls_prop_ky_carousel .find ( objsMergedIntoOneNewOb .confClass_prop_ky_slide  + ':first' ) .show (  ) ;

          }
          // closing brace of if ( objsMergedIntoOneNewOb .transition == 'fade' )

        } ,
        // closing brace of function checkSlideTransitionType


        createCloneOfSlide : function (  ) {

          if ( reviews_carouselClass .cls_prop_ky_cloned == !0 && reviews_carouselClass .cls_prop_ky_carousel .find ( objsMergedIntoOneNewOb .confClass_prop_ky_slide + '.cloned' ) .length < 1 && reviews_carouselClass .cls_prop_ky_total_count_of_slide > 1 ) {

            var n ;

            var slide ;

            var first_slide ;

            var last_slide ;


            for ( i = 0 ; i < objsMergedIntoOneNewOb .confClass_prop_ky_numberOfSlidesInViewport ; i++ ) {

              n = i + 1 ;

              slide = objsMergedIntoOneNewOb .confClass_prop_ky_slide + ':nth-child( ' + n + ' )' ;

              first_slide = reviews_carouselClass .cls_prop_ky_carousel .find ( slide ) ;

              first_slide .clone (  ) .addClass ( 'cloned' ) .appendTo ( reviews_carouselClass .cls_prop_ky_element_obj_arr .slide_track )

            }
            // closing brace of for loop ( i = 0 ; i < objsMergedIntoOneNewOb .confClass_prop_ky_numberOfSlidesInViewport ; i++ )


            var clone2 = [] ;


            for ( j = 0 ; j < objsMergedIntoOneNewOb .confClass_prop_ky_numberOfSlidesInViewport ; j++ ) {

              n = reviews_carouselClass .cls_prop_ky_carousel .find ( objsMergedIntoOneNewOb .confClass_prop_ky_slide ) .length - objsMergedIntoOneNewOb .confClass_prop_ky_numberOfSlidesInViewport - j ;

              slide = objsMergedIntoOneNewOb .confClass_prop_ky_slide + ':nth-child( ' + n + ' )' ;

              last_slide = reviews_carouselClass .cls_prop_ky_carousel .find ( slide ) ;

              clone2 .push ( last_slide ) ;

            }
            // closing brace of for loop ( j = 0 ; j < objsMergedIntoOneNewOb .confClass_prop_ky_numberOfSlidesInViewport ; j++ )


            for ( k = 0 ; k < clone2 .length ; k++ ) {

              clone2 [ k ] .clone (  ) .addClass ( 'cloned cloned2' ) .prependTo ( reviews_carouselClass .cls_prop_ky_element_obj_arr .slide_track ) ;

            }
            // closing brace of for loop ( k = 0 ; k < clone2 .length ; k++ )


            reviews_carouselClass .cls_prop_ky_element_obj_arr .slide  = reviews_carouselClass .cls_prop_ky_carousel .find ( objsMergedIntoOneNewOb .confClass_prop_ky_slide ) ;

          }
          // closing brace of if ( reviews_carouselClass .cls_prop_ky_cloned == !0 && reviews_carouselClass .cls_prop_ky_carousel .find ( objsMergedIntoOneNewOb .confClass_prop_ky_slide + '.cloned' ) .length < 1 && reviews_carouselClass .cls_prop_ky_total_count_of_slide > 1 )

        } ,
        // closing brace of function createCloneOfSlide


        addDotIndicatorSelectorControl : function (  ) {

          if ( reviews_carouselClass .cls_prop_ky_total_count_of_slide <= 1 ) {

            reviews_carouselClass .cls_prop_ky_element_obj_arr .slide_index_control_wrap .hide (  ) ;

          } else {

            if ( objsMergedIntoOneNewOb .confClass_prop_ky_showControlIndexIndicators ) {

              if ( reviews_carouselClass .cls_prop_ky_element_obj_arr .slide_index_control_wrap .length < 1 ) {

                reviews_carouselClass .cls_prop_ky_carousel .append ( '<div class= "' + objsMergedIntoOneNewOb .confClass_prop_ky_dot_control_wrap .replace ( '.', '' ) + '">  </div>' ) ;

              }
              // closing brace of if ( reviews_carouselClass .cls_prop_ky_element_obj_arr .slide_index_control_wrap .length < 1 )

              reviews_carouselClass .cls_prop_ky_element_obj_arr .slide_index_control_wrap = reviews_carouselClass .cls_prop_ky_carousel .find ( objsMergedIntoOneNewOb .confClass_prop_ky_dot_control_wrap ) ;

            }
            // closing brace of if ( objsMergedIntoOneNewOb .confClass_prop_ky_showControlIndexIndicators )

            reviews_carouselClass .cls_prop_ky_element_obj_arr .slide_index_control_wrap .html ( '' ) ;

            for ( i = 1 ; i < reviews_carouselClass .cls_prop_ky_total_count_of_slide + 1 ; i++ ) {

              var t = i ;

              if ( objsMergedIntoOneNewOb .confClass_prop_ky_addTextControlIndexIndicators ) {

                t = reviews_carouselClass .cls_prop_ky_carousel .find ( objsMergedIntoOneNewOb .confClass_prop_ky_slide + ':nth-child(' + ( reviews_carouselClass .cls_prop_ky_cloned == !0 ? i + 1 : i ) + ' ) ' ) .attr ( 'data-nav' ) ;

              }
              // closing brace of if ( objsMergedIntoOneNewOb .confClass_prop_ky_addTextControlIndexIndicators )

              reviews_carouselClass .cls_prop_ky_element_obj_arr .slide_index_control_wrap .append ( ' <a class= "'+ ( objsMergedIntoOneNewOb .confClass_prop_ky_control_current_goto_slide_indicator .replace ( '.', '' ) ) + ' ' + ( i == 1 ? 'current' : '' ) + '" id="' + ( objsMergedIntoOneNewOb .confClass_prop_ky_control_current_goto_slide_indicator .replace ( '.', '' ) ) + '_' + i + '" > ' + t + ' </a> ' ) ;

            }
            // closing brace of for loop ( i = 1 ; i < reviews_carouselClass .cls_prop_ky_total_count_of_slide + 1 ; i++ )

            reviews_carouselClass .cls_prop_ky_element_obj_arr .slide_index_control_wrap .find ( objsMergedIntoOneNewOb .confClass_prop_ky_control_current_goto_slide_indicator ) .each ( function (  ) {

              $ ( this ) .unbind ( 'click' ) ;

              $ ( this ) .click ( function (  ) {

                var slideIndexNumber = parseInt ( $ ( this ) .attr ( 'id' ) .replace ( ( objsMergedIntoOneNewOb .confClass_prop_ky_control_current_goto_slide_indicator .replace ( '.' ,'' ) ) + '_', '' ) ) ;

                reviews_carouselClass .goToClickedSwipedSelectedSlide ( slideIndexNumber ) ;

                return !1 ;

              } ) ;

            } );

          }
          // closing brace of if-else ( reviews_carouselClass .cls_prop_ky_total_count_of_slide <= 1 )

        } ,
        // closing brace of function addDotIndicatorSelectorControl


        addPreviousNextArrowControl : function (  ) {

          if ( reviews_carouselClass .cls_prop_ky_total_count_of_slide <= 1 ) {

            if ( objsMergedIntoOneNewOb .confClass_prop_ky_hideControlArrows  == !0 ) {

              reviews_carouselClass .cls_prop_ky_element_obj_arr .arrow_control_previous .hide (  ) ;

              reviews_carouselClass .cls_prop_ky_element_obj_arr .arrow_control_next .hide (  ) ;

            }
            // closing brace of if ( objsMergedIntoOneNewOb .objsMergedIntoOneNewOb  == !0 )

          } else {

            if ( objsMergedIntoOneNewOb .confClass_prop_ky_showControlArrows ) {

              if ( reviews_carouselClass .cls_prop_ky_element_obj_arr .arrow_control_previous .length < 1 ) {

                reviews_carouselClass .cls_prop_ky_carousel .append ( '<a class= "' + objsMergedIntoOneNewOb .confClass_prop_ky_control_left_arrow_previous .replace ( '.', '' ) + '"> Prev </a>' ) ;

              }
              // closing brace of if ( reviews_carouselClass .cls_prop_ky_element_obj_arr .arrow_control_previous .length < 1 )

              if ( reviews_carouselClass .cls_prop_ky_element_obj_arr .arrow_control_next .length < 1 ) {

                reviews_carouselClass .cls_prop_ky_carousel .append ( '<a class= "' + objsMergedIntoOneNewOb .confClass_prop_ky_control_right_arrow_next .replace ( '.', '' ) + '"> Next </a>' ) ;

              }
              // closing brace of if ( reviews_carouselClass .cls_prop_ky_element_obj_arr .arrow_control_next .length < 1 )

            }
            // closing brace of if ( objsMergedIntoOneNewOb .confClass_prop_ky_showControlArrows )

            reviews_carouselClass .cls_prop_ky_element_obj_arr .arrow_control_previous .show (  ) ;

            reviews_carouselClass .cls_prop_ky_element_obj_arr .arrow_control_next .show (  ) ;

            if ( reviews_carouselClass .cls_prop_ky_element_obj_arr .arrow_control_previous .length > 0 ) {

              reviews_carouselClass .cls_prop_ky_element_obj_arr .arrow_control_previous .removeClass ( 'inactive' ) ;

              reviews_carouselClass .cls_prop_ky_element_obj_arr .arrow_control_next .removeClass ( 'inactive' ) ;

              reviews_carouselClass .cls_prop_ky_element_obj_arr .arrow_control_next .unbind ( 'click' ) .click ( function (  ) {

                reviews_carouselClass .slideLeftFromCurrentSlide_ToGoToTheNextSlide (  ) ;

                return !1 ;

              } );

              reviews_carouselClass .cls_prop_ky_element_obj_arr .arrow_control_previous .unbind ( 'click' ) .click ( function (  ) {

                reviews_carouselClass .slideRightFromCurrentSlide_ToGoToThePreviousSlide (  ) ;

                return !1 ;

              } );

            }
            // closing brace of if ( reviews_carouselClass .cls_prop_ky_element_obj_arr .arrow_control_previous .length > 0 )

          }
          // closing brace of if-else ( reviews_carouselClass .cls_prop_ky_total_count_of_slide <= 1 )

        } ,
        // closing brace of function addPreviousNextArrowControl


        addHiddenPlayPauseCarouselControl : function (  ) {

          if ( reviews_carouselClass .cls_prop_ky_total_count_of_slide <= 1 ) {

            reviews_carouselClass .cls_prop_ky_element_obj_arr .control .hide (  ) ;

          } else {

            reviews_carouselClass .cls_prop_ky_element_obj_arr .control .show (  ) ;

            reviews_carouselClass .cls_prop_ky_element_obj_arr .control_play_carousel .addClass ( 'hidden' ) ;

            reviews_carouselClass .cls_prop_ky_element_obj_arr .control_pause_carousel .removeClass ( 'hidden' ) ;

            reviews_carouselClass .cls_prop_ky_element_obj_arr .control_pause_carousel .unbind ( 'click' ) .click ( function (  ) {

              reviews_carouselClass .cls_prop_ky_element_obj_arr .control_pause_carousel .addClass ( 'hidden' ) ;

              reviews_carouselClass .cls_prop_ky_element_obj_arr .control_play_carousel .removeClass ( 'hidden' ) ;

              reviews_carouselClass .cls_prop_ky_carousel_paused = !0 ;

              return !1 ;

            } ) ;

            reviews_carouselClass .cls_prop_ky_element_obj_arr .control_play_carousel .unbind ( 'click' ) .click ( function (  ) {

              reviews_carouselClass .cls_prop_ky_element_obj_arr .control_play_carousel .addClass ( 'hidden' ) ;

              reviews_carouselClass .cls_prop_ky_element_obj_arr .control_pause_carousel .removeClass ( 'hidden' ) ;

              reviews_carouselClass .cls_prop_ky_carousel_paused = !1 ;

              return !1 ;

            } ) ;

          }
          // closing brace of if-else ( reviews_carouselClass .cls_prop_ky_total_count_of_slide <= 1 )

        } ,
        // closing brace of function addHiddenPlayPauseCarouselControl


        resize : {

          add : function (  ) {

            if ( objsMergedIntoOneNewOb .confClass_prop_ky_resizeCarouselOnBrowserResize == !0 ) {

              $ ( window ) .on ( 'load', reviews_carouselClass .resize .delay ) ;

              $ ( window ) .resize ( reviews_carouselClass .resize .delay ) ;

            }
            // closing brace of if ( objsMergedIntoOneNewOb .confClass_prop_ky_resizeCarouselOnBrowserResize == !0 )

          } ,

          remove : function (  ) {

            clearTimeout ( reviews_carouselClass .resize .t ) ;

            $ ( window ) .off ( 'resize', reviews_carouselClass .resize .delay ) ;

          } ,

          t : null ,

          delay : function (  ) {

            clearTimeout ( reviews_carouselClass .resize .t ) ;

            reviews_carouselClass .resize .t = setTimeout ( function (  ) {

              reviews_carouselClass .resize .run (  ) ;

            } , 100 ) ;

          } ,

          run : function (  ) {

            reviews_carouselClass .getCarouselHeightWidthDimensions (  ) ;

            reviews_carouselClass .updateCarouselHeightWidthDimensions (  ) ;

            reviews_carouselClass .checkSlideTransitionType (  ) ;

            reviews_carouselClass .createCloneOfSlide (  ) ;


            reviews_carouselClass .goToClickedSwipedSelectedSlide ( reviews_carouselClass .cls_prop_ky_current_slide, !0 ) ;

          } ,

        } ,
        // closing brace of resize


        hidePreviousNextArrowControl : function (  ) {

          if ( objsMergedIntoOneNewOb .confClass_prop_ky_loopSlides == !1 && objsMergedIntoOneNewOb .confClass_prop_ky_initialSlideIndex == 1 ) {

            reviews_carouselClass .cls_prop_ky_element_obj_arr .arrow_control_previous .addClass ( 'inactive' ) ;

          } else if ( objsMergedIntoOneNewOb .confClass_prop_ky_loopSlides == !1 && objsMergedIntoOneNewOb == reviews_carouselClass .cls_prop_ky_total_count_of_slide ) {

            reviews_carouselClass .cls_prop_ky_element_obj_arr .arrow_control_next .addClass ( 'inactive' ) ;

          }

        },
        // closing brace of function hidePreviousNextArrowControl


        autoplay_int : null ,


        autoplay : function (  ) {

          if ( objsMergedIntoOneNewOb .confClass_prop_ky_autoPlayCarousel == !0 ) {

            clearInterval ( reviews_carouselClass .autoplay_int ) ;

            reviews_carouselClass .autoplay_int = setInterval ( function (  ) {

              if ( reviews_carouselClass .cls_prop_ky_carousel_paused == !1 ) {

                reviews_carouselClass .slideLeftFromCurrentSlide_ToGoToTheNextSlide ( !0 ) ;

              }
              // closing brace of if ( reviews_carouselClass .cls_prop_ky_carousel_paused == !1 )

            } , objsMergedIntoOneNewOb .confClass_prop_ky_autoPlayInterval ) ;

          }
          // closing brace of if ( objsMergedIntoOneNewOb .confClass_prop_ky_autoPlayCarousel == !0 )

        } ,
        // closing brace of function autoplay


        getPositionOfTheSlide : function ( slideIndex , slidingDirection ) {

          var l = ( slidingDirection == 'vertical' ? reviews_carouselClass .cls_prop_ky_height : reviews_carouselClass .cls_prop_ky_width ) / objsMergedIntoOneNewOb .confClass_prop_ky_numberOfSlidesInViewport ;

          var total ;

          if ( reviews_carouselClass .cls_prop_ky_cloned && reviews_carouselClass .cls_prop_ky_total_count_of_slide > 1 ) {

            total = parseInt ( slideIndex ) + parseInt ( objsMergedIntoOneNewOb .confClass_prop_ky_numberOfSlidesInViewport ) - 1 ;

          } else {

            total = slideIndex - 1 ;

          }
          // closing brace of if-else ( reviews_carouselClass .cls_prop_ky_cloned && reviews_carouselClass .cls_prop_ky_total_count_of_slide )

          return '-' + ( ( total * l ) + ( parseInt ( objsMergedIntoOneNewOb .confClass_prop_ky_spaceBetweenSlide ) * total ) ) + 'px' ;

        } ,
        // closing brace of function getPositionOfTheSlide ( slideIndex , slidingDirection )


        getPositionOfTheFirstSlide : function ( slidingDirection ) {

          var total ;

          if ( reviews_carouselClass .cls_prop_ky_cloned && reviews_carouselClass .cls_prop_ky_total_count_of_slide > 1 ) {

            var l = slidingDirection == 'vertical' ? reviews_carouselClass .cls_prop_ky_height : reviews_carouselClass .cls_prop_ky_width ;

            total = - ( l + parseInt ( objsMergedIntoOneNewOb .confClass_prop_ky_spaceBetweenSlide ) ) + 'px' ;

          } else {

            total = '0px' ;

          }
          // closing brace of if-else ( reviews_carouselClass .cls_prop_ky_cloned && reviews_carouselClass .cls_prop_ky_total_count_of_slide > 1 )

          return total ;

        } ,
        // closing brace of function getPositionOfTheFirstSlide ( slidingDirection )


        getPositionOfTheLastSlide : function ( slidingDirection ) {

          var l = ( slidingDirection == 'vertical' ? reviews_carouselClass .cls_prop_ky_height : reviews_carouselClass .cls_prop_ky_width ) / objsMergedIntoOneNewOb .confClass_prop_ky_numberOfSlidesInViewport ;

          var total ;

          if ( reviews_carouselClass .cls_prop_ky_cloned && reviews_carouselClass .cls_prop_ky_total_count_of_slide > 1 ) {

            total = reviews_carouselClass .cls_prop_ky_total_count_of_slide + objsMergedIntoOneNewOb .confClass_prop_ky_numberOfSlidesInViewport - 1 ;

          } else {

            total = reviews_carouselClass .cls_prop_ky_total_count_of_slide - 1 ;

          }
          // closing brace of if-else ( reviews_carouselClass .cls_prop_ky_cloned && reviews_carouselClass .cls_prop_ky_total_count_of_slide > 1 )

          var total2 = parseInt ( '-' + ( ( total * l ) + ( parseInt ( objsMergedIntoOneNewOb .confClass_prop_ky_spaceBetweenSlide ) * total ) ) ) ;

          return total2 ;

        } ,
        // closing brace of function getPositionOfTheLastSlide ( slidingDirection )


        getPositionOfTheFirstClonedSlide : function ( slidingDirection ) {

          var l = ( slidingDirection == 'vertical' ? reviews_carouselClass .cls_prop_ky_height : reviews_carouselClass .cls_prop_ky_width ) / objsMergedIntoOneNewOb .confClass_prop_ky_numberOfSlidesInViewport ;

          var total = reviews_carouselClass .cls_prop_ky_total_count_of_slide + objsMergedIntoOneNewOb .confClass_prop_ky_numberOfSlidesInViewport ;

          var total2 = '-' + ( total * l + parseInt ( objsMergedIntoOneNewOb .confClass_prop_ky_spaceBetweenSlide ) * ( total - 1 ) ) + 'px' ;

          return total2 ;

        } ,
        // closing brace of function getPositionOfTheFirstClonedSlide ( slidingDirection )


        getPositionOfTheLastClonedSlide : function ( slidingDirection ) {

          return '0px' ;

        } ,
        // closing brace of function getPositionOfTheLastClonedSlide ( slidingDirection )


        getPreviousSlidePositionGestureSwipedLeft : function ( slidingDirection ) {

          var l = ( slidingDirection == 'vertical' ? reviews_carouselClass .cls_prop_ky_height : reviews_carouselClass .cls_prop_ky_width ) / objsMergedIntoOneNewOb .confClass_prop_ky_numberOfSlidesInViewport ;

          return '-' + ( l * ( objsMergedIntoOneNewOb .confClass_prop_ky_numberOfSlidesInViewport - 1 ) ) + 'px' ;

        },
        // closing brace of function getPreviousSlidePositionGestureSwipedLeft ( slidingDirection )


        slideRightFromCurrentSlide_ToGoToThePreviousSlide : function ( skipHold, swiped ) {

          if ( reviews_carouselClass .cls_prop_ky_total_count_of_slide > 1 && ! reviews_carouselClass .cls_prop_ky_element_obj_arr .arrow_control_previous .hasClass ( 'inactive' ) ) {

            if ( reviews_carouselClass .cls_prop_ky_current_slide > 1 ) {

              reviews_carouselClass .goToClickedSwipedSelectedSlide ( reviews_carouselClass .cls_prop_ky_current_slide - 1, !1, 'right', swiped ) ;

            } else {

              if ( objsMergedIntoOneNewOb .confClass_prop_ky_loopSlides == !0 ) {

                reviews_carouselClass .goToClickedSwipedSelectedSlide ( reviews_carouselClass .cls_prop_ky_total_count_of_slide, !1, 'right', swiped ) ;

              }
              // closing brace of if ( objsMergedIntoOneNewOb .confClass_prop_ky_loopSlides == !0 )

            }
            //  of if-else ( reviews_carouselClass .cls_prop_ky_current_slide > 1 )

            if ( skipHold != !0 && objsMergedIntoOneNewOb .confClass_prop_ky_pauseOnClick == !0 ) {

              reviews_carouselClass .cls_prop_ky_carousel_paused = !0 ;

            }
            // closing brace of if ( skipHold != !0 && objsMergedIntoOneNewOb .confClass_prop_ky_pauseOnClick == !0 )

          }
          // closing brace of if ( reviews_carouselClass .cls_prop_ky_total_count_of_slide > 1 && ! reviews_carouselClass .cls_prop_ky_element_obj_arr .arrow_control_previous .hasClass ( 'inactive' ) )

        } ,
        // closing brace of function slideRightFromCurrentSlide_ToGoToThePreviousSlide ( skipHold, swiped )


        slideLeftFromCurrentSlide_ToGoToTheNextSlide : function ( skipHold, swiped ) {

          if ( reviews_carouselClass .cls_prop_ky_total_count_of_slide > 1 && ! reviews_carouselClass .cls_prop_ky_element_obj_arr .arrow_control_next .hasClass ( 'inactive' ) ) {

            if ( reviews_carouselClass .cls_prop_ky_current_slide < reviews_carouselClass .cls_prop_ky_total_count_of_slide ) {

              reviews_carouselClass .goToClickedSwipedSelectedSlide ( reviews_carouselClass .cls_prop_ky_current_slide + 1, !1, 'left', swiped ) ;

            } else {

              if ( objsMergedIntoOneNewOb .confClass_prop_ky_loopSlides == !0 ) {

                reviews_carouselClass .goToClickedSwipedSelectedSlide ( 1, !1, 'left', swiped ) ;

              }
              // closing brace of if ( objsMergedIntoOneNewOb .confClass_prop_ky_loopSlides == !0 )

            }
            // closing brace of if-else ( reviews_carouselClass .cls_prop_ky_current_slide < reviews_carouselClass .cls_prop_ky_total_count_of_slide )

            if ( skipHold != !0 && objsMergedIntoOneNewOb .confClass_prop_ky_pauseOnClick == !0 ) {

              reviews_carouselClass .cls_prop_ky_carousel_paused = !0 ;

            }
            // closing brace of if ( skipHold != !0 && objsMergedIntoOneNewOb .confClass_prop_ky_pauseOnClick == !0 )

          }
          // closing brace of if ( reviews_carouselClass .cls_prop_ky_total_count_of_slide > 1 && ! reviews_carouselClass  .cls_prop_ky_element_obj_arr .arrow_control_next .hasClass ( 'inactive' ) )              

        } ,
        // closing brace of function slideLeftFromCurrentSlide_ToGoToTheNextSlide ( skipHold, swiped )


        goToClickedSwipedSelectedSlide : function ( slideIndexNumber, skipSlide, slidingDirection, swiped ) {

          var time ;

          if ( skipSlide = !0 ) {

            time = 0;

          } else {

            time = objsMergedIntoOneNewOb .confClass_prop_ky_transitionInterval ;

          }
          // closing brace of if-else ( skipSlide = !0 )


          var previous_slide = reviews_carouselClass .cls_prop_ky_current_slide ;

          var pprevious_slide = parseInt ( slideIndexNumber - 1 ) ;

          reviews_carouselClass .cls_prop_ky_current_slide = parseInt ( slideIndexNumber ) ;

          reviews_carouselClass .cls_prop_ky_previous_slide = parseInt ( slideIndexNumber - 1 ) ;

          reviews_carouselClass .cls_prop_ky_next_slide = parseInt ( slideIndexNumber + 1 ) ;


          if ( reviews_carouselClass .cls_prop_ky_previous_slide < 1 ) {

            if ( objsMergedIntoOneNewOb .confClass_prop_ky_loopSlides == !0 ) {

              reviews_carouselClass .cls_prop_ky_previous_slide = reviews_carouselClass .cls_prop_ky_total_count_of_slide ;

            } else {

              reviews_carouselClass .cls_prop_ky_previous_slide = 0 ;

            }
            // closing brace of if-else ( objsMergedIntoOneNewOb .confClass_prop_ky_loopSlides == !0 )

          }
          // closing brace of if ( reviews_carouselClass .cls_prop_ky_previous_slide < 1 )


          if ( reviews_carouselClass .cls_prop_ky_next_slide > ( reviews_carouselClass .cls_prop_ky_total_count_of_slide - objsMergedIntoOneNewOb .confClass_prop_ky_numberOfSlidesInViewport + 1 ) ) {

            if ( objsMergedIntoOneNewOb .confClass_prop_ky_loopSlides == !0 ) {

              reviews_carouselClass .cls_prop_ky_next_slide = 1 ;

            } else {

              reviews_carouselClass .cls_prop_ky_next_slide = 0 ;

            }
            // closing brace of if-else ( objsMergedIntoOneNewOb .confClass_prop_ky_loopSlides == !0 )

          }
          // closing brace of if ( reviews_carouselClass .cls_prop_ky_next_slide > reviews_carouselClass .cls_prop_ky_total_count_of_slide - objsMergedIntoOneNewOb .confClass_prop_ky_numberOfSlidesInViewport + 1 )


          reviews_carouselClass .cls_prop_ky_element_obj_arr .slide_index_control_wrap .find ( objsMergedIntoOneNewOb .confClass_prop_ky_control_current_goto_slide_indicator ) .removeClass ( 'current' ) ;

          reviews_carouselClass .cls_prop_ky_element_obj_arr .slide_index_control_wrap .find ( '#' + ( objsMergedIntoOneNewOb .confClass_prop_ky_control_current_goto_slide_indicator .replace ( '.', '' ) ) + '_' + slideIndexNumber ) .addClass ( 'current' ) ;


          if ( objsMergedIntoOneNewOb .confClass_prop_ky_cssTransitionType == 'fade' ) {

            reviews_carouselClass .cls_prop_ky_carousel .find ( objsMergedIntoOneNewOb .confClass_prop_ky_slide ) .fadeOut ( time ) ;

            reviews_carouselClass .cls_prop_ky_carousel .find ( objsMergedIntoOneNewOb .confClass_prop_ky_slide + ':nth-child( ' + ( slideIndexNumber ) + ' ) ' ) .fadeIn ( time ) ;

          } else if ( objsMergedIntoOneNewOb .confClass_prop_ky_cssTransitionType == 'slide' ) {

            var dist ;

            var dist_reset ;

            if ( reviews_carouselClass .cls_prop_ky_cloned == !0 && reviews_carouselClass .cls_prop_ky_current_slide == 1 && previous_slide == reviews_carouselClass .cls_prop_ky_total_count_of_slide && slidingDirection != 'left' && ( reviews_carouselClass .cls_prop_ky_total_count_of_slide > 2 || typeof  ( slidingDirection ) !== 'undefined' ) ) {

              dist = reviews_carouselClass .getPositionOfTheFirstClonedSlide ( objsMergedIntoOneNewOb .confClass_prop_ky_slideDirection ) ;

            } else if ( reviews_carouselClass .cls_prop_ky_cloned == !0 && reviews_carouselClass .cls_prop_ky_current_slide == reviews_carouselClass .cls_prop_ky_total_count_of_slide && previous_slide == 1 && slidingDirection != 'right' && swiped != !0 && ( reviews_carouselClass .cls_prop_ky_total_count_of_slide > 2 || typeof ( slidingDirection ) !== 'undefined' ) ) {

              dist = reviews_carouselClass .getPositionOfTheSlide ( slideIndexNumber, objsMergedIntoOneNewOb .confClass_prop_ky_slideDirection ) ;

              dist_reset = reviews_carouselClass .getPositionOfTheFirstClonedSlide ( objsMergedIntoOneNewOb .confClass_prop_ky_slideDirection ) ;

            } else if ( reviews_carouselClass .cls_prop_ky_cloned == !0 && reviews_carouselClass .cls_prop_ky_current_slide == reviews_carouselClass .cls_prop_ky_total_count_of_slide && previous_slide == 1 && slidingDirection != 'right' && swiped == !0 ) {

              dist = reviews_carouselClass .getPreviousSlidePositionGestureSwipedLeft ( objsMergedIntoOneNewOb .confClass_prop_ky_slideDirection ) ;

            } else {

              dist = reviews_carouselClass .getPositionOfTheSlide ( slideIndexNumber, objsMergedIntoOneNewOb .confClass_prop_ky_slideDirection ) ;

              if ( swiped != !0 && slidingDirection == 'right' && previous_slide == 1 ) {

                dist_reset = reviews_carouselClass .getPositionOfTheFirstSlide ( objsMergedIntoOneNewOb .confClass_prop_ky_slideDirection );

              }
              // closing brace of if ( swiped != !0 && slidingDirection == 'right' && previous_slide == 1 )

            }

            if ( objsMergedIntoOneNewOb .confClass_prop_ky_slideDirection == 'vertical' ) {

              if ( typeof dist_reset !== 'undefined' ) {

                if ( reviews_carouselClass .cls_prop_ky_css_transform ) {

                  reviews_carouselClass .cls_prop_ky_element_obj_arr .slide_track .stop ( !0, !0 ) .removeClass ( 'animate' ) .css ( {

                    '-webkit-transform': 'translateY('+dist_reset+')' ,

                    '-moz-transform': 'translateY('+dist_reset+')' ,

                    '-ms-transform': 'translateY('+dist_reset+')' ,

                    '-o-transform': 'translateY('+dist_reset+')' ,

                    transform: 'translateY('+dist_reset+')' ,

                  } ) ;

                } else {

                  reviews_carouselClass .cls_prop_ky_element_obj_arr .slide_track .stop ( !0, !0 ) .css ( {

                    top: dist_reset

                  } ) ;

                }
                // closing brace of if-else ( reviews_carouselClass .cls_prop_ky_css_transform )

              }
              // closing brace of if ( typeof dist_reset !== 'undefined' )

              if ( reviews_carouselClass .cls_prop_ky_css_transform ) {

                setTimeout ( function (  ) {

                  if ( skipSlide == !0 ) {

                    reviews_carouselClass .cls_prop_ky_element_obj_arr .slide_track .stop ( !0, !0 ) .removeClass ( 'animate' ) ;

                  } else {

                    reviews_carouselClass .cls_prop_ky_element_obj_arr .slide_track .stop ( !0, !0 ) .addClass ( 'animate' ) ;

                  }
                  // closing brace of if ( skipSlide == !0 )

                  reviews_carouselClass .cls_prop_ky_element_obj_arr .slide_track .stop ( !0, !0 ) .css ( {

                    '-webkit-transform': 'translateY('+dist+')' ,

                    '-moz-transform': 'translateY('+dist+')' ,

                    '-ms-transform': 'translateY('+dist+')' ,

                    '-o-transform': 'translateY('+dist+')' ,

                    transform: 'translateY('+dist+')' ,

                  } ) ;

                } , 5 ) ;

              } else {

                reviews_carouselClass .cls_prop_ky_element_obj_arr .slide_track .stop ( !0, !0 ) .animate ( { 

                  top : dist

                },

                   time,

                   objsMergedIntoOneNewOb .confClass_prop_ky_easing

                   );

              }
              // closing brace of if-else ( reviews_carouselClass .cls_prop_ky_css_transform )

            } else {

              if ( typeof dist_reset !== 'undefined' ) {

                if ( reviews_carouselClass .cls_prop_ky_css_transform ) {

                  reviews_carouselClass .cls_prop_ky_element_obj_arr .slide_track .stop ( !0, !0 ) .removeClass ( 'animate' ) .css ( {

                    '-webkit-transform': 'translateX('+dist_reset+')' ,

                    '-moz-transform': 'translateX('+dist_reset+')' ,

                    '-ms-transform': 'translateX('+dist_reset+')' ,

                    '-o-transform': 'translateX('+dist_reset+')' ,

                    transform: 'translateX('+dist_reset+')' ,

                  } ) ;

                  timeout = 0 ;

                } else {

                  reviews_carouselClass .cls_prop_ky_element_obj_arr .slide_track .stop ( !0, !0 ) .css ( {

                    left: dist_reset

                  } ) ;

                }
                // closing brace of if-else ( reviews_carouselClass .cls_prop_ky_css_transform )

              }
              // closing brace of if ( typeof dist_reset !== 'undefined' )

              if ( reviews_carouselClass .cls_prop_ky_css_transform ) {

                setTimeout ( function (  ) {

                  if ( skipSlide == !0 ) {

                    reviews_carouselClass .cls_prop_ky_element_obj_arr .slide_track .stop ( !0, !0 ) .removeClass ( 'animate' ) ;

                  } else {

                    reviews_carouselClass .cls_prop_ky_element_obj_arr .slide_track .stop ( !0, !0 ) .addClass ( 'animate' ) ;

                  }
                  // closing brace of if ( skipSlide == !0 )

                  reviews_carouselClass .cls_prop_ky_element_obj_arr .slide_track .stop ( !0, !0 ) .css ( {

                    '-webkit-transform': 'translateX('+dist+')' ,

                    '-moz-transform': 'translateX('+dist+')' ,

                    '-ms-transform': 'translateX('+dist+')' ,

                    '-o-transform': 'translateX('+dist+')' ,

                    transform: 'translateX('+dist+')' ,

                  } ) ;

                } , 5 ) ;

              } else {

                reviews_carouselClass .cls_prop_ky_element_obj_arr .slide_track .stop ( !0, !0 ) .animate ( { 

                  left : dist

                },

                   time,

                   objsMergedIntoOneNewOb .confClass_prop_ky_easing

                   );

              }
              // closing brace of if-else ( reviews_carouselClass .cls_prop_ky_css_transform )

            }
            // closing brace of if-else ( objsMergedIntoOneNewOb .confClass_prop_ky_slideDirection == 'vertical' )

            reviews_carouselClass .cls_prop_ky_current_position = parseInt ( dist ) ;

          }


          reviews_carouselClass .cls_prop_ky_carousel .find ( objsMergedIntoOneNewOb .confClass_prop_ky_slide ) .removeClass ( 'current prev next' ) ;

          reviews_carouselClass .cls_prop_ky_carousel .find ( objsMergedIntoOneNewOb .confClass_prop_ky_slide + ':nth-child('+(reviews_carouselClass .cls_prop_ky_current_slide+(reviews_carouselClass .cls_prop_ky_cloned == !0 ? 1 : 0 ))+')') .addClass ( 'current' ) ;

          reviews_carouselClass .cls_prop_ky_carousel .find ( objsMergedIntoOneNewOb .confClass_prop_ky_slide + ':nth-child('+(reviews_carouselClass .cls_prop_ky_previous_slide+(reviews_carouselClass .cls_prop_ky_cloned == !0 ? 1 : 0 ))+')') .addClass ( 'prev' ) ;

          reviews_carouselClass .cls_prop_ky_carousel .find ( objsMergedIntoOneNewOb .confClass_prop_ky_slide + ':nth-child('+(reviews_carouselClass .cls_prop_ky_next_slide+(reviews_carouselClass .cls_prop_ky_cloned == !0 ? 1 : 0 ))+')') .addClass ( 'next' ) ;

          reviews_carouselClass .cls_prop_ky_timer_1 = setTimeout ( function (  ) {

            reviews_carouselClass .cls_prop_ky_carousel .find ( objsMergedIntoOneNewOb .confClass_prop_ky_slide ) .removeClass ( 'current2 prev2 next2' ) ;

            reviews_carouselClass .cls_prop_ky_carousel .find ( objsMergedIntoOneNewOb .confClass_prop_ky_slide + ':nth-child('+(reviews_carouselClass .cls_prop_ky_current_slide+(reviews_carouselClass .cls_prop_ky_cloned == !0 ? 1 : 0))+ ')') .addClass ( 'current2' ) ;

            reviews_carouselClass .cls_prop_ky_carousel .find ( objsMergedIntoOneNewOb .confClass_prop_ky_slide + ':nth-child('+(reviews_carouselClass .cls_prop_ky_previous_slide+(reviews_carouselClass .cls_prop_ky_cloned == !0 ? 1 : 0))+')') .addClass ( 'prev2' ) ;

            reviews_carouselClass .cls_prop_ky_carousel .find ( objsMergedIntoOneNewOb .confClass_prop_ky_slide + ':nth-child('+(reviews_carouselClass .cls_prop_ky_next_slide+(reviews_carouselClass .cls_prop_ky_cloned == !0 ? 1 : 0))+')') .addClass ( 'next2' ) ;

          } , time ) ;


          reviews_carouselClass .autoplay (  ) ;


          if ( slideIndexNumber == 1 ) {

            if ( objsMergedIntoOneNewOb .confClass_prop_ky_loopSlides == !1 ) {

              reviews_carouselClass  .cls_prop_ky_element_obj_arr .arrow_control_previous .addClass ( 'inactive' ) ;

            }
            // closing brace of if ( objsMergedIntoOneNewOb .confClass_prop_ky_loopSlides == !1 )

          } else {

            reviews_carouselClass  .cls_prop_ky_element_obj_arr .arrow_control_previous .removeClass ( 'inactive' ) ;

          }
          // closing brace of if-else ( slideIndexNumber == 1 )


          if ( slideIndexNumber == ( reviews_carouselClass .cls_prop_ky_total_count_of_slide - objsMergedIntoOneNewOb .confClass_prop_ky_numberOfSlidesInViewport + 1 ) ) {

            if ( objsMergedIntoOneNewOb .confClass_prop_ky_loopSlides == !1 ) {

              reviews_carouselClass .cls_prop_ky_element_obj_arr .arrow_control_next .addClass ( 'inactive' ) ;

            }
            // closing brace of if ( objsMergedIntoOneNewOb .confClass_prop_ky_loopSlides == !1 )

          } else {

            reviews_carouselClass .cls_prop_ky_element_obj_arr .arrow_control_next .removeClass ( 'inactive' ) ;

          }
          // closing brace of if-else ( slideIndexNumber == ( reviews_carouselClass .cls_prop_ky_total_count_of_slide - objsMergedIntoOneNewOb .confClass_prop_ky_numberOfSlidesInViewport + 1 ) )


          if ( typeof ( objsMergedIntoOneNewOb .confClass_prop_ky_slideChangeCallback ) === 'function' ) {

            objsMergedIntoOneNewOb .confClass_prop_ky_slideChangeCallback ( slideIndexNumber, reviews_carouselClass .cls_prop_ky_total_count_of_slide ) ;

          }
          // closing brace of if ( typeof objsMergedIntoOneNewOb .confClass_prop_ky_slideChangeCallback === 'function' )


          reviews_carouselClass .cls_prop_ky_timer_2 = setTimeout ( function (  ) {

            if ( typeof ( objsMergedIntoOneNewOb .confClass_prop_ky_slideChangeCompleteCallback ) === 'function' ) {

              objsMergedIntoOneNewOb .confClass_prop_ky_slideChangeCompleteCallback ( slideIndexNumber, reviews_carouselClass .cls_prop_ky_total_count_of_slide ) ;

            }
            // closing brace of if ( typeof ( objsMergedIntoOneNewOb .confClass_prop_ky_slideChangeCompleteCallback ) === 'function' )

          } , time ) ;


        },
        // closing brace of function goToClickedSwipedSelectedSlide ( slideIndexNumber, skipSlide, slidingDirection, swiped )


        swipe : {

          add : function (  ) {

            if ( objsMergedIntoOneNewOb .confClass_prop_ky_swipeEnabled == !0 ) {

              // console .log ( 'touch / swipe enabled' ) ;

              if ( typeof $ .fn .swipe === 'undefined' ) {

                console .log ( '%c Touch Swipe feature not recognized include the jQuery TouchSwipe plugin for swipe gestures.', 'color:#0053A0' ) ;

              } else {

                if ( objsMergedIntoOneNewOb .confClass_prop_ky_richSwipingEnabled == true && objsMergedIntoOneNewOb .confClass_prop_ky_cssTransitionType == 'slide' ) {

                  if ( objsMergedIntoOneNewOb .confClass_prop_ky_slideDirection == 'vertical' ) {

                    reviews_carouselClass .cls_prop_ky_carousel .swipe ( {

                      swipeStatus: function swipeStatus ( event, phase, direction, distance ) {

                        reviews_carouselClass .swipe .rich ( event, phase, direction, distance, 'vertical' ) ;

                      } ,

                         threshold: 100,

                         allowPageScroll: 'none',

                         excludedElements: ''

                    } ) ;

                  } else {

                    reviews_carouselClass .cls_prop_ky_carousel .swipe ( {

                      swipeStatus: function swipeStatus ( event, phase, direction, distance ) {

                        reviews_carouselClass .swipe .rich ( event, phase, direction, distance, 'horizontal' ) ;

                      } ,

                         threshold: 100,

                         allowPageScroll: 'none',

                         excludedElements: ''

                    } ) ;

                  }
                  // closing brace of if-else ( objsMergedIntoOneNewOb .confClass_prop_ky_slideDirection == 'vertical' )

                } else {

                  if ( objsMergedIntoOneNewOb .confClass_prop_ky_slideDirection == 'vertical' ) {

                    reviews_carouselClass .cls_prop_ky_carousel .swipe ( {

                      swipeUp: function (  ) {

                        reviews_carouselClass .slideLeftFromCurrentSlide_ToGoToTheNextSlide (  ) ;

                      } ,

                      swipeDown: function (  ) {

                        reviews_carouselClass .slideRightFromCurrentSlide_ToGoToThePreviousSlide (  ) ;

                      } ,

                         threshold: 100,

                         allowPageScroll: 'none',

                         excludedElements: ''

                    } ) ;

                  } else {

                    reviews_carouselClass .cls_prop_ky_carousel .swipe ( {

                      swipeLeft: function (  ) {

                        reviews_carouselClass .slideRightFromCurrentSlide_ToGoToThePreviousSlide (  ) ;

                      } ,

                      swipeRight: function (  ) {

                        reviews_carouselClass .slideLeftFromCurrentSlide_ToGoToTheNextSlide (  ) ;

                      } ,

                         threshold: 100,

                         allowPageScroll: 'none',

                         excludedElements: ''

                    } ) ;

                  }
                  // closing brace of if-else ( objsMergedIntoOneNewOb .confClass_prop_ky_slideDirection == 'vertical' )

                }
                // closing brace of if-else ( objsMergedIntoOneNewOb .confClass_prop_ky_richSwipingEnabled == true && objsMergedIntoOneNewOb .confClass_prop_ky_cssTransitionType == 'slide' )

              }
              // closing brace of if-else ( typeof $ .fn .swipe === 'undefined' )

            }
            // closing brace of if ( objsMergedIntoOneNewOb .confClass_prop_ky_swipeEnabled == !0 )

          } ,

          remove : function (  ) {

            if ( objsMergedIntoOneNewOb .confClass_prop_ky_swipeEnabled == !0 ) {

              reviews_carouselClass .cls_prop_ky_carousel .swipe ( 'destroy' ) ;

            }
            // closing brace of if ( objsMergedIntoOneNewOb .confClass_prop_ky_swipeEnabled == !0 )

          } ,

          rich : function ( event, phase, direction, distance, orientation, callback ) {

            if ( objsMergedIntoOneNewOb .confClass_prop_ky_swipeEnabled == !0 ) {

              if ( reviews_carouselClass .cls_prop_ky_total_count_of_slide > 1 ) {

                var dist ;

                if ( phase == 'start' ) {

                  if ( reviews_carouselClass .cls_prop_ky_cloned == !0 && reviews_carouselClass .cls_prop_ky_current_slide == 1 ) {

                    dist = reviews_carouselClass .getPositionOfTheFirstSlide ( objsMergedIntoOneNewOb .confClass_prop_ky_slideDirection ) ;

                  } else if ( reviews_carouselClass .cls_prop_ky_cloned == !0 && reviews_carouselClass .cls_prop_ky_current_slide == reviews_carouselClass .cls_prop_ky_total_count_of_slide ) {

                    dist = reviews_carouselClass .getPositionOfTheLastSlide ( objsMergedIntoOneNewOb .confClass_prop_ky_slideDirection ) ;

                  }

                  if ( orientation == 'vertical' ) {

                    if ( typeof dist !== 'undefined' ) {

                      reviews_carouselClass .cls_prop_ky_current_position = parseInt( dist ) ;

                      if ( reviews_carouselClass .cls_prop_ky_css_transform ) {

                        reviews_carouselClass .cls_prop_ky_element_obj_arr .slide_track .stop (  ) .removeClass ( 'animate' ) .css ( {

                          '-webkit-transform': 'translateY('+dist+')' ,

                          '-moz-transform': 'translateY('+dist+')' ,

                          '-ms-transform': 'translateY('+dist+')' ,

                          '-o-transform': 'translateY('+dist+')' ,

                          transform: 'translateY('+dist+')' ,

                        } ) ;

                      } else {

                        reviews_carouselClass .cls_prop_ky_element_obj_arr .slide_track .stop (  ) .css ( {

                          top : dist

                        } ) ;

                      }
                      // closing brace of if ( reviews_carouselClass .cls_prop_ky_css_transform )

                    }
                    // closing brace of if ( typeof dist !== 'undefined' )

                  } else {

                    if ( typeof dist !== 'undefined' ) {

                      reviews_carouselClass .cls_prop_ky_current_position = parseInt ( dist ) ;

                      if ( reviews_carouselClass .cls_prop_ky_css_transform ) {

                        reviews_carouselClass .cls_prop_ky_element_obj_arr .slide_track .stop (  ) .removeClass ( 'animate' ) .css ( {

                          '-webkit-transform': 'translateX('+dist+')' ,

                          '-moz-transform': 'translateX('+dist+')' ,

                          '-ms-transform': 'translateX('+dist+')' ,

                          '-o-transform': 'translateX('+dist+')' ,

                          transform: 'translateX('+dist+')' ,

                        } ) ;

                      } else {

                        reviews_carouselClass .cls_prop_ky_element_obj_arr .slide_track .stop (  ) .css ( {

                          left : dist

                        } ) ;

                      }
                      // closing brace of if ( reviews_carouselClass .cls_prop_ky_css_transform )

                    }
                    // closing brace of if ( typeof dist !== 'undefined' )

                  }
                  // closing brace of if-else ( orientation == 'vertical' )

                  if ( typeof callback == 'function' ) {

                    callback ( reviews_carouselClass .cls_prop_ky_current_slide, reviews_carouselClass .cls_prop_ky_total_count_of_slide, phase, direction, distance ) ;

                  }
                  // closing brace of if ( typeof callback == 'function' )

                } else if ( phase == 'move' ) {

                  var d ;

                  if ( ( orientation == 'vertical' && direction == 'up') || (orientation != 'vertical' && direction == 'left' ) ) {

                    d = -distance ;

                  } else if ( ( orientation == 'vertical' && direction == 'down' ) || ( orientation != 'vertical' && direction == 'right' ) ) {

                    d = distance ;

                  } else {

                    d = 0 ;

                  }

                  dist = reviews_carouselClass .cls_prop_ky_current_position + d + 'px' ;

                  if ( orientation == 'vertical' ) {

                    if ( reviews_carouselClass .cls_prop_ky_css_transform ) {

                      reviews_carouselClass .cls_prop_ky_element_obj_arr .slide_track .stop (  ) .removeClass ( 'animate' ) .css ( {

                        '-webkit-transform': 'translateY('+dist+')' ,

                        '-moz-transform': 'translateY('+dist+')' ,

                        '-ms-transform': 'translateY('+dist+')' ,

                        '-o-transform': 'translateY('+dist+')' ,

                        transform: 'translateY('+dist+')' ,

                      } ) ;

                    } else {

                      reviews_carouselClass .cls_prop_ky_element_obj_arr .slide_track .stop (  ) .css ( {

                        top : dist

                      } ) ;

                    }
                    //  closing brace of if ( reviews_carouselClass .cls_prop_ky_css_transform )

                  } else {

                    if ( reviews_carouselClass .cls_prop_ky_css_transform ) {

                      reviews_carouselClass .cls_prop_ky_element_obj_arr .slide_track .stop (  ) .removeClass ( 'animate' ) .css ( {

                        '-webkit-transform': 'translateX('+dist+')' ,

                        '-moz-transform': 'translateX('+dist+')' ,

                        '-ms-transform': 'translateX('+dist+')' ,

                        '-o-transform': 'translateX('+dist+')' ,

                        transform: 'translateX('+dist+')' ,

                      } ) ;

                    } else {

                      reviews_carouselClass .cls_prop_ky_element_obj_arr .slide_track .stop (  ) .css ( {

                        left : dist

                      } ) ;

                    }
                    //  closing brace of if ( reviews_carouselClass .cls_prop_ky_css_transform )

                  }
                  // closing brace of if-else ( orientation == 'vertical' )

                  if ( typeof callback == 'function' ) {

                    callback ( reviews_carouselClass .cls_prop_ky_current_slide, reviews_carouselClass .cls_prop_ky_total_count_of_slide, phase, direction, distance, dist ) ;

                  }
                  // closing brace of if ( typeof callback == 'function' )

                } else if ( phase == 'end' ) {

                  var c = !0 ;

                  if ( orientation != 'vertical' && direction == 'down' && ( reviews_carouselClass .cls_prop_ky_current_slide > 1 || reviews_carouselClass .cls_prop_ky_cloned == !0 ) ) {

                    // console .log ( 'down' ) ;

                    reviews_carouselClass .slideRightFromCurrentSlide_ToGoToThePreviousSlide ( !0, !0 ) ;

                  } else if ( orientation != 'vertical' && direction == 'up' && ( reviews_carouselClass .cls_prop_ky_current_slide < reviews_carouselClass .cls_prop_ky_total_count_of_slide - objsMergedIntoOneNewOb .confClass_prop_ky_numberOfSlidesInViewport + 1 || reviews_carouselClass .cls_prop_ky_cloned == !0 ) ) {

                    // console .log ( 'up' ) ;

                    reviews_carouselClass .slideLeftFromCurrentSlide_ToGoToTheNextSlide ( !0, !0 ) ;

                  } else if ( orientation != 'vertical' && direction == 'right' && ( reviews_carouselClass .cls_prop_ky_current_slide > 1 || reviews_carouselClass .cls_prop_ky_cloned == !0 ) ) {

                    // console .log ( 'right' ) ;

                    reviews_carouselClass .slideLeftFromCurrentSlide_ToGoToTheNextSlide ( !0, !0 ) ;

                  } else if ( orientation != 'vertical' && direction == 'left' && ( reviews_carouselClass .cls_prop_ky_current_slide < reviews_carouselClass .cls_prop_ky_total_count_of_slide - objsMergedIntoOneNewOb .confClass_prop_ky_numberOfSlidesInViewport + 1 || reviews_carouselClass .cls_prop_ky_cloned == !0 ) ) {

                    // console .log ( 'left' ) ;

                    reviews_carouselClass .slideRightFromCurrentSlide_ToGoToThePreviousSlide ( !0, !0 ) ;

                  } else {

                    c = !1 ;

                    cancel (  ) ;

                  }

                  if ( c != !1 ) {

                    if ( objsMergedIntoOneNewOb .confClass_prop_ky_pauseOnClick == !0 ) {

                      reviews_carouselClass .cls_prop_ky_carousel_paused = !0 ;

                    }
                    // closing brace of if ( objsMergedIntoOneNewOb .confClass_prop_ky_pauseOnClick == !0 )

                    if ( typeof callback == 'function' ) {

                      callback ( reviews_carouselClass .cls_prop_ky_current_slide, reviews_carouselClass .cls_prop_ky_total_count_of_slide, phase, direction, distance ) ;

                    }
                    // closing brace of if ( typeof callback == 'function' )

                  }
                  // closing brace of if ( c != !1 )

                } else {

                  reviews_carouselClass .swipe .cancel ( event, phase, direction, distance, orientation, callback ) ;

                }

              }
              // closing brace of if ( reviews_carouselClass .cls_prop_ky_total_count_of_slide > 1 )

            }
            // closing brace of if ( objsMergedIntoOneNewOb .confClass_prop_ky_swipeEnabled == !0 )

          } ,

          cancel : function ( event, phase, direction, distance, orientation, callback ) {

            var dist = reviews_carouselClass .cls_prop_ky_current_position + 'px' ;

            if ( orientation == 'vertical' ) {

              if ( reviews_carouselClass .cls_prop_ky_css_transform ) {

                reviews_carouselClass .cls_prop_ky_element_obj_arr .slide_track .stop (  ) .addClass ( 'animate' ) .css ( {

                  '-webkit-transform': 'translateY('+dist+')' ,

                  '-moz-transform': 'translateY('+dist+')' ,

                  '-ms-transform': 'translateY('+dist+')' ,

                  '-o-transform': 'translateY('+dist+')' ,

                  transform: 'translateY('+dist+')' ,

                } ) ;

              } else {

                reviews_carouselClass .cls_prop_ky_element_obj_arr .slide_track .stop (  ) .animate ( {

                  top : dist

                } ,

                   objsMergedIntoOneNewOb .confClass_prop_ky_transitionInterval ,

                   objsMergedIntoOneNewOb .confClass_prop_ky_easing

                   ) ;

              }
              // closing brace of if-else ( reviews_carouselClass .cls_prop_ky_css_transform )

            } else {

              if ( reviews_carouselClass .cls_prop_ky_css_transform ) {

                reviews_carouselClass .cls_prop_ky_element_obj_arr .slide_track .stop (  ) .addClass ( 'animate' ) .css ( {

                  '-webkit-transform': 'translateX('+dist+')' ,

                  '-moz-transform': 'translateX('+dist+')' ,

                  '-ms-transform': 'translateX('+dist+')' ,

                  '-o-transform': 'translateX('+dist+')' ,

                  transform: 'translateX('+dist+')' ,

                } ) ;

              } else {

                reviews_carouselClass .cls_prop_ky_element_obj_arr .slide_track .stop (  ) .animate ( {

                  left : dist

                } ,

                   objsMergedIntoOneNewOb .confClass_prop_ky_transitionInterval ,

                   objsMergedIntoOneNewOb .confClass_prop_ky_easing

                   ) ;

              }
              // closing brace of if-else ( reviews_carouselClass .cls_prop_ky_css_transform )

            }
            // closing brace of if-else ( orientation == 'vertical' )

            if ( typeof callback == 'function' ) {

              callback ( reviews_carouselClass .cls_prop_ky_current_slide , reviews_carouselClass .cls_prop_ky_total_count_of_slide , phase , direction , distance ) ;

            }
            // closing brace of if ( typeof callback == 'function' )

          } ,

        } ,
        // closing brace of swipe


        nullifyAndPrepareThisObjectForGarbageCollection : function (  ) {

          reviews_carouselClass .resize .remove (  ) ;

          reviews_carouselClass .swipe .remove (  ) ;


          clearTimeout ( reviews_carouselClass .cls_prop_ky_timer_1 ) ;

          clearTimeout ( reviews_carouselClass .cls_prop_ky_timer_2 ) ;

          clearTimeout ( reviews_carouselClass .resize .t ) ;

          clearInterval ( reviews_carouselClass .autoplay_int ) ;


          if ( objsMergedIntoOneNewOb .confClass_prop_ky_showControlArrows ) {

            reviews_carouselClass .cls_prop_ky_element_obj_arr .arrow_control_previous .remove (  ) ;

            reviews_carouselClass .cls_prop_ky_element_obj_arr .arrow_control_next .remove (  ) ;

          }
          // closing brace of if ( objsMergedIntoOneNewOb .confClass_prop_ky_showControlArrows )


          if ( objsMergedIntoOneNewOb .confClass_prop_ky_showControlIndexIndicators ) {

            reviews_carouselClass .cls_prop_ky_element_obj_arr .slide_index_control_wrap .remove (  ) ;

          } else {

            reviews_carouselClass .cls_prop_ky_element_obj_arr .slide_index_control_wrap .html ( '' ) ;

          }
          // closing brace of if-else ( objsMergedIntoOneNewOb .confClass_prop_ky_showControlIndexIndicators )


          reviews_carouselClass .cls_prop_ky_carousel .find ( objsMergedIntoOneNewOb .confClass_prop_ky_slide + '.cloned' ) .remove(  ) ;


          reviews_carouselClass .cls_prop_ky_element_obj_arr .carousel_view .stop ( !0, !0 ) .removeAttr ( 'style' ) .unbind (  ) .off (  ) ;

          reviews_carouselClass .cls_prop_ky_element_obj_arr .slide_track .stop ( !0, !0 ) .removeAttr ( 'style' ) .unbind (  ) .off (  ) ;

          reviews_carouselClass .cls_prop_ky_element_obj_arr .slide .stop ( !0, !0 ) .removeAttr ( 'style' ) .unbind (  ) .off (  ) ;

          reviews_carouselClass .cls_prop_ky_element_obj_arr .arrow_control_previous .stop ( !0, !0 ) .removeAttr ( 'style' ) .unbind (  ) .off (  ) ;

          reviews_carouselClass .cls_prop_ky_element_obj_arr .arrow_control_next .stop ( !0, !0 ) .removeAttr ( 'style' ) .unbind (  ) .off (  ) ;

          reviews_carouselClass .cls_prop_ky_element_obj_arr .slide_index_control_wrap .stop ( !0, !0 ) .removeAttr ( 'style' ) .unbind (  ) .off (  ) ;

          reviews_carouselClass .cls_prop_ky_element_obj_arr .control .stop ( !0, !0 ) .removeAttr ( 'style' ) .unbind (  ) .off (  ) ;

          reviews_carouselClass .cls_prop_ky_element_obj_arr .control_play_carousel .stop ( !0, !0 ) .removeAttr ( 'style' ) .unbind (  ) .off (  ) ;

          reviews_carouselClass .cls_prop_ky_element_obj_arr .control_pause_carousel .stop ( !0, !0 ) .removeAttr ( 'style' ) .unbind (  ) .off (  ) ;


          reviews_carouselClass .cls_prop_ky_carousel .removeClass ( 'initiate_carousel_slides fade slide' ) ;


          reviews_carouselClass .cls_prop_ky_carousel .find ( objsMergedIntoOneNewOb .confClass_prop_ky_slide ) .removeClass ( 'current current2 next next2 prev prev2' ) ;


        } ,
        // closing brace of function nullifyAndPrepareThisObjectForGarbageCollection


      };
      // closing brace & semicolon for object reviews_carouselClass


      reviews_carouselClass .instantiateObjOfReviewCarousel (  ) ;


      this .updateCarouselObjs = function ( objsMergedIntoOneNewOb2 ) {

        options = $.extend ( objsMergedIntoOneNewOb, objsMergedIntoOneNewOb, objsMergedIntoOneNewOb2 ) ;

        this .resizeCarouselRespectiveToViewPort (  ) ;

      } ;
      // closing brace & semicolon of function updateCarouselObjs


      this .slideOverToASpecificCarouselSlide = function ( slideToGoTo, skipSlide ) {

        if ( slideToGoTo != reviews_carouselClass .cls_prop_ky_current_slide ) {

          reviews_carouselClass .goToClickedSwipedSelectedSlide ( slideToGoTo, skipSlide ) ;

        }
        // closing brace of if ( slideToGoTo != reviews_carouselClass .cls_prop_ky_current_slide )

      } ;
      // closing brace & semicolon of function slideOverToASpecificCarouselSlide


      this .goToNextSlideFromCurrent = function (  ) {

        reviews_carouselClass .slideLeftFromCurrentSlide_ToGoToTheNextSlide (  ) ;

      } ;
      // closing brace & semicolon of function goToNextSlideFromCurrent


      this .goToPreviousSlideFromCurrent = function (  ) {

        reviews_carouselClass .slideRightFromCurrentSlide_ToGoToThePreviousSlide (  ) ;

      } ;
      // closing brace & semicolon of function goToNextSlideFromCurrent


      this .pauseAnimationCarouselSliding = function (  ) {

        reviews_carouselClass .cls_ky_carousel_paused = !0 ;

      } ;
      // closing brace & semicolon of function pauseCarouselSlideSlidingTransitions


      this .resumePlayAnimationCarouselSliding = function (  ) {

        reviews_carouselClass .cls_prop_ky_carousel_paused = !1 ;

      } ;
      // closing brace & semicolon of function resumePlayAnimationCarouselSliding


      this .swipe = function ( event, phase, direction, distance, orientation, callback ) {

        reviews_carouselClass .swipe ( event, phase, direction, distance, orientation, callback ) ;

      } ;
      // closing brace & semicolon of function swipe


      this .resizeCarouselToViewPort  = function (  ) {

        reviews_carouselClass .resize .run (  ) ;

      } ;
      // closing brace & semicolon of function resizeCarouselToViewPort


      this .makeObjEligibleForGarbageCollection = function (  ) {

        reviews_carouselClass .nullifyAndPrepareThisObjectForGarbageCollection (  ) ;

      } ;
      // closing brace & semicolon of function makeObjEligibleForGarbageCollection


      this .getCurrentSlideInCarouselCenter = function (  ) {

        return reviews_carouselClass .cls_prop_ky_current_slide ;

      } ;
      // closing brace & semicolon of function getCurrentSlideInCarouselCenter


      $ ( window ) .on ( 'resize' , function (  ) {

        if ( navigator .userAgent .indexOf ( 'Chrome' ) != -1 ) {

          var raw = navigator .userAgent .match ( /Chrom(e|ium)\/([0-9]+)\./ ) ;

          if ( ( raw ? parseInt ( raw [2] , 10 ) : !1 ) < 93 ) {

            $ ( window ) .resize ( function (  ) {

              $( '#reviews' ) .css ( "maxWidth" , $( '.column-carousel_reviews-left' ) .innerWidth (  ) + 'px' ) ;

              reviews_carouselClass .resize .run (  ) ;

            } ) ;

          } else if ( ( raw ? parseInt ( raw [2] , 10 ) : !1 ) == 93 ) {

            $( '#reviews' ) .css ( "maxWidth" , $ ( '.column-carousel_reviews-left' ) .innerWidth (  ) + 'px' ) ;

            reviews_carouselClass .resize .run (  ) ;

          } else {

            $( '#reviews' ) .css ( "maxWidth" , $ ( '.column-carousel_reviews-left' ) .innerWidth (  ) + 'px' ) ;

            reviews_carouselClass .resize .run (  ) ;

          }

        } else {

          $( '#reviews' ) .css ( "maxWidth" , $ ( '.column-carousel_reviews-left' ) .innerWidth (  ) + 'px' ) ;

          reviews_carouselClass .resize .run (  ) ;

        }
        // closing brace of if-else ( navigator .userAgent .indexOf ( 'Chrome' ) != -1 )

      });


    } ;
    // closing brace of function createReviewsCarousel ( root , objsMergedIntoOneNewOb )



  } ) ( jQuery ) ;
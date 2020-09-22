;(function($){

	var _window = $(window);
	var _document = $(document);
	var $htmlBody = $('html, body');

	// nav effect
	var navScrollTo = function(){

		var $navigate = $('#navigate'),
			$navLis = $navigate.find('li'),
			$navA = $navLis.find('a');

		

		$navA.on( 'click', function( e ){
			if(e.target.innerText != "Blog"){
				e.preventDefault();

				var $this = $(this);
				var $thisHash = $(this.hash);
				var _elementsTop = $thisHash.offset().top;

				//console.log( $this.prop('hash') );

				
				$this.parent().siblings().children().removeClass( 'nav--current' );

				$this.addClass('nav--current');

				if( $this.prop('hash') == '#home' ){

					$htmlBody.animate({

						scrollTop: 0

					}, 500 );


				} else {

					$htmlBody.animate({

						scrollTop: _elementsTop - 100

					}, 500 );


				};
			}
			


		} );
		
	};

	navScrollTo();

	// scroll fixed header effect

	var headerFix = function(){

		var $header = $('#header');

		_document.on( 'scroll', function(e){

			$this = $(this);

			//console.log( $this.scrollTop() );

			if( $this.scrollTop() > 101 ){

				$header.addClass( 'is--fixed' );				

			} else {

				$header.removeClass( 'is--fixed' );

			}


		} );


	};

	headerFix();

	// banner slider effect

	var bnSlider = function(){

		var $bnSlider = $('#bnSlider');


		$bnSlider.cycle({

			slides: '.bn__wrap',
			slideCss: {

				position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                width: '100%',
                marginLeft: 'auto',
                marginRight: 'auto'

			},
			speed: 1000,
            timeout: 3000,
            pauseOnHover: true,
            pagerEvent: 'mouseover',
            pager: '#bnNav',
            pagerActiveClass: 'bn--active',
            pagerTemplate: '<a href="#"></a>'


		});



	};

	bnSlider();

	// what is our service effect

	var serviceIntor = function(){

		$managePic = $('#managePic'),
		$managePicA = $managePic.find('a');

		var chartInfo = function( index, picIndex ){

			$managePicA.eq( index ).on({

				mouseenter: function(){

					$managePic.css({

						'background' : 'url(../../img/service/security-portal-' + picIndex + '.png)',
						'z-index' : 5 

					});
					

				},
				mouseleave: function(){

					$managePic.css({

						'background' : 'url(../../img/service/security-portal.png)',
						'z-index' : 1 

					});

				}


			});


		};

		chartInfo( 0, 1);
		chartInfo( 1, 2);
		chartInfo( 2, 3);

	};

	serviceIntor();


	// alienvault usm effect

	var alienIntor = function(){

		$globeOuter = $('#globeOuter'),
		$globeMiddle = $('#globeMiddle'),
		$btnBm = $('#btnBm'),
		$btnSiem = $('#btnSiem'),
		$btnTd = $('#btnTd'),
		$btnAd = $('#btnAd'),
		$btnVa = $('#btnVa'),
		$otx = $('#otx'),
		$infoInt = $('#infoInt'),
		$infoBm = $('#infoBm'),
		$infoSiem = $('#infoSiem'),
		$infoTd = $('#infoTd'),
		$infoAd = $('#infoAd'),
		$infoVa = $('#infoVa');


		var showinfo = function( selectors, showElems ){

			selectors.on({

				mouseenter: function(){

					showElems.stop(false, true).fadeIn(200);
					

				},
				mouseleave: function(){

					showElems.stop(false, true).fadeOut(200);

				}


			});


		};

		showinfo( $globeOuter, $otx );
		showinfo( $globeMiddle, $infoInt );
		showinfo( $btnBm, $infoBm );
		showinfo( $btnSiem, $infoSiem );
		showinfo( $btnTd, $infoTd );
		showinfo( $btnAd, $infoAd );
		showinfo( $btnVa, $infoVa );


	};

	alienIntor();


	// support dowoload effect

	var supportLink = function() {

		var $supportLink = $('#supportLink'),
			$sLink1 = $supportLink.find('li').eq(0),
			$sLink2 = $supportLink.find('li').eq(8),
			$sLink3 = $supportLink.find('li').eq(12);


		var hoverEffect = function( links ){

			links.on({

				mouseenter: function(){

					var $this = $( this );
					$this.find( 'ul' ).removeClass( 'is--hide' );

				},
				mouseleave: function(){

					var $this = $(this);
					$this.find( 'ul' ).addClass( 'is--hide' );

				}


			});


		};

		hoverEffect( $sLink1 );
		hoverEffect( $sLink2 );
		hoverEffect( $sLink3 );

	};

	supportLink();

}(jQuery));
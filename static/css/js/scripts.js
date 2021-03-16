/*!
    * Start Bootstrap - Freelancer v6.0.5 (https://startbootstrap.com/theme/freelancer)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
    */
    (function($) {
    "use strict"; // Start of use strict
  
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 71)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });
  
    // Scroll to top button appear
    $(document).scroll(function() {
      var scrollDistance = $(this).scrollTop();
      if (scrollDistance > 100) {
        $('.scroll-to-top').fadeIn();
      } else {
        $('.scroll-to-top').fadeOut();
      }
    });
  
    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });
  
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 80
    });
  
    // Collapse Navbar
    var navbarCollapse = function() {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
  
    // Floating label headings for the contact form
    $(function() {
      $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
      }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
      }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
      });
    });
  
  })(jQuery); // End of use strict
  
  
  
        let favorite_btn = $('#btn-favorite');

        favorite_btn.on('click', function () {
            let user = $(this).data('user');

            if (user) {

                let song_id = $(this).data('song-id');
                let decision = $(this).data('decision');

                $.ajaxSetup({
                    headers: {
                        'X-CSRFToken': csrfmiddlewaretoken
                    }
                });

                $.ajax({
                    type: 'POST',
                    url: $(this).data('url'),
                    data: {
                        song_id,
                        decision,
                    },
                    dataType: 'json',
                    success: function (res) {
                        if (res.status === true) {
                            if (decision === 'make') {
                                favorite_btn.attr('data-decision', 'remove');
                                favorite_btn.find('i.la-heart-o').removeClass('la-heart-o').addClass('la-heart');
                            } else {
                                favorite_btn.attr('data-decision', 'make');
                                favorite_btn.find('i.la-heart').removeClass('la-heart').addClass('la-heart-o');
                            }
                            toastr.options = {
                                "positionClass": "toast-bottom-right",
                            };
                            toastr.success(res.message);
                        }
                    },
                    error: function (err) {
                        console.log(err);
                    }
                });
            } else {
                toastr.options = {
                    "positionClass": "toast-bottom-right",
                };
                toastr.warning('Please login to continue');
            }
        });

        Amplitude.init({
            "songs": [{
                name: "{{ song.title }}",
                artist: "Arebica Luna",
                album: "Mummy",
                url: "{{ song.song.url }}",
                cover_art_url: "{{ song.thumbnail.url }}"
            }],
            "bindings": {
                32: 'play_pause'
            },
            "callbacks": {
                'play': function () {
                    wavesurfer.play();
                    wavesurfer.setCurrentTime(Amplitude.getSongPlayedSeconds());
                },
                'timeupdate': function () {
                    wavesurfer.setCurrentTime(Amplitude.getSongPlayedSeconds());
                },
                'seeked': function () {
                    wavesurfer.setCurrentTime(Amplitude.getSongPlayedSeconds());
                },
                'pause': function () {
                    wavesurfer.setCurrentTime(Amplitude.getSongPlayedSeconds());
                    wavesurfer.pause();
                }
            }
        });

        window.onkeydown = function (e) {
            return !(e.keyCode === 32);
        };

        document.getElementById('song-played-progress').addEventListener('click', function (e) {
            let offset = this.getBoundingClientRect();
            let x = e.pageX - offset.left;

            Amplitude.setSongPlayedPercentage((parseFloat(x) / parseFloat(this.offsetWidth)) * 100);
        });

        let wavesurfer = WaveSurfer.create({
            container: '#waveform',
            waveColor: '#733ce6',
            progressColor: '#bfbfbf',
            height: 150,
            scrollParent: false,
            responsive: true,
        });

        wavesurfer.on('loading', function (integer) {
            $('#waveform-load').html("Generating waves.. (" + integer + '%)');
        });

        wavesurfer.on('ready', function (percents) {
            wavesurfer.setVolume(0);
            $('#waveform-load').empty();
        });

        $("a[data-audio]").on("click", function () {
            $('#audioPlayer').css('visibility', 'visible');
            if ($(this).text().trim() === 'Play') {
                $('.amplitude-play-pause').addClass('amplitude-playing').removeClass('amplitude-paused');
                $(this).text('Pause');
            } else {
                $('.amplitude-play-pause').removeClass('amplitude-playing').addClass('amplitude-paused');
                $(this).text('Play');
            }

            if ($('.amplitude-play-pause').hasClass('amplitude-playing')) {
                Amplitude.play();
            } else {
                Amplitude.pause();
            }
        });

        wavesurfer.on('seek', function (seeks) {
        });

        wavesurfer.load('{{ song.song.url }}');

        $('.amplitude-play-pause').on('click', function () {
            if ($(this).hasClass('amplitude-playing')) {
                Amplitude.play();
                $('#play-pause').text('Pause');
            } else {
                Amplitude.pause();
                $('#play-pause').text('Play');
            }
        });

        let volumeIconClick = function () {

            $(document).on("click", ".volume-dropdown-menu", function (s) {
                s.stopPropagation();
            });

            let s = $('.audio-volume input[type="range"]'), t = $(".audio-volume .btn");
            s.on("change", function () {
                let s = $(this), e = parseInt(s.val(), 10);
                0 === e ? t.html('<i class="ion-md-volume-mute"></i>') : e > 0 && e < 70 ? t.html('<i class="ion-md-volume-low"></i>') : e > 70 && t.html('<i class="ion-md-volume-high"></i>')
            })
        };

        volumeIconClick();
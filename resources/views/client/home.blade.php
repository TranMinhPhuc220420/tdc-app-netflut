<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<meta name="csrf-token" content="{{ csrf_token() }}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>Home</title>

  <!-- Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossorigin="anonymous">

  <link rel="stylesheet" type="text/css" href="{{ asset('css/app.css') }}">

  <script>
    const IS_CLIENT = true;
  </script>

</head>
<body>

<div id="root"></div>

<script type="text/javascript" src="{{ asset('js/app.js')}}"></script>
<script>
  window.onload = () => {
    $(window).scroll(function () {
      var sticky = document.querySelector('.navbar');
      scroll = $(window).scrollTop();

      if (scroll > sticky.offsetHeight) {
        sticky.classList.add('fix-scroll');
      } else {
        sticky.classList.remove('fix-scroll');
      }
    });

    document.querySelector('.navbar .navbar-toggler').addEventListener('click', () => {
      document.querySelector('.navbar').classList.toggle('fix-scroll-btn');
    })


    let video = document.getElementById('video-banner-action');
    video.addEventListener('ended', () => {
      document.getElementById('baner').classList.remove('action-video');
    });

    document.querySelector('.nav-right .form-search button.btn').addEventListener('click', () => {
      document.querySelector('.nav-right .form-search').classList.toggle('show');
      document.querySelector('input[name="key_search"]').focus();
    });
    document.querySelector('input[name="key_search"]').addEventListener('focus', () => {
      document.querySelector('.form-search').classList.add('focus');
    });
    document.querySelector('input[name="key_search"]').addEventListener('focusout', () => {
      document.querySelector('.nav-right .form-search').classList.remove('show');
      document.querySelector('.form-search').classList.remove('focus');
    });

    document.querySelector('#video-banner-action').addEventListener('canplay', () => {
      document.querySelector('#baner').classList.add('action-video');
    });


    let arrCardVideo = document.getElementsByClassName('card');
    for (let i = 0; i < arrCardVideo.length; i++) {
      arrCardVideo[i].addEventListener('mousemove', () => {
        const element = arrCardVideo[i].children[0].children[1];
        document.getElementById('baner').classList.remove('action-video');
        document.querySelector('#video-banner-action').pause();
        element.playbackRate = 3;
        element.play();
      });
      arrCardVideo[i].addEventListener('mouseout', () => {
        const element = arrCardVideo[i].children[0].children[1];
        element.currentTime = 0;
      });
    }

    let arrVideoControl = document.getElementsByClassName('video-control');
    for (let i = 0; i < arrVideoControl.length; i++) {
      const element = arrVideoControl[i];

      element.children[1].addEventListener('click', () => {
        let video = element.children[0];
        if (video.paused) {
          video.play();
        } else {
          video.pause();
        }
        video.addEventListener('ended', () => {
          element.classList.toggle('action-video')
        });
        element.classList.toggle('action-video')
      });
    }
  }
</script>
</body>
</html>

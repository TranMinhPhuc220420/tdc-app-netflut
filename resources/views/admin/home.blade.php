<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<meta name="csrf-token" content="{{ csrf_token() }}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Laravel</title>
  <!-- Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossorigin="anonymous">

  <link rel="stylesheet" type="text/css" href="{{ asset('css/app.css') }}">
  <script >
    const IS_CLIENT = false;
    const DOMAIN = window.location.hostname;
  </script>
</head>

<body class="loading">

<section id="splash" class="show" aria-busy="true" aria-live="polite">
  <svg viewBox="0 0 44 44" stroke="currentColor" width="50" role="progressbar">
    <g fill="none" fill-rule="evenodd" stroke-width="2">
      <circle cx="22" cy="22" r="1">
        <animate attributeName="r" begin="0s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1"
                 keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"></animate>
        <animate attributeName="stroke-opacity" begin="0s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1"
                 keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"></animate>
      </circle>
      <circle cx="22" cy="22" r="1">
        <animate attributeName="r" begin="-0.9s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1"
                 keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"></animate>
        <animate attributeName="stroke-opacity" begin="-0.9s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1"
                 keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"></animate>
      </circle>
    </g>
  </svg>
</section>
<!--  component loading -->
<style>
  #splash {
    transition: 0.5s all;

    opacity: 0;
    z-index: -1;

    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
  }
  #splash svg {
    color: #d92312;
    width: 10rem;
  }
  #splash.show {
    opacity: 1 !important;
    z-index: 9999999999 !important;
  }

  .loading {
    overflow: hidden;
  }
</style>
<div id="wrapper"></div>
<!--  component loading -->


<script src="https://kit.fontawesome.com/c776f8e511.js" crossorigin="anonymous"></script>
<script type="text/javascript" src="{{ asset('js/app.js')}}"></script>
<script>
  //remove loading page or components
  setTimeout(function () {
    document.querySelector('body').classList.remove('loading');
    document.querySelector('#splash').classList.remove('show');
  }, 2000);

  //resize for navigation left main
  window.addEventListener('resize', () => {
    let maxWidth = document.documentElement.clientWidth;
    if (maxWidth <= 992) {
      document.querySelector('body').classList.add('sidebar-collapse');
    } else {
      document.querySelector('body').classList.remove('sidebar-collapse');
    }
  });
</script>
</body>

</html>

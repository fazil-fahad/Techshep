<!doctype html>
<html class="" lang="">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>Techshep</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- Place favicon.ico and apple-touch-icon.png in the root of your domain-->
        <link rel="shortcut icon" href="/favicon.ico">
        <link rel="apple-touch-icon" href="/apple-touch-icon.png">
        <!-- normalize.min.css for browser compatibility -->
        <link rel="stylesheet" href="assets/css/normalize.css">
        <!--bootstrap.min.css for responsive-->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
        <!--Brandon.css for font style-->
        <link type="text/css" rel="stylesheet" href="http://fast.fonts.net/cssapi/66f0623f-1e9f-49a1-9a9b-e9a0ce6f0d0a.css"/>
        <link href='https://fonts.googleapis.com/css?family=Source+Serif+Pro:400,600' rel='stylesheet' type='text/css'>
        <!--main.css for custom style-->
        <link rel="stylesheet" href="assets/css/swiper.min.css">
        <link rel="stylesheet" href="assets/css/simpletextrotator.css">
        <link rel="stylesheet" href="assets/css/main.css">
        <!--media-query.css for custom style-->
        <link rel="stylesheet" href="assets/css/media-query.css">
    </head>
    <body>
        <!--[if lt IE 8]>
            <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
        <!-- Add your site or application content here -->
        <header class="header--fixed" id="header" data-headroom>
            <section class="secondary-nav">
                <div class="container">
                    <a href="tel:855-568-4141" class="pull-left telephone">
                        <!-- <img src="assets/images/svg/phone-icon.svg" alt="phone-icon"> -->
                        855-568-4141
                    </a>
                    <div class="input-group stylish-input-group pull-right">
                        <input type="text" class="form-control no-border no-border-radius bg-transparent text-holder"  placeholder="Search" >
                        <span class="input-group-addon no-border no-border-radius bg-transparent">
                            <button type="submit" class="no-border bg-transparent search-icon no-padding">
                                <img src="assets/images/svg/search-icon.svg" alt="search-icon" class="full-width search-icon-svg">
                            </button>
                        </span>
                    </div>
                </div>
            </section>
            <section class="primary-nav">
                <div class="container">
                    <nav class="navbar navbar-default no-margin stylish-navbar no-border no-border-radius">
                        <div class="navbar-header">
                          <button type="button" class="navbar-toggle collapsed no-margin" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar top-bar"></span>
                            <span class="icon-bar middle-bar"></span>
                            <span class="icon-bar bottom-bar"></span>
                          </button>
                          <h1 class="no-margin">
                              <a class="navbar-brand" href="index.php"></a>
                          </h1>
                        </div>
                        <div id="navbar" class="navbar-collapse collapse pull-right no-padding">
                          <ul class="nav navbar-nav">
                              <li <?php echo ($page == 'about') ? 'class="active"' : '';?>> <a href="about.php">About</a> </li>
                              <li <?php echo ($page == 'careers') ? 'class="active"' : '';?>> <a href="career.php">Careers</a> </li>
                              <li <?php echo ($page == 'academy') ? 'class="active"' : '';?>> <a href="academy.php">Academy</a> </li>
                              <li <?php echo ($page == 'case-study') ? 'class="active"' : '';?>> <a href="case-study.php">Case Studies</a> </li>
                              <li <?php echo ($page == 'pricing') ? 'class="active"' : '';?>> <a href="pricing.php">Pricing</a> </li>
                              <li <?php echo ($page == 'contact') ? 'class="active"' : '';?>> <a href="contact.php">Contact</a> </li>
                              <li><a href="#">Let's Talk</a></li>
                            </ul>
                        </div><!--/nav-collapse -->
                    </nav>
                </div>
            </section>
        </header>
        <main>

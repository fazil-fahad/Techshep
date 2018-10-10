<?php $page = 'contact'; ?>
<?php include 'assets/include/header.php'; ?>
<section class="page-info blue-gradient">
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3">
                <h2 class="no-margin text-center">
                Contact
                </h2>
            </div>
        </div>
    </div>
</section>
<section class="section-control contact-section">
    <div class="container">
      <div class="col-xs-12 col-sm-6 col-md-8 left-sidebar no-margin-top">
              <h2 class="no-margin-top">We would love to hear from you.</h2>
              <p>Our Advisors are available weekdays from 7:30 a.m. to 5:30 p.m. CST to answer your questions, review your current insurance coverage, and help you get coverage for you, your family, and your practice.</p>
              <div class="col-xs-6 col-sm-12 col-md-4 contact-blog">
                <figure>
                  <img alt="" src="assets/images/svg/chat-icon.svg">
                </figure>
                <div class="contact-details">
                  <h3 class="no-margin-top">Chat</h3>
                  <a href="#" class="btn-link">Chat with us now.</a>
                  <p>Available weekdays from 7:30am to 5:30pm</p>
                </div>
              </div>
              <div class="col-xs-6 col-sm-12 col-md-4 contact-blog">
                <figure>
                  <img alt="telephone icon" src="assets/images/svg/telephone-icon.svg">
                </figure>
                <div class="contact-details">
                  <h3 class="no-margin-top">Call us</h3>
                  <span>855-568-4141</span>
                    <p>Available weekdays from 7:30am to 5:30pm</p>
                  </div>
                </div>
              <div class="col-xs-6 col-sm-12 col-md-4 contact-blog">
                <figure>
                  <img alt="" src="assets/images/svg/mail-icon.svg">
                </figure>
                <div class="contact-details">
                  <h3 class="no-margin-top">Mail</h3>
                  <p>TechShepherd HQ 5455 N Federal Hwy Boca Raton, FL 33487</p>
                </div>
              </div>
              <div class="col-xs-6 col-sm-12 col-md-6 contact-blog">
<!--                 <figure>
                  <img alt="" src="assets/images/svg/fax-icon.svg">
                </figure>
                <div class="contact-details">
                  <h3 class="no-margin-top">Fax</h3>
                  <span>512-370-1799</span>
                </div> -->
              </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4 right-sidebar">
                    <div class="contact-form blue-gradient">
                      <h2 class="no-margin-top">
                        <figure>
                          <img src="assets/images/svg/email-icon.svg" alt="" />
                        </figure>
                        Send us an email
                      </h2>
                      <p>We usually get back to you within 48 hours.</p>
                      <form id="web-to-case-form">
                        <input type="hidden" value="00D1a000000Z9gI" name="orgid">
                        <div class="form-group">
                          <input type="text" class="form-control" placeholder="Name" size="20" name="name" maxlength="80" id="name">
                        </div>
                        <div class="form-group">
                        <input type="text" class="form-control" placeholder="Email" size="20" name="email" maxlength="80" id="email">
                        </div>
                        <div class="form-group">
                            <textarea placeholder="Description" class="form-control" name="description"></textarea>
                        </div>
                        <button type="button" name="button" class="btn btn-success btn-common text-uppercase">Submit</button>
                        </form>
                    </div>
                  </div>
    </div>
</section>
<section class="google-map-section section-control">
  <div class="map-location">
    <h3 class="no-margin-top">
      <figure>
        <img src="assets/images/svg/location-pin-icon.svg" alt="">
      </figure>
      <strong>
        Our Location
      </strong>
    </h3>
    <p class="no-margin-bottom">401W. 15th St.,
      <br> Suite 600 Austin,
      <br> TX 78701-1671</p>
    </div>
  <div class="" id="canvas1">
    <script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false"></script>
    <div style="overflow:hidden;height:500px;width:100%;" id="map_canvas1">
      <div id="gmap_canvas" style="height:500px;width:100%;">
      </div>
      <style>#gmap_canvas img{max-width:none!important;background:none!important}</style>
    </div>
    <script type="text/javascript"> function init_map(){var myOptions = {zoom:14,center:new google.maps.LatLng(26.396942,-80.07687729999998),mapTypeId: google.maps.MapTypeId.ROADMAP};map = new google.maps.Map(document.getElementById("gmap_canvas"), myOptions);marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(26.396942, -80.07687729999998)});infowindow = new google.maps.InfoWindow({content:"<b>Techshepherd</b><br/>5455 N Federal Hwy<br/> Boca Raton" });google.maps.event.addListener(marker, "click", function(){infowindow.open(map,marker);});infowindow.open(map,marker);}google.maps.event.addDomListener(window, 'load', init_map);</script>
  </div>
</section>
<?php include 'assets/include/social.php'; ?>
<?php include 'assets/include/footer.php'; ?>
</body>
</html>

<template>

  <body id="body">
    <div id="about">
          <div  class="container">
              <div id="aboutDiv1" class="row vertical_content_manage">
                  <div class="col-lg-6">
                      <div class="about_header_main mt-3">
                          <h4 id="firstHead" class="about_heading text-capitalize font-weight-bold mt-4">WHY CHOOSE US</h4>
                              <p class="text-muted mt-3">
                                FlyByAir is your gateway to unparalleled travel experiences, seamlessly blending excitement, convenience, and exceptional value. We are dedicated to crafting journeys that exceed expectations, sparing no effort in curating every detail to perfection. From handpicking the finest hotels to organizing reliable transportation and partnering with top-tier tourist guides, we ensure that every aspect of your adventure is meticulously planned and flawlessly executed.                              
                              </p>

                          <p class="text-muted mt-3"> 
                            Our philosophy is simple: travel should be effortless and enjoyable from start to finish. With FlyByAir, all you need to do is show up and immerse yourself in the experience; we take care of the rest. Our commitment to excellence and client satisfaction means that you can trust us to deliver unforgettable memories that will last a lifetime.
                          </p>
                      </div>
                  </div>

                  <div class="col-lg-6">
                      <div class="img_about mt-3">
                          <img id="img" src="../assets/about travel.jpg" class="img-fluid mx-auto d-block">
                      </div>
                  </div>
              </div>

              <div class="row mt-3">
                  <div id="col" class="col-lg-4">
                      <div class="about_content_box_all mt-3">
                          <div class="about_detail text-center">
                              <div class="about_icon">
                                  <i class="fa-regular fa-star fa-xl" style="color: black;"></i>
                              </div>
                              <h5 class="text-dark text-capitalize mt-3 font-weight-bold">
                                Excellence:
                              </h5>
                              <p class="edu_desc mt-3 mb-0 text-muted">
                                We strive for excellence in every aspect of our operations, from selecting the finest accommodations to delivering exceptional customer service.
                              </p>
                          </div>
                      </div>
                  </div>


                  <div id="col" class="col-lg-4">
                      <div class="about_content_box_all mt-3">
                          <div class="about_detail text-center">
                              <div class="about_icon">
                                <i class="fa-solid fa-scale-balanced fa-2xl" style="color: #000000;"></i>
                              </div>
                              <h5 class="text-dark text-capitalize mt-3 font-weight-bold">
                                Integrity:
                              </h5>
                              <p class="edu_desc mt-3 mb-0 text-muted">
                                Honesty, transparency, and integrity are the cornerstones of our business, ensuring that our clients can trust us to always act in their best interests.
                              </p>
                          </div>
                      </div>
                  </div>


                  <div id="col" class="col-lg-4">
                      <div class="about_content_box_all mt-3">
                          <div class="about_detail text-center">
                              <div class="about_icon">
                                <i class="fa-regular fa-face-smile-beam fa-2xl" style="color: #000000;"></i>
                              </div>
                              <h5 class="text-dark text-capitalize mt-3 font-weight-bold">
                                Client Satisfaction: 
                              </h5>
                              <p class="edu_desc mt-3 mb-0 text-muted"> Our clients are at the heart of everything we do, and we are dedicated to exceeding their expectations at every turn.
                              </p>
                          </div>
                      </div>
                  </div>


                  <div id="col" class="col-lg-4">
                      <div class="about_content_box_all mt-3">
                          <div class="about_detail text-center">
                              <div class="about_icon">
                                <i class="fa-regular fa-lightbulb fa-2xl" style="color: #000000;"></i>
                              </div>
                              <h5 class="text-dark text-capitalize mt-3 font-weight-bold">
                                Innovation:
                              </h5>
                              <p class="edu_desc mt-3 mb-0 text-muted">
                                We embrace innovation and continuously seek new ways to enhance the travel experience, leveraging cutting-edge technology and industry expertise.
                              </p>
                          </div>
                      </div>
                  </div>


                  <div id="col" class="col-lg-4">
                      <div class="about_content_box_all mt-3">
                          <div class="about_detail text-center">
                              <div class="about_icon">
                                  <i class="fa-regular fa-handshake fa-xl" style="color: black;"></i>
                              </div>
                              <h5 class="text-dark text-capitalize mt-3 font-weight-bold">
                                Collaboration:
                              </h5>
                              <p class="edu_desc mb-0 mt-3 text-muted"> 
                                We believe in the power of collaboration and work closely with our partners to create seamless, unforgettable travel experiences.
                              </p>
                          </div>
                      </div>
                  </div>

                  
                  <div id="col" class="col-lg-4">
                      <div class="about_content_box_all mt-3">
                          <div class="about_detail text-center">
                              <div class="about_icon">
                                <i class="fa-solid fa-shuffle fa-2xl" style="color: #000000;"></i>
                              </div>
                              <h5 class="text-dark text-capitalize mt-3 font-weight-bold">Flexibility:</h5>
                              <p class="edu_desc mb-0 mt-3 text-muted">
                                Flexibility is fundamental. We adapt to our clients' needs, offering customizable options and personalized solutions to ensure their journey is tailor-made to perfection. 
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </body>
  
</template>
<script>
export default {
  
}
</script >
<style scoped>

#body{
    background-image: url(/src/assets/sky\ 3.jpg);
    background-repeat: no-repeat;
    background-size:cover;
    height:125vh
}

#img{
  opacity: 0.5;
  width: 400px;
  height: 350px;
  width: 450px;
}

h1, h2, h3, h4, h5, h6 {
  color: rgb(0, 0, 0) !important;
  font-family: audiowide;
}
a, a:hover, a:focus, a:active {
  text-decoration: none;
  outline: none;
}
p{
  color: rgb(0, 0, 0) !important;
}
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.section_all {
  position: relative;
  padding-top: 80px;
  padding-bottom: 80px;
  min-height: 100vh;
}
.section-title {
  font-weight: 700;
  text-transform: capitalize;
  letter-spacing: 1px;
}

.section-subtitle {
  letter-spacing: 0.4px;
  line-height: 28px;
  max-width: 550px;
}

.section-title-border {
  background-color: #000;
  height: 13px;
  width: 44px;
}

.section-title-border-white {
  background-color: #fff;
  height: 2px;
  width: 100px;
}
.text_custom {
  color: #00bd2a;
}

.about_icon i {
  font-size: 22px;
  height: 65px;
  width: 65px;
  line-height: 65px;
  display: inline-block;
  background: #fff;
  border-radius: 35px;
  color: #00bd2a;
  box-shadow: 0 8px 20px -2px rgba(158, 152, 153, 0.5);
}

.about_header_main .about_heading {
  max-width: 450px;
  font-size: 24px;
}

.about_icon span {
  position: relative;
  top: -10px;
}

.about_content_box_all {
  padding: 28px;
}

/* #aboutDiv1{
  padding-top:-10px;
} */


#col{
  border-radius: 16px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.993);
  backdrop-filter: blur(5.3px);
  /* width: 550px; */
  box-shadow: 7px 7px 25px rgb(0, 187, 229);
  color: #fff;
  background-color: grey transparent;
}
#col:hover{
transform: scale(1.1);
transition: 0.3s;
z-index:1;
}
</style>

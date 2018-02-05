<template>
  <v-content>
    <section>
      <v-parallax src="src/assets/hero.jpeg" height="600">
        <v-layout
        column
        align-center
        justify-center
        class="white--text"
        >
          <img src="src/assets/logo.png" alt="Vuetify.js" height="200">
            <h1 class="white--text mb-2 display-1 text-xs-center">Prometheus Arms</h1>
            <div class="subheading mb-3 text-xs-center">Fire - With Precision</div>
          <v-btn
            class="green darken-2"
            dark
            large
            href=#test
          >
              Learn More
          </v-btn>
        </v-layout>
      </v-parallax>
    </section>
    <section id="test">
      <v-layout
      column
      wrap
      class="my-5"
      align-center
      >
      <v-flex xs12>
        <v-container grid-list-xl>
          <v-layout row wrap align-center>
            <v-flex xs12 md4>
              <v-card class="elevation-13 transparent pt-2">
                <v-card-text class="text-xs-center">
                  <v-icon x-large class="green--text text--darken-2">pan_tool</v-icon>
                </v-card-text>
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline text-xs-center">Hand-made</div>
                </v-card-title>
                <v-card-text class="text-xs-center">
                  All our manufacturing processes are done by hand. We believe that there is no substitute for human intuition and experience. Everything we build at Prometheus Arms Co. is hand-fitted for the highest level of precision. Hand-Made weapons are all we do.<br />This will never change
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 md4>
              <v-card class="elevation-13 transparent pb-3 pt-2">
                <v-card-text class="text-xs-center">
                  <v-icon x-large class="green--text text--darken-2">edit</v-icon>
                </v-card-text>
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Custom</div>
                </v-card-title>
                <v-card-text class="text-xs-center">
                  We manufacture premium, custom, precision bolt-action rifles as well as custom fit, semi-automatic rifles and hand-guns. With Prometheus Arms Co. you can have your gun made the way you want it, from start to finish.
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 md4>
              <v-card class="elevation-13 transparent pb-5 pt-2">
                <v-card-text class="text-xs-center">
                  <v-icon x-large class="green--text text--darken-2">build</v-icon>
                </v-card-text class="text-xs-center">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline text-xs-center">Made in Texas</div>
                </v-card-title>
                <v-card-text class="text-xs-center">
                  All of our firearms are manufactured right in the heart of the Lone-Star State. Our pride in Texas is strong and we are equally as proud to manfuacture all our firearms in the state of Texas.
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
      <v-flex xs12 pt-4>
      <v-btn
        class="green darken-2 text-xs-center"
        dark
        large
        href='/#/About'
      >
        About Our Philosphy
      </v-btn>
      </v-flex>
    </v-layout>
  </section>

    <section>
      <v-parallax src="src/assets/IMG_2933.JPG" height="420">
        <v-layout column align-center justify-center>
          <div class="display-1 white--text mb-3 text-xs-center">Your Custom Gun</div>
          <p>has never been closer</p>
          <br />
          <v-btn
            class="green darken-2"
            dark
            large
            href='/#/gallery'
            >
              View Our Firearms
          </v-btn>
<!--
              <v-dialog v-model="dialog">
          <v-btn class="green darken-1" dark slot="activator">Contact Us Today!</v-btn>
          <v-card>
            <v-card-title class="headline">test</v-card-title>
                 <v-card-text>  <div id="mc_embed_signup">
         <form action="https://prometheusarmsco.us17.list-manage.com/subscribe/post?u=7120d5f7a4777e3bb44b3a7a5&amp;id=343da27d8a" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
             <div id="mc_embed_signup_scroll">
         	<h2>Subscribe to our mailing list</h2>
         <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
         <div class="mc-field-group">
         	<label for="mce-EMAIL">Email Address  <span class="asterisk">*</span>
         </label>
         	<input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
         </div>
         <div class="mc-field-group">
         	<label for="mce-FNAME">First Name  <span class="asterisk">*</span>
         </label>
         	<input type="text" value="" name="FNAME" class="required" id="mce-FNAME">
         </div>
         <div class="mc-field-group">
         	<label for="mce-LNAME">Last Name </label>
         	<input type="text" value="" name="LNAME" class="" id="mce-LNAME">
         </div>
         	<div id="mce-responses" class="clear">
         		<div class="response" id="mce-error-response" style="display:none"></div>
         		<div class="response" id="mce-success-response" style="display:none"></div>
         	</div>
             <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_7120d5f7a4777e3bb44b3a7a5_343da27d8a" tabindex="-1" value=""></div>
             <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
             </div>
         </form>
         </div>
  </v-card-text>
          </v-card>
        </v-dialog> -->
        </v-layout>
      </v-parallax>
    </section>

    <section>
      <v-container grid-list-xl>
        <v-layout row wrap justify-center class="my-5">
          <v-flex xs12 sm4>
            <v-card class="elevation-13 transparent text-xs-center pb-4">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">Company info</div>
              </v-card-title>
              <v-card-text class='text-xs-center'>
                Prometheus Arms Co. is a precision rifle manufacturer located in DFW, Texas. We hold both an FFL-7 and SOT-2 license. We specialize in custom precision bolt-action rifles as well as custom fit pistols a semi-automatic weapons. Our tools are trusted and used by local law enforcement, Armed Forces, and competitive shooters.
              </v-card-text>
                <v-btn
                    outline color="green"
                    class="mt-1 green"
                    medium
                    href='/#/about'
                 >
                  Learn More
                </v-btn>
              </v-card>
            </v-flex>
            <v-flex xs12 sm4 offset-sm1>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Contact us</div>
                </v-card-title>
                <v-card-text>
                  Feel free to email or call us to schedule a visit.
                </v-card-text>
                <v-list class="transparent">
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="green--text text--darken-2">phone</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>214 723 8755</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="green--text text--darken-2">place</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>DFW, TX, US</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="green--text text--darken-2">email</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>
                        <a  class="white--text"href="mailto:prometheusarmsco@gmail.com">prometheusarmsco@gmail.com</a>
                    </v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
  </v-content>
</template>

<script>
  export default {
    data() {
      return {};
    },

    mounted() {
    },
  };
</script>

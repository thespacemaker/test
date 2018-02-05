
<template>
  <v-content>
    <section>
      <v-parallax src="/src/Assets/IMG_2904.JPG" height="600">
        <v-layout
        column
        align-center
        justify-center
        class="white--text"
        >
          <h1 class="white--text mb-2 display-1 text-xs-center">Our Philosophy</h1>
        </v-layout>
      </v-parallax>
    </section>
    <section>
      <v-flex>
        <v-container grid-list-xl>
          <v-layout row align-center>
            <v-flex xs1></v-flex>
            <v-flex xs10>
              <v-card class="elevation-13 transparent">
                <v-card-text class="text-xs-center">
                  <v-icon x-large class="green--text text--darken-2">
                    pan_tool
                  </v-icon>
                </v-card-text>
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">
                    Hand-Made
                  </div>
                </v-card-title>
                <v-card-text class='text-xs-center'>
                  Precision in manfuacturing is not the same as precision in a fiream. CNC and Machine-stamping can only operate within the scope of tolerances. To manufacture the most precise rifles in the world you have to have the human mind and hand behind the machine. Everything we do at Prometheus Arms Co. is centered around creating the most accurate firing tools possible. Because of this, we never settle for less than hand-made.
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs1></v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </section>
    <section>
      <v-parallax src="src/assets/IMG_2933.JPG" height="380">
        <v-layout column align-center justify-center>

        </v-layout>
      </v-parallax>
    </section>

    <section>
      <v-flex>
        <v-container grid-list-xl>
          <v-layout row align-center>
            <v-flex xs1></v-flex>
            <v-flex xs10>
              <v-card class="elevation-13 transparent">
                <div align="center">
                  <v-icon x-large class="green--text text--darken-2 pt-4">
                    add_circle_outline
                  </v-icon>
                </div>
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">
                    Provability
                  </div>
                </v-card-title>
                <v-card-text class="text-xs-center pb-4">
                  Prometheus Arms Co. has a proven track record of precision. All of our firearms undergo a rigorous quality control, inspection and testing. Every one of our precision bolt-action rifles are delivered with a proof target group.
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs1></v-flex>
          </v-layout>
        </v-container>
      </v-flex>
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

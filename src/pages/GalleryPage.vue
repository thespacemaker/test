<template>
  <v-content>
    <section>
      <v-parallax src="/src/Assets/IMG_2920.JPG" height="600">
        <v-layout
        column
        align-center
        justify-center
        class="white--text"
        >
          <h1 class="white--text mb-2 display-1 text-xs-center">Gallery</h1>
        </v-layout>
      </v-parallax>
    </section>
    <section>
      <v-container>
        <v-layout row wrap elevation-13 py-3>
          <v-flex xs12>
            <v-card class="elevation-0 transparent">
              <v-card-text class="display-1 text-xs-center pb-4">Rifles</v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs2></v-flex>
          <v-flex xs2>
            <v-card dark class=" hidden-xs-only">
              <v-card-text class="text-xs-center">CUSTOM</v-card-text>
            </v-card>
            <v-card class="transparent elevation-0 hidden-sm-and-up">
              <v-card-text class="text-xs-center">CUSTOM</v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs1></v-flex>
          <v-flex xs2>
            <v-card dark class="hidden-xs-only">
              <v-card-text class="text-xs-center">PRECISE</v-card-text>
            </v-card>
            <v-card class="transparent elevation-0 hidden-sm-and-up">
              <v-card-text class="text-xs-center">PRECISE</v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs1></v-flex>
          <v-flex xs2>
            <v-card dark class="hidden-xs-only">
              <v-card-text class="text-xs-center">ELITE</v-card-text>
            </v-card>
            <v-card class="transparent elevation-0 hidden-sm-and-up">
              <v-card-text class="text-xs-center">ELITE</v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs2></v-flex>
        </v-layout>
      </v-container>
    </section>
    <section>
        <v-carousel pb-4 delimiter-icon="stop">
          <v-carousel-item v-for="(item,i) in items" v-bind:src="item.src" :key="i"></v-carousel-item>
        </v-carousel>
    </section>

    <section>
      <br />
      <br />
      <br />
      <v-parallax src="/src/Assets/FullSizeRender2.jpg" height="380">
        <v-layout
        column
        align-center
        justify-center
        class="white--text"
        >
          <h1 class="white--text mb-2 display-1 text-xs-center">Gallery</h1>
        </v-layout>
      </v-parallax>
    </section>
    <section>
      <v-container>
        <v-layout row wrap elevation-13 py-3>
          <v-flex xs12>
            <v-card class="elevation-0 transparent">
              <v-card-text class="display-1 text-xs-center pb-4">Pistols</v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs2></v-flex>
          <v-flex xs2>
            <v-card dark class=" hidden-xs-only">
              <v-card-text class="text-xs-center">CUSTOM</v-card-text>
            </v-card>
            <v-card class="transparent elevation-0 hidden-sm-and-up">
              <v-card-text class="text-xs-center">CUSTOM</v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs1></v-flex>
          <v-flex xs2>
            <v-card dark class="hidden-xs-only">
              <v-card-text class="text-xs-center">PRECISE</v-card-text>
            </v-card>
            <v-card class="transparent elevation-0 hidden-sm-and-up">
              <v-card-text class="text-xs-center">PRECISE</v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs1></v-flex>
          <v-flex xs2>
            <v-card dark class="hidden-xs-only">
              <v-card-text class="text-xs-center">ELITE</v-card-text>
            </v-card>
            <v-card class="transparent elevation-0 hidden-sm-and-up">
              <v-card-text class="text-xs-center">ELITE</v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs2></v-flex>
        </v-layout>
      </v-container>
    </section>
    <section>
        <v-carousel pb-4 delimiter-icon="stop">
          <v-carousel-item v-for="(item2,i) in item2s" v-bind:src="item2.src" :key="i"></v-carousel-item>
        </v-carousel>
        <br />
        <br />
    </section>
  </v-content>
</template>

<script>
  export default {
    data() {
      return {
        dialog: false,
        items: [
          {
            src: '/src/Assets/Gallery/black.JPG'
          },
          {
            src: '/src/Assets/Gallery/Camo.JPG'
          },
          {
            src: '/src/Assets/Gallery/Camo2.JPG'
          },
          {
            src: '/src/Assets/Gallery/Dual.JPG'
          },
          {
            src: '/src/Assets/Gallery/Dual2.JPG'
          },
          {
            src: '/src/Assets/Gallery/heli.JPG'
          },
          {
            src: '/src/Assets/Gallery/heliblack.JPG'
          },
          {
            src: '/src/Assets/Gallery/heliblack2.JPG'
          },
          {
            src: '/src/Assets/Gallery/helicamo1.JPG'
          },
          {
            src: '/src/Assets/Gallery/helicamo2.JPG'
          },
          {
            src: '/src/Assets/Gallery/helicamo3.JPG'
          },
          {
            src: '/src/Assets/Gallery/helicamo4.JPG'
          }
        ],
        item2s: [
          {
            src: '/src/Assets/Gallery/pistol.JPG'
          },
          {
            src: '/src/Assets/Gallery/pistol2.JPG'
          },
          {
            src: '/src/Assets/Gallery/pistolblack.JPG'
          },
          {
            src: '/src/Assets/Gallery/pistolblack2.JPG'
          }
        ]
      };
    },

    mounted() {
    },
  };
</script>

<style scoped>
</style>

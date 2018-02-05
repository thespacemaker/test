<template>
    <v-app dark>
        <v-navigation-drawer temporary v-model="drawer">
            <v-list>
                <v-list-tile>
                    <v-list-tile-content>
                        <v-list-tile-title>
                            <span>Prometheus Arms Co.</span>
                        </v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-divider></v-divider>
                <template v-for="(item, index) in items">
                    <v-list-tile
                    active-class="green darken-2"
                    :href="item.href" :to="{name: item.href}">
                        <v-list-tile-action>
                            <v-icon v-html="item.icon"></v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title v-html="item.title"></v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </template>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar dark fixed>
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title align-center>Prometheus Arms Co.</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon href='/home'>
                <v-icon>home</v-icon>
            </v-btn>
        </v-toolbar>
        <main>
            <v-fade-transition mode="out-in">
                <router-view></router-view>
            </v-fade-transition>
        </main>

        <v-footer style="background-color:#5C0960">
          <v-layout row wrap align-center>
            <v-flex xs12>
              <div class="white--text ml-3 text-xs-center">
                Made with
                <v-icon class="white--text">favorite</v-icon>
                by <a class="white--text" href="https://spacemaker.000webhostapp.com" target="_blank">SpaceMaker</a>
              </div>
            </v-flex>
          </v-layout>
        </v-footer>
    </v-app>
</template>

<script type="text/babel">
  export default {
    data() {
      return {
        drawer: false,
        items: [{
          href: 'home',
          router: true,
          title: 'Home',
          icon: 'home',
        }, {
          href: 'gallery',
          router: true,
          title: 'Gallery',
          icon: 'photo_library',
        }, {
          href: 'about',
          router: true,
          title: 'About',
          icon: 'domain',
        }],
      };
    },
    methods: {
      openGithub() {
        window.open('https://github.com/disjfa/vuetify-sidebar-template');
      },
    },
  };


</script>

<style lang="stylus">
    @import '../node_modules/vuetify/src/stylus/main';
    @import 'css/main.css';

    .list__tile--active .list__tile__action,
.list__tile--active .list__tile__action .icon {
  color: "green";
}
</style>

<template>
  <v-app>
    <v-navigation-drawer
      app
      fixed
      persistent
    >
      <v-list class="c-header">
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Shitty Homes</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-form class="c-results-filter">
        <v-checkbox
          hide-details
          label="Cash for deed"
        ></v-checkbox>
        <v-checkbox
          hide-details
          label="Lease to own"
        ></v-checkbox>
        <v-checkbox
          hide-details
          label="Real estate owned"
        ></v-checkbox>
        <v-checkbox
          hide-details
          label="Single family rental"
        ></v-checkbox>
      </v-form>
    </v-navigation-drawer>
    <v-toolbar class="c-toolbar" app>
      <v-toolbar-title>Showing [#] results near [location].</v-toolbar-title>
    </v-toolbar>
    <v-navigation-drawer
      app
      fixed
      persistent
      right
    >
      <v-list class="c-result-list" two-line>
        <v-list-tile class="c-result-item" avatar @click="">
          <v-list-tile-avatar>
            <img src="https://placeimg.com/100/100/arch">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>305 Marina Ct</v-list-tile-title>
            <v-list-tile-sub-title>Lexinton, SC 29072</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile class="c-result-item" avatar @click="">
          <v-list-tile-avatar>
            <img src="https://placeimg.com/100/100/arch">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>305 Marina Ct</v-list-tile-title>
            <v-list-tile-sub-title>Lexinton, SC 29072</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile class="c-result-item" avatar @click="">
          <v-list-tile-avatar>
            <img src="https://placeimg.com/100/100/arch">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>305 Marina Ct</v-list-tile-title>
            <v-list-tile-sub-title>Lexinton, SC 29072</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile class="c-result-item" avatar @click="">
          <v-list-tile-avatar>
            <img src="https://placeimg.com/100/100/arch">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>305 Marina Ct</v-list-tile-title>
            <v-list-tile-sub-title>Lexinton, SC 29072</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile class="c-result-item" avatar @click="">
          <v-list-tile-avatar>
            <img src="https://placeimg.com/100/100/arch">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>305 Marina Ct</v-list-tile-title>
            <v-list-tile-sub-title>Lexinton, SC 29072</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <router-view/>
    </v-content>
    <v-footer class="c-footer" app fixed>
      <span>Shitty Homes &copy; 2018.</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  name: 'App',
};
</script>

<style>
  .c-header {
    border-bottom: 1px solid rgba(0,0,0,0.12);
  }
  .c-toolbar {
    border-bottom: 1px solid rgba(0,0,0,0.12);
    box-shadow: none;
  }
  .c-results-filter {
    padding: 15px;
  }
  .c-result-list {
    padding: 0;
  }
  .c-result-item {
    border-bottom: 1px solid rgba(0,0,0,0.12);
  }
  .c-footer {
    border-top: 1px solid rgba(0,0,0,0.12);
    padding: 0 15px;
  }
</style>

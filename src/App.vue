<template>
    <v-app>
      <nav-bar ></nav-bar>

      <v-main>
        <v-container fluid>
          <router-view :data="myData" />
        </v-container>
        
      </v-main>

      <v-footer
        app
      >

        footer
      </v-footer>
 
    </v-app>

</template>



<script>
import NavBar from './components/NavBar.vue';


export default {
  components: { NavBar },
  name: "App",

  data: () => ({
    myData: {},
    
  }),

  methods: {
    // getPageName: function() {
    //   this.pageName = 'Mahmoud';
    // }

  },

 

  mounted() {
    window.ipcRenderer.send("nameOfClientChannel");
    window.ipcRenderer.receive("nameOfElectronChannel", (homeData) => {
      this.myData = homeData;
    });
  },
};
</script>

<style>

</style>

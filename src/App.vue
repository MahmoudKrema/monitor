<template>
    <v-app>
      <nav-bar ></nav-bar>

      <v-content>
        <router-view :data="myData" />
      </v-content>
 
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

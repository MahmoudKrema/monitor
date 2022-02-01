<template>
    <v-app>
      <nav-bar ></nav-bar>

      <v-main>
        <v-container fluid>
          <!-- (:) is short hand for (v-bind) 
          and (v-bind) job is to make ("myData") dynamic and not just a string
          ro understand try to remove the bind
          
          -->
          <keep-alive>
            <router-view :data="myData" />
          </keep-alive>
          
          <p>App</p>

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
//(export default) uses 
//1- is for exporting the component and imort it in another component 
// (for example we imorted it in ) main.js

//2- something related to accessing data like (myData)

export default {
  //register comonents in the root component (App.vue)
  components: { 
    NavBar 
  },
  //another way to register a component
  // components: { 
  //   'myNavbar': NavBar 
  // },
  //there is also a way to register a component globally, search when you need it
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

<style scoped>
  /*
  to test scoped styling:
   p
  {
    color: red;
  } */
</style>

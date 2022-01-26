<template>
<nav>
 
 

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item to="/" @click="changePageName($event)" name="Home">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title >Home</v-list-item-title>
          </v-list-item>

          <v-list-item to="/disk" @click="changePageName($event)" name="Disk">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title >Disk</v-list-item-title>
          </v-list-item>

          <v-list-item to="/cpu" @click="changePageName($event)" name="CPU">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>CPU</v-list-item-title>
          </v-list-item>

          <v-list-item to="/memory" @click="changePageName($event)" name="Memory">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Memory</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  

  
     <v-app-bar
      color="deep-purple"
      dark
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>PC Monitor</v-toolbar-title>
      <v-spacer></v-spacer>
      <p>{{ this.$route.meta.title }}</p>
    </v-app-bar>

</nav>
  
</template>

<script>
  export default {
    data: () => ({
      drawer: false,
      group: null,
    }),

    methods: {
      changePageName: function(e) {
        // this.$store.state.pageName = e.target.name;
        
        this.$store.commit('changePageName', e);
      }
    },

     computed: {
    pageName() {
      console.log('flag');
      return this.$store.state.pageName;
    }
    
  },
  }
</script>
<template>
  <!-- <div class="home">
    <ul>
      <li>CPU Model: {{ data.cpuModel }}</li>

      <li>Total RAM in GB: {{ data.mbTotal }}</li>

      <li>Operative System Name: {{ data.SystemName }}</li>

      <li>operative system platform name: {{ data.platformName }}</li>

      <li>Desktop Name: {{ data.deviceName }}</li>

      <li>Username: {{ data.username }}</li>
    </ul>
  </div> -->
  <div class="home">
    <v-container class="lighten-5 title" v-for="(value, name) in data" :key="name">
      <v-row no-gutters>
        <v-col
          cols="4"        
        >
          <v-card
            class="pa-2"
            tile
          >
            {{name}}
          </v-card>
        </v-col>
        <v-col
          cols="8"
          
        >
          <v-card
            class="pa-2"
            tile
          >
            {{value}}
          </v-card>
        </v-col>
      </v-row>
      
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},

  data: () => ({
    
  }),
  

  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },

  methods: {},
};
</script>

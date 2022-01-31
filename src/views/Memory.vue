<template>
  <!-- <div class="memory">
    <p>Memory</p>
    <h3 v-if="memoryUsage === 0">Loading...</h3>
    <ul v-else>
      <li>Memory usage percentage: {{ memoryUsage }} %</li>

      <li>Memory usage by RSS: {{ memoryInfo.rss / 1000000 }} MB</li>

      <li>
        Memory usage by heapTotal: {{ memoryInfo.heapTotal / 1000000 }} MB
      </li>

      <li>Memory usage by heapUsed: {{ memoryInfo.heapUsed / 1000000 }} MB</li>

      <li>Memory usage by external: {{ memoryInfo.external / 1000000 }} MB</li>
    </ul>
  </div> -->
    <div class="memory">
      <v-container class="lighten-5 title">
      <v-row no-gutters>
        <v-col
          cols="4"        
        >
          <v-card
            class="pa-2"
            tile
          >
            Memory usage percentage:
          </v-card>
        </v-col>
        <v-col
          cols="8"
          
        >
          <v-card
            class="pa-2"
            tile
          >
            {{ memoryUsage }} %
          </v-card>
        </v-col>
      </v-row>
      
    </v-container>

    <v-container class="lighten-5 title" v-for="(value, name) in memoryInfo" :key="name">
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
// @ is an alias to /src

//(export default) uses 
//1- is for exporting the component and imort it in another component 
// (for example we imorted it in ) router (index.js)

//2- something related to accessing data
export default {
  name: "Memory",
  data: () => ({
    memoryUsage: 0,
    memoryInfo: {},
  }),
  components: {},

  mounted() {
    window.ipcRenderer.receive("sendMemoryUsage", (memoryData) => {
      this.memoryUsage = Math.round(memoryData.memoryUsage);
      this.memoryInfo = memoryData.memoryInfo;
    });
  },
};
</script>

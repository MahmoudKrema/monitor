<template>
  <!-- <div class="cpu">
    <p>CPU</p>
    <br />
    <ul>
      <li>CPU Model: {{ data.cpuModel }}</li>

      <li>CPU usage as a percentage: {{ usage }}%</li>
    </ul>
  </div> -->
  <div class="cpu">
    <v-container class="lighten-5 title">
    <v-row no-gutters>
      <v-col
        cols="4"        
      >
        <v-card
          class="pa-2"   
          tile
        >
          CPU Model:
        </v-card>
      </v-col>
      <v-col
        cols="8"
        
      >
        <v-card
          class="pa-2"
          tile
        >
          {{data.cpuModel}}
        </v-card>
      </v-col>
    </v-row>
    
    </v-container>

    <v-container class="lighten-5 title">
    <v-row no-gutters>
      <v-col
        cols="4"        
      >
        <v-card
          class="pa-2"
          tile
        >
         CPU usage as a percentage:
        </v-card>
      </v-col>
      <v-col
        cols="8"
        
      >
        <v-card
          class="pa-2"
          tile
        >
          {{ usage }}%
        </v-card>
      </v-col>
    </v-row>
    
    </v-container>

  </div>
  
  
</template>

<script>
export default {
  name: "Cpu",
  data: () => ({
    usage: 0,
  }),
  components: {},
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },
  mounted() {
    window.ipcRenderer.send("cpuToBack");
    window.ipcRenderer.receive("sendCpuUsage", (cpuUsage) => {
      this.usage = Math.round(cpuUsage[0].cpu);
    });
  },
};

//ask for cpu usage every second
setInterval(() => {
  window.ipcRenderer.send("cpuToBack");
}, 3000);
</script>

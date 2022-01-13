<template>
  <div class="cpu">
    <p>CPU</p>
    <br>
    <ul>
      <li>CPU Model: {{data.cpuModel}}</li>

      <li>CPU usage as a percentage: {{ usage }}%</li>

    </ul>  
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Cpu",
  data: () => ({
    usage: 0,
  }),
  components: {

  },
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

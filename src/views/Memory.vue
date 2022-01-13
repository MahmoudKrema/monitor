<template>
  <div class="memory">
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
  </div>
</template>

<script>
// @ is an alias to /src

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

<template>
  <div class="home">
    <ul>

      <li>CPU Model: {{data.cpuModel}}</li>

      <li>Total RAM in GB: {{data.mbTotal}}</li>

      <li>Operative System Name: {{data.SystemName}}</li>

      <li>operative system platform name: {{data.platformName}}</li>

      <li>Desktop Name: {{data.deviceName}}</li>

      <li>Username: {{data.username}}</li>


    </ul>  
    <!-- <p> {{ data.mbTotal }}</p> -->
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},

  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },


  methods: {
        

  },



};
</script>

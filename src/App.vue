<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/disk">Disk</router-link> |
      <router-link to="/cpu">CPU</router-link> |
      <router-link to="/memory">Memory</router-link>
    </div>
    <router-view :data="myData" />
  </div>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    myData: {},
  }),

  methods: {},

  mounted() {
    window.ipcRenderer.send("nameOfClientChannel");
    window.ipcRenderer.receive("nameOfElectronChannel", (homeData) => {
      this.myData = homeData;
    });
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}
body
{
  font-size: 30px;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

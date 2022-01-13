<template>
  <div class="disk">
    <p>Disk</p>
    <h3 v-if="disksNames.length === 0">Loading...</h3>
    <ul v-else>
      <li>
        The {{ diskInfo.numberOfDisks }} disks are:
        <ul>
          <li v-for="(disk, index) in disksNames" :key="disk">
            info of disk {{ disk }}
            <ul>
              <li>disk total size: {{ totalDisksSizes[index] }} GB</li>
              <li>disk used size: {{ usedDisksSizes[index] }} GB</li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Disk",

  data: () => ({
    diskInfo: {},
    disksNames: [],
    totalDisksSizes: [],
    usedDisksSizes: [],
  }),

  components: {},

  mounted() {
    window.ipcRenderer.receive("sendDiskInfo", (disks) => {
      let numberOfDisks = disks.length;

      let myDisksNames = [];
      let totalDisksSizes = [];
      let usedDisksSizes = [];

      disks.forEach((element, index) => {
        myDisksNames[index] = element._mounted;
        totalDisksSizes[index] = Math.round(element._blocks / 1000000000); //conver total space from MB to GB
        usedDisksSizes[index] = Math.round(element._used / 1000000000); //conver total space from MB to GB
      });

      this.diskInfo = {
        numberOfDisks,
      };

      this.disksNames = myDisksNames;
      this.totalDisksSizes = totalDisksSizes;
      this.usedDisksSizes = usedDisksSizes;
    });
  },
};

setInterval(() => {
  window.ipcRenderer.send("diskToBack");
}, 3000);
</script>

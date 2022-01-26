<template>
  <div class="disk">
    <p>Disk</p>
    <ul>
      <li>
        The {{ diskProp.numberOfDisks }} disks are:
        <ul>
          <li v-for="(disk, index) in diskProp.disksNames" :key="disk">
            info of disk {{ disk }}
            <ul>
              <li>disk total size: {{ diskProp.totalDisksSizes[index] }} GB</li>
              <li>disk used size: {{ diskProp.usedDisksSizes[index] }} GB</li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
    <!-- <p>disk names: {{ diskProp.totalDisksSizes }}</p> -->
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Disk",

  components: {},

  props: {
    diskProp: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

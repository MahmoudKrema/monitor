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

//(export default) uses 
//1- is for exporting the component and imort it in another component 
// (for example we imorted it in ) router (index.js)

//2- something related to accessing data
export default {
  name: "Disk",

  components: {},
  //to recieve (myData) object and save it in (diskProp) property
  props: {
    diskProp: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

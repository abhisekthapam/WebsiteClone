<template>
  <div>
    <div>
      <TheFirmAdministrators />
    </div>
    <div>
      <TheEasyMigration />
    </div>
    <div>
      <TheLegalSoftware />
    </div>
    <div>
      <TheImagesDiv />
    </div>
  </div>
</template>
  
<script>
import TheFirmAdministrators from '@/AboutSecond/TheFirmAdministrators.vue';
import TheEasyMigration from './TheEasyMigration.vue';
import TheLegalSoftware from './TheLegalSoftware.vue';
import TheImagesDiv from './TheImagesDiv.vue';

export default {
  components: {
    TheFirmAdministrators,
    TheEasyMigration,
    TheLegalSoftware,
    TheImagesDiv
  }
};
</script>
  

  
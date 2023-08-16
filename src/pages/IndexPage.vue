<template>
  <q-page padding>
    <q-toolbar class="bg-primary col-xs-9">
      <q-list>
        <q-item>
          <q-item-section>
            <q-checkbox :model-value="true"></q-checkbox>
          </q-item-section>
          <q-item-section>
            <span class="text-white">Bible in Index View</span>
          </q-item-section>
        </q-item>
      </q-list>
    </q-toolbar>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
  data() {
    return {
      selected: null,
    };
  },
});
</script>

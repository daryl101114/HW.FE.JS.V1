<template>
  <div class="w-full">
    <table class="w-full">
      <!-- TABLE HEADER -->
      <thead>
        <tr class="table-row test-borders">
          <th
            v-for="column in config"
            :key="column.name"
            class="header-column font-primary-50 w-25"
          >
            {{ column.name }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="d-flex" v-for="person in data" :key="person.id">
          <td
            v-for="column in config"
            :key="column.field"
            class="w-25 test-borders"
          >
            {{
              renderTableData(column.field, person, column.properties.renderer)
            }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { formattingOptions } from "../utils/dataFormatting.js";
export default {
  name: "TableComponent",
  components: {},
  props: {
    tableConfig: {
      type: Object,
      required: true,
    },
    tableData: {
      type: Array,
      required: false,
    },
  },
  data() {
    return {
      config: {},
      data: [],
    };
  },
  computed: {},
  methods: {
    renderTableData(field, person, rendererOption) {
      const { type = null, format = null } = rendererOption;

      //Check if format is a key
      if (formattingOptions[type]) {
        person["renderer"] = rendererOption;
        person[field] = formattingOptions[type](format, person);
      }
      return person[field];
    },
  },

  async created() {
    this.data = this.tableData;
    this.config = this.tableConfig.columnDefs;
  },
  watch: {
    tableData: function () {
      this.data = this.tableData;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../style/colorVarialbes.scss";
.table-row {
  display: flex;
}
.header-column {
  border: 1px solid $neutrals600;
  font-weight: 800;
  background-color: $neutrals500;
}
.body-column {
  border: 1px solid;
}
</style>

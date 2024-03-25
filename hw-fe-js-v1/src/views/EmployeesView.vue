<template>
  <div>
    <div class="w-full d-flex mt-1rem">
      <input
        class="h-1rem w-15rem"
        v-model="search"
        placeholder="Search Employee"
      />
      <button @click="createRecord()">Add Record</button>
    </div>
    <!-- LOADING -->
    <div v-if="isTableLoading">
      <div class="loader" />
      <h1>LOADING ...</h1>
    </div>
    <!-- TABLE CONTENT -->
    <div v-else>
      <employees-view
        class="mt-1rem"
        :tableConfig="employeeTableConfig"
        :tableData="pagedData"
      >
      </employees-view>

      <div v-if="getPageNumbers" class="pagination w-full">
        <a @click="setPageNumer(1)">&laquo;</a>
        <div v-for="page in getPageNumbers" :key="page">
          <a @click="setPageNumer(page)">{{ page }}</a>
        </div>
        <a @click="setPageNumer(getPageNumbers)">&raquo;</a>
      </div>
      <span>Page: {{ getCurrentPage }}</span>
    </div>
  </div>
</template>
<script>
// Component Import
import employeesView from "../components/TableComponent.vue";

// Imports
import data from "../utils/grid.json";
import { withAsync } from "../utils/withAsync.js";
export default {
  name: "EmployeesView",
  components: {
    "employees-view": employeesView,
  },
  data() {
    return {
      employeeTable: null,
      employeeTableConfig: {},
      tableLoading: false,
      employeeData: [],
      filteredRecords: [],
      search: "",
      currentPage: 1,
      pageSize: 2,
    };
  },
  computed: {
    isTableLoading() {
      return this.tableLoading;
    },
    getCurrentPage() {
      return this.currentPage;
    },
    getPageNumbers() {
      const pages = this.filteredData.length / 2;
      return Number(pages.toFixed(0));
    },
    pagedData() {
      return this.filteredData.slice(
        this.pageSize * this.currentPage - this.pageSize,
        this.pageSize * this.currentPage
      );
    },
    filteredData() {
      return this.employeeData.filter((item) => {
        const fullName = item.firstName + " " + item.lastName;
        return this.search
          ? fullName.toLowerCase().includes(this.search.toLocaleLowerCase())
          : true;
      });
    },
  },
  methods: {
    /** Add Record to the table */
    createRecord() {
      const newData = {
        firstName: "User",
        lastName: "Doe",
        dob: "1980-01-10",
        skills: ["JavaScript", "React"],
        addressStreet: "1 Main Street",
        addressCity: "New York",
        addressRegion: "NY",
        addressPostal: "10001",
        addressCountry: "USA",
      };
      //Generate a ID based on the latest ID found in employees data
      const generatedId =
        this.employeeData[this.employeeData.length - 1]?.id + 1;
      newData["id"] = generatedId;
      newData.firstName += generatedId;
      this.employeeData.push(newData);
    },
    //Retrieves the list a people and their formatted data
    async setPeople() {
      this.tableLoading = true;
      //Mimic an API call
      const { response, error } = await withAsync(
        this.$store.dispatch,
        "getPeople"
      );
      if (error) {
        //HANDLE UI ERROR LOGIC BY DISPLAYING A UI MESSAGE
        console.log("ERROR");
      } else {
        //Keep track of original data (used for filtering)
        this.employeeData = response.data;
        // Set original Data by default
        this.filteredRecords = this.employeeData;
      }
      this.tableLoading = false;
    },
    //Set The current page number
    setPageNumer(pageNumber) {
      this.currentPage = pageNumber;
    },
  },
  async created() {
    this.employeeTableConfig = data;
    await this.setPeople();
  },
  watch: {
    filteredData: function () {
      this.currentPage = 1;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../style/colorVarialbes.scss";
.pagination {
  display: inline-block;
}

.pagination a {
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
  &:active {
    color: $cyan500;
  }
}
</style>
;

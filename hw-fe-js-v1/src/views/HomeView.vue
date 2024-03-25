<template>
  <div class="home">
    <h1 class="home-header">Welcome to Employees Application</h1>
    <ul class="decorated-list">
      <li>
        <span class="font-neutrals-800"
          >Added Search Functionality for Employee Names</span
        >
        <ul class="inner-list">
          <li>Searching will reset the page to 1</li>
        </ul>
      </li>
      <li>
        <span class="font-neutrals-800">Ability to Add Employees</span>
        <ul class="inner-list">
          <li>
            Adds a new employee with name: user + employeeId - ex: (User1)
          </li>
        </ul>
      </li>
      <li>
        <span class="font-neutrals-800">Paginated Pages</span>
        <ul class="inner-list">
          <li>Pagination with 2 rows per page</li>
        </ul>
      </li>
      <li>
        <span class="font-neutrals-800"
          >Simulated API call instead of importing json directly</span
        >
      </li>
      <li><span class="font-neutrals-800">Loading Icon Implemented</span></li>
      <li>
        <span class="font-neutrals-800"
          >Altered grid.JSON to fit table implementation</span
        >
      </li>
    </ul>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "HomeView",
  components: {},
};
</script>
<style lang="scss" scoped>
@import "../style/colorVarialbes.scss";
.decorated-list {
  list-style-type: none;
  padding: 0;
}

.decorated-list li {
  margin-bottom: 20px;
  font-size: 18px;
  color: $neutrals500;
}

.inner-list {
  list-style-type: none;
  padding-left: 20px;
}

.inner-list li {
  font-size: 16px;
  color: $neutrals500;
}
</style>

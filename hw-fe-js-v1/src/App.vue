<template>
  <div id="app">
    <nav>
      <router-link to="/" class="font-neutrals-600">Home</router-link> |
      <router-link to="/employees" class="font-neutrals-600= fa"
        >Employees</router-link
      >
    </nav>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-size: 20px;
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

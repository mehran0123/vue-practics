<template>
  <div>
    <!-- <h1 v-if="show">Hello from Techbay Solutions Pakisatan Team!</h1> -->
    <!-- <h1 v-else>Hello from Techbay Solutions Dubai Team!</h1> -->
    <!-- <h3>{{ data }}</h3>
    <h2>{{ message }}</h2> -->
    <!-- <button v-on:click="display">Toggle Button</button> -->
    <h5>Parent Component</h5>
    <h4>For Loop in Vue.js</h4>
    <table border="1px">
      <tr>
        <td>ID</td>
        <td>Name</td>
        <td>Email</td>
      </tr>
      <tr v-for="user in users" :key="user.id">
         <td>{{ user.id }}</td>
        <td>{{ user.name }}</td>
        <td>{{ user.email }}</td>
      </tr>
    </table>
  </div>
</template>
<script>
// import HelloWorld from './HelloWorld.vue';
export default {
  // components: { HelloWorld },
  name: "HomePage",
  props: {
    data: String,
    message:String
  },data(){
    return {
        users: [
          {id:1,name:'mehran shiraz',email:'meharmani212@gmail.com'},
          {id:2,name:'Mazar Bhai',email:'mazar212@gmail.com'},
          {id:3,name:'Abeer',email:'abeer12@gmail.com'},
        ]
    }
  },methods:{
    display(){
      this.show = !this.show;
    }
  }
};
</script>

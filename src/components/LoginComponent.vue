<template>
  <div>
    <h1>Login Form</h1>
    <p v-if="errors.lenght">
        <b>Please Correct The Following erors.</b>
        <ul>
            <li v-for="e in errors" v-bind:key="e.id" >{{ e }}</li>
        </ul>
    </p>
    <form @submit="login">
      <span>Name:</span>
      <input
        type="text"
        v-model="username"
        placeholder="enter your name"
      /><br /><br />
      <span>Password:</span>
      <input
        type="password"
        v-model="password"
        placeholder="enter your password"
      /><br /><br />
      <button  type="submit">Login</button>
    </form>
    <hr />
    <h1>Life Cycle Hooks (Methods)</h1>
    <h3>{{ name }}</h3>
    <hr />

  </div>
</template>
<script>
export default {
  name: "LoginComponent",
  data() {
    return {
        username: null,
        password: null,
        errors:[],
        name:'Mehran Shiraz'
    };
  },
  methods: {
      login(e){
        this.errors=[]
        if(this.username && this.password){
           console.warn('no error')
        }
        if(!this.username){
           this.errors.push('Username is required!')
        }
         if(!this.password){
           this.errors.push('password is required!')
        }
        console.warn('helllooo',this.errors)
        e.preventDefault();
    }
  },created(){
        this.name='Mazar Bhai'
      console.warn("Created",this.name);

  },beforeCreate(){
        this.name='Ali'
      console.warn("Before Created",this.name);
  },mounted(){
      console.warn('mounted',this.$el);
  },beforeMount(){
      console.warn("beforeMount",this.$el);
  },destroyed(){
      console.warn('destroyed');
    //  alert('destroyed')
  },beforeDestroy() {
     // alert('going to destroy')
      console.warn('before Destroy');
  },
};
</script>

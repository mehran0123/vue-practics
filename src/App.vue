<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <ApiCall />

    <PostComponent />
    <ActiveBootstarp/>
    <hr>
    <div v-if="display">
      <LoginComponent />
    </div>
    <button v-on:click="toggle">Destroy Toogle</button>
    <SignUp />
    <h1>{{ title | Ucase }} </h1>
    <h1>{{ amount | currencyConverter }} </h1>
    <ChildComponent v-bind:users="users"  v-on:ChangeTitle="ChangeTitle($event)" />
    <HomePage data="Mehran Shiraz" message="Hi From Techbay Backend Team."/>
    <HomeComponent />
    <DataBind />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import HomePage from './components/HomePage.vue'
import HomeComponent from './components/HomeComponent.vue'
import DataBind from './components/DataBind.vue'
import ChildComponent from './components/ChildComponent.vue'
import SignUp from './components/SignUp.vue'
import LoginComponent from './components/LoginComponent.vue'
import ApiCall from './components/ApiCallComponent.vue'
import ActiveBootstarp from './components/ActiveBootstarp.vue'
import PostComponent from './components/PostComponent.vue'
export default {
  name: 'App',
  components: {
    // HelloWorld,
    HomePage,
    HomeComponent,
    DataBind,
    ChildComponent,
    SignUp,
    LoginComponent,
    ApiCall,
    ActiveBootstarp,
    PostComponent
  },data(){
    return {
      users:[
           {'id':1,'name':'mehran','email':'meharmani212@gmail.com'},
           {'id':1,'name':'Ali','email':'ali2092@gmail.com'},
           {'id':1,'name':'Arfan','email':'Arfan321@gmail.com'},
        ],
        title:'Mehran shiraz',
        amount:100,
        display:true
    }
  },
  methods:{
    ChangeTitle(title){
        this.title = title;
    },toggle(){
      this.display=!this.display
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

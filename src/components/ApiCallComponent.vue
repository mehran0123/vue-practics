<template>
    <div>
    <h1>Api Call Component</h1>
    <table border="1px">
        <tr>
        <!-- <th>Id</th> -->
        <th>Title</th>
        <th>Description</th>
        <th>Slug</th>
        <th>Action</th>
        </tr>
        <tr v-for="item in list" v-bind:key="item.id">
        <!-- <td>{{ item.id }}</td> -->
        <td>{{ item.title }}</td>
        <td>{{ item.description }}</td>
        <td>{{ item.slug }}</td>
        <td><button v-on:click="deleteUser(item.id)">Delete</button></td>
        </tr>
    </table>
    </div>
</template>
<script>
import Vue from 'vue';
import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios,axios)
 export default {
     name:'ApiCall',
     data(){
         return {
             list:[]
         }
     },methods:{
         getLifeStyles(){
                 Vue.axios.get('https://aaronz.techbay.co/api/get-lifestyles')
         .then(res => {
             console.warn(res.data.response.lifestyles)
             this.list = res.data.response.lifestyles
           })
         }
     },
     mounted(){
        this.getLifeStyles();
     }
 }
</script>
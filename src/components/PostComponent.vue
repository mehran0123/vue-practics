<template>
    <div>
        <h1>Post Component</h1>
        <form @submit="submitData" method="post">
        <input type="text" name="email" v-model="post.email" placeholder="enter your email address" /><br><br>
        <input type="test" name="name" v-model="post.name"  placeholder="enter your name"/><br>
        <textarea name="message" v-model="post.message"></textarea>
        <br>
        <button type="submit">Submit</button>
        </form>
        <hr>
    </div>
</template>
<script>
import Vue from 'vue';
import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios,axios)
export default {
    name:'PostComponent',
    data(){
        return {
            post:{
                email:null,
                name:null,
                message:null
            }
        }
    },methods:{
        submitData(e){
            this.axios('http://localhost/hello_amazing/api/contact-support',this.post).then((res) => {
                console.warn(res)
            })
            e.preventDefault();
            console.warn(this.post);
        }
    }
}
</script>
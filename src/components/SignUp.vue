<template>
    <div>
    <h1>Sign Up Form</h1>
    <span>Name:</span>
    <input type="text" placeholder="enter your name" v-model="signup.username"/><br><br>
    <span>Password:</span>
    <input type="password" placeholder="enter your password" v-model="signup.password"/><br><br>
    <span>Hobbies:</span>
    <input type="checkbox" name="cricket" id="cricket" value="cricket" v-model="signup.hobbies">
    <label for="cricket">Cricket</label>
    <input type="checkbox" name="footbal" id="footbal" value="footbal" v-model="signup.hobbies">
    <label for="footbal">Footbal</label><br><br>
    <span>Gender:</span>
    <input type="radio" name="gender" id="male" value="male" v-model="signup.gender">
    <label for="male">Male</label>
    <input type="radio" name="gender" id="female" value="female" v-model="signup.gender">
    <label for="female">Female</label><br><br> 
    <button v-on:click="signUpUser">SignUp</button>
    <hr>
    </div>
</template>
<script>
export default {
    name:'SignUp'
    ,data(){
        return {
            signup:{
                username:null,
                password:null,
                hobbies:[],
                gender:[],
            }
        }
    },methods:{
        signUpUser(){
            console.warn(this.signup)
        }
    }
}
</script>
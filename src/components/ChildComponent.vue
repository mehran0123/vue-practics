<template>
    <div class="childCompo">
        <h1>Child Component</h1>
        <h4 v-for="user in users" :key="user.id">
          My Name is {{ user.name }} and Email is {{ user.email  }}
        </h4>
        <button v-on:click="updateTitle">Update Parent Title</button>
    </div>
</template>
<script>
export default {
    name:'ChildComponent',
    props:[
        'users'
    ],
    methods:{
        updateTitle(){
            this.$emit('ChangeTitle','Parent Title Updated')
        }
    }
}
</script>

<style scoped>
.childCompo{
    background-color: rgb(7, 63, 112);
    height: 200px;
    padding: 37px;
    margin: 20px;
    color: aliceblue;
}
</style>
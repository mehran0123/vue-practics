<template>
    <div class="users">
        <h1>Products Component</h1>
        <h3 class="ProductStyle">Class And style Binding</h3>
        <h3 v-bind:style="{color:'green'}">Style Binding</h3>
        <h3 v-bind:class="{display:show}">Style Binding On show</h3>
    </div>
</template>

<script>
export default {
    name:'ProductsComponent',
    data(){
        return{
            show:true
        }
    }
    
}
</script>
<style scoped>
.users{
    background-color: rgb(91, 167, 235);
    height: 200px;
    width: 300px;
    padding: 37px;
    margin: 20px;
}
.ProductStyle{
 color: rgb(212, 211, 209);
}
.display{
color: crimson;
}
</style>

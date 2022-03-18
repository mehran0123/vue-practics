<template>
    <div>
        <h1>Home Component</h1>

        
        <p>My Name is {{ name }} and i'm {{ age }} old ,i completed my {{ edu }} in {{ year }}.</p>
        <button v-on:click="UpdateText">Change Information</button>
        <UserComponent />
        <ProductsComponent />
    </div>
</template>
<script>
import UserComponent from './UserComponent'
import ProductsComponent from './ProductsComponent'

export default {
    name:'HomeComponent',
    components:{
        UserComponent,
        ProductsComponent
    },data(){
       return {
            name:'mehran',
            age:23,
            edu:'BSCS (Hons)',
            year:2020,
       }
    },methods:{
            UpdateText(){
                this.name = 'Ali'
                this.age = 27
                this.edu = 'Master in Computer Science'
                this.age = 2015
            }
    }
}
</script>

<style  scoped>
   div{ background-color: #dde5ec;
    height: 600px;
    }

</style>
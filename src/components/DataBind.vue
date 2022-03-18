<template>
    <div>
        <h1 style="white-space:pre-line">{{ msg }}</h1>
        <textarea type="text" v-model="msg"></textarea>
    </div>
</template>

<script>
export default {
    name:'DataBind',
    data(){
        return {
            msg:'Hi'
        }
    }
}
</script>
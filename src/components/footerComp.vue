<template>

    <div>
        <footer id="foot">FlyByAir Copyrighted ©2024 {{ currentYear }}</footer>
    </div>

</template>
<script>
export default {
    name: 'footer',
    data(){
           return{
            currentYear:""
           };
    },
    mounted(){
            // thisgetData();
    },
    methods:{
            getData(){
                    let currentYear = new Date().getFullYear();
                    this.currentYear = currentYear.toString();
            }
    }

}
</script>
<style scoped>

#footer{
    color: rgb(255, 255, 255);
}
</style>
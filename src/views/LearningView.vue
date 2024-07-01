<template>
    <div class="learning">learning part</div>
    <!-- <div class="bg-gradient-to-t from-red-700 to-blue-700  text-[100px] pl-10">learning part</div> -->
    <div v-for="x,i in 4 " :key="i">
        <div class="bg-blue-500 w-fit px-5 py-5 rounded-[10px]">
            Box number {{ i }}
        </div>
    </div>

</template>

<script setup>

</script>

<style>
.learning{
    padding-left:20px;
    padding-right:20px;
    padding-top:20px;
    padding-bottom:20px;
    background-color: red;
    border-radius: 40px;
}
</style>
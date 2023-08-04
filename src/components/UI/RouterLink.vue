<script setup>
import { RouterLink } from 'vue-router';

defineProps({
    to:{
        type: String
    }
})

</script>

<template>
    <RouterLink :to="{name: to}" class="block md:inline-block rounded-md text-white bg-blue-700 hover:bg-blue-800 text-sm font-bold px-7 py-2 shadow-lg uppercase">
        <slot></slot>
    </RouterLink>
</template>



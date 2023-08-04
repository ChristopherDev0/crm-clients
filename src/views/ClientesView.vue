<script setup>
import RouterLinkVue from '../components/UI/RouterLink.vue';
import HeadingVue from '../components/UI/Heading.vue';

defineProps({
    titulo: {
        type: String
    }
})
</script>

<template>
    <div>
        <div class="flex justify-end">
            <RouterLinkVue to="agregar-cliente">
                <span>Agregar Cliente</span>
            </RouterLinkVue>
        </div>
        <HeadingVue>
            <span>{{ titulo }}</span>
        </HeadingVue>
    </div>
</template>

<script setup>
import { FormKit } from '@formkit/vue'
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
            <RouterLinkVue to="inicio">
                <span>Volver a casa</span>
            </RouterLinkVue>
        </div>
        <HeadingVue>
            <span>{{ titulo }}</span>
        </HeadingVue>

        <div class="mx-auto mt-10 bg-white shadow-lg rounded-lg">
            <div class="mx-auto md:w-1/2 py-20 px-6">
                <FormKit type="form">
                    <FormKit 
                        type="text" 
                        label="Nombre" 
                        placeholder="Nombre del cliente"
                        validation="required"
                        :validation-messages="{ required: 'El campo nombre es obligatorio'}"
                        >
                    </FormKit>
                    <FormKit 
                        type="text" 
                        label="Apellido" 
                        placeholder="Apellido del cliente"
                        validation="required"
                        :validation-messages="{ required: 'El campo apellido es obligatorio'}"
                        >
                    </FormKit>
                    <FormKit 
                        type="email" 
                        label="E-mail" 
                        placeholder="E-mail del cliente"
                        validation="required|email"
                        :validation-messages="{ required: 'El campo E-mail es obligatorio'}"
                        >
                    </FormKit>
                    <FormKit 
                        type="text" 
                        label="Telefono" 
                        placeholder="Telefono: xxx-xxx-xxxx"
                        validation="*matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
                        :validation-messages="{ matches: 'El campo Telefono es obligatorio'}"
                        >
                    </FormKit>
                </FormKit>
            </div>
        </div>
    </div>
</template>

<style>
    .formkit-wrapper {
        max-width: 100%;
    }
</style>
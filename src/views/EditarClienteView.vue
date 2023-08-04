<script setup>
import { onMounted, reactive } from 'vue';
import { FormKit } from '@formkit/vue'
import { useRouter, useRoute } from 'vue-router';
import RouterLinkVue from '../components/UI/RouterLink.vue';
import HeadingVue from '../components/UI/Heading.vue';
import ClienteService from '../services/ClienteService';

const router = useRouter()
const route = useRoute()

const {id} = route.params

const formData = reactive({})

onMounted(() => {
    ClienteService.obtenerCliente(id)
        .then(({data}) => {
            Object.assign(formData, data)
        })
        .catch(error => console.log(error))
})

defineProps({
    titulo: {
        type: String
    }
})

const handleSubmit = (data) => {
   ClienteService.actualizarCliente(id, data)
        .then(() => router.push({name: 'inicio'}))
        .catch(error => console.log(error))
}

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
                <FormKit :value="formData" @submit="handleSubmit" type="form" :actions="false" incomplete-message="No se puedo enviar, resisa los mensajes">
                    <FormKit 
                        type="text" 
                        label="Nombre"
                        name="nombre" 
                        placeholder="Nombre del cliente"
                        validation="required"
                        :validation-messages="{ required: 'El campo nombre es obligatorio'}"
                        v-model="formData.nombre"
                        >
                    </FormKit>
                    <FormKit 
                        type="text" 
                        label="Apellido" 
                        name="apellido"
                        placeholder="Apellido del cliente"
                        validation="required"
                        :validation-messages="{ required: 'El campo apellido es obligatorio'}"
                        v-model="formData.apellido"
                        >
                    </FormKit>
                    <FormKit 
                        type="email" 
                        label="E-mail"
                        name="email" 
                        placeholder="E-mail del cliente"
                        validation="required|email"
                        :validation-messages="{ required: 'El campo E-mail es obligatorio'}"
                        v-model="formData.email"
                        >
                    </FormKit>
                    <FormKit 
                        type="text" 
                        label="Telefono"
                        name="telefono" 
                        placeholder="Telefono: xxx-xxx-xxxx"
                        validation="*matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
                        :validation-messages="{ matches: 'El campo Telefono es obligatorio'}"
                        v-model="formData.telefono"
                        >
                    </FormKit>
                     <FormKit 
                        type="text" 
                        label="Empresa" 
                        name="empresa"
                        placeholder="Empresa del cliente"
                        v-model="formData.empresa"
                        >
                    </FormKit>
                    <FormKit 
                        type="text" 
                        label="Puesto"
                        name="puesto" 
                        placeholder="Puesto del cliente"
                        v-model="formData.puesto"
                        >
                    </FormKit>
                    <FormKit 
                        type="submit" 
                        label="Guardar cambios del cliente" 
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
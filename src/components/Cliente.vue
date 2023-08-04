<script setup>
import { computed } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps({ //creamos la variable props para poder utiliZARLA EN EL SCRIPT
    cliente: {
        type: Object
    }
})

defineEmits(['actualizar-estado', 'eliminar-cliente']) //no definimos varaiables ya que no lo ocuparemos en el script

const clienteNombre = computed(() => {
    return props.cliente.nombre + ' ' + props.cliente.apellido
})

const estadoCliente = computed(() => {
    return props.cliente.estado
})

</script>

<template>
    <tr>
        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-0">
            <p class="font-medium text-gray-900">{{ clienteNombre }}</p>
            <p class="text-gray-500">{{ cliente.email }}</p>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            <p class="text-gray-900 font-bold">{{ cliente.empresa }}</p>
            <p class="text-gray-600">{{ cliente.puesto }}</p>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-white">
            <button @click="$emit('actualizar-estado', {id: cliente.id, estado: cliente.estado })" class="inline-block rounded-full p-2 text-xs font-semibold leading-3" :class="[estadoCliente ? 'bg-green-400' : 'bg-red-400']">
                {{ estadoCliente ? 'Activo' : 'Inactivo' }}
            </button>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-900 ">
            <RouterLink :to="{name: 'editar-cliente', params:{ id: cliente.id}}" class="bg-blue-300 font-semibold p-2 rounded-md inline-block mr-2">Editar</RouterLink>
            <button @click="$emit('eliminar-cliente', cliente.id)" class="bg-red-300 font-semibold p-2 rounded-md inline-block">Eliminar</button>
        </td>
    </tr>
</template>


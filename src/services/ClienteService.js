import api from "../lib/axios";

export default {
    obtenerClientes() {
        return api.get('/clientes')
    },
    agregarCliente(data) {
        return api.post('/clientes', data)
    },
    obtenerCliente(id) {
        return api.get('/clientes/' + id)
    },
    actualizarCliente(id, data) {
        return api.patch('/clientes/' + id, data)
        //put actualiza todo y eliminar lo que no se pasa por el enpoint
        //patch actualza solo lo que se le pasa y mantiene la otra informacion
    },
    cambiarEstado(id, data) {
        return api.patch('/clientes/' + id, data)
    },
    eliminarCliente(id) {
        return api.delete('/clientes/' + id)
    }

}
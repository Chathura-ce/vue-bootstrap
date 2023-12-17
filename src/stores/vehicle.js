import {defineStore} from 'pinia'
import {useRouter} from 'vue-router'
import {reactive, ref} from 'vue'

export const useVehicle = defineStore('vehicle', () => {
    const vehicles = ref([])
    const router = useRouter()
    const errors = reactive({})
    const loading = ref()
    const form = reactive({
        plate_number: '',
        description: ''
    })

    function resetForm() {
        form.plate_number = ''
        form.description = ''
        errors.value = ''
    }

    function storeVehicle() {
        if (loading.value) return

        loading.value = true
        errors.value = {}

        window.axios
            .post('vehicles', form)
            .then(() => {
                router.push({name: 'vehicles.index'})
            })
            .catch((error) => {
                if (error.response.status === 422) {
                    errors.value = error.response.data.errors
                }
            })
            .finally(() => {
                loading.value = false
            })
    }

    function updateVehicle(vehicle) {
        if (loading.value) return

        loading.value = true
        errors.value = {}

        window.axios
            .put(`vehicles/${vehicle.id}`, form)
            .then(() => {
                router.push({name: 'vehicles.index'})
            })
            .catch((error) => {
                if (error.response.status === 422) {
                    errors.value = error.response.data.errors
                }
            })
            .finally(() => {
                loading.value = false
            })
    }

    function getVehicle(vehicle) {
        return window.axios
            .get(`vehicles/${vehicle.id}`)
            .then((response) => {
                form.plate_number = response.data.data.plate_number
                form.description = response.data.data.description

            })
    }

    function getVehicles() {
        return window.axios
            .get("vehicles")
            .then((response) => (vehicles.value = response.data.data))
    }

    function deleteVehicle(vehicle) {
        window.axios.delete(`vehicles/${vehicle.id}`).then(getVehicles)
    }

    return {errors, form, resetForm, loading, storeVehicle, vehicles, getVehicles, updateVehicle, getVehicle,deleteVehicle}
})

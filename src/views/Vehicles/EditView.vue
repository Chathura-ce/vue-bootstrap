<script setup>
import {watchEffect, onBeforeUnmount} from 'vue'

import {useVehicle} from '@/stores/vehicle'
import {useRoute} from "vue-router";

const store = useVehicle()
const route = useRoute()
onBeforeUnmount(store.resetForm)
const validationClass = (field) => {
  if (store.errors?.value?.[field]?.length > 0) {
    return 'is-invalid'
  }
  return ''
}

watchEffect(async () => {
  store.getVehicle({id: route.params.id});
})
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-6 mx-auto mt-3 my-auto">
        <div class="card shadow-lg">
          <div class="card-header bg-light">Edit Vehicle</div>
          <div class="card-body">
            <form @submit.prevent="store.updateVehicle({id:route.params.id})" novalidate>
              <div class="mb-3">
                <label for="plate_number" class="form-label"
                >License Plate<span class="text-danger">*</span></label
                >
                <input
                    v-model="store.form.plate_number"
                    type="text"
                    class="form-control plate"
                    :disabled="store.loading"
                    :class="validationClass('plate_number')"
                    id="plate_number"
                    name="plate_number"
                    aria-describedby="plate_numberHelp"
                />
                <ValidationError :errors="store.errors" field="plate_number"/>
              </div>
              <div class="mb-3">
                <label for="description" class="form-label"
                >Description<span class="text-danger">*</span></label
                >
                <input
                    v-model="store.form.description"
                    type="text"
                    class="form-control"
                    :disabled="store.loading"
                    :class="validationClass('description')"
                    id="description"
                    name="description"
                    placeholder="My Ferrari, Big truck, Rental"
                    aria-describedby="descriptionHelp"
                />
                <ValidationError :errors="store.errors" field="description"/>
              </div>
              <div class="d-grid gap-2">
                <button class="btn btn-outline-primary" type="submit" :disabled="store.loading">
                  <IconSpinner v-show="store.loading"/>
                  Save Vehicle
                </button>
                <RouterLink :to="{ name: 'vehicles.index' }" class="btn btn-outline-secondary">
                  Cancel
                </RouterLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

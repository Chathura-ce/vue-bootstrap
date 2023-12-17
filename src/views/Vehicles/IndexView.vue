<script setup>

import {useVehicle} from "@/stores/vehicle";
import {onMounted} from "vue";

const store = useVehicle();
onMounted(store.getVehicles);
</script>
<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-6 mx-auto mt-3 my-auto">
        <div class="card shadow-lg">
          <div class="card-header bg-light">My vehicles</div>
          <div class="card-body">
            <div class="d-grid">
              <RouterLink :to="{ name: 'vehicles.create' }" class="btn btn-outline-primary">
                Add vehicle
              </RouterLink>
            </div>

            <div class="border-bottom border-1">&nbsp;</div>

            <div>
              <ul class="list-group">
                <li v-for="vehicle in store.vehicles" :key="vehicle.id" class="list-group-item">
                  <div class="row">
                    <div class="col-sm-2">{{vehicle.plate_number}}</div>
                    <div class="col-sm-7">{{vehicle.description}}</div>
                    <div class="col-sm-3">
                      <button class="btn btn-outline-secondary btn-sm"><i class="bi bi-pencil" /></button>
                      <button class="btn btn-outline-danger btn-sm ms-2"><i class="bi bi-trash"></i></button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

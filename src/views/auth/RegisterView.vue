<script setup>
import { useRegister } from '@/stores/register'
import { onBeforeUnmount } from 'vue'


const store = useRegister()
onBeforeUnmount(store.resetForm)

</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-6 mx-auto mt-3 my-auto">
        <div class="card shadow-lg">
          <div class="card-header bg-light">Register</div>
          <div class="card-body">
            <form @submit.prevent="store.handleSubmit()" novalidate>
              <div class="mb-3">
                <label for="name" class="form-label">Name<span class="text-danger">*</span></label>
                <input
                  v-model="store.form.name"
                  type="text"
                  class="form-control"
                  :class="{ 'is-invalid': store.errors?.value?.name?.length > 0 }"
                  id="name"
                  name="name"
                  aria-describedby="emailHelp"
                />
                <ValidationError :errors="store.errors" field="name" />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label"
                  >Email address<span class="text-danger">*</span></label
                >
                <input
                  v-model="store.form.email"
                  type="email"
                  class="form-control"
                  :class="{ 'is-invalid': store.errors?.value?.email?.length > 0 }"
                  id="email"
                  name="email"
                  aria-describedby="emailHelp"
                />
                <ValidationError :errors="store.errors" field="email" />
              </div>
              <div class="mb-3">
                <label for="password" class="form-label"
                  >Password<span class="text-danger">*</span></label
                >
                <input
                  v-model="store.form.password"
                  type="password"
                  class="form-control"
                  :class="{ 'is-invalid': store.errors?.value?.password?.length > 0 }"
                  id="password"
                  name="password"
                />
                <ValidationError :errors="store.errors" field="password" />
              </div>
              <div class="mb-3">
                <label for="password_confirmation" class="form-label"
                  >Confirm Password<span class="text-danger">*</span></label
                >
                <input
                  v-model="store.form.password_confirmation"
                  type="password"
                  class="form-control"
                  id="password_confirmation"
                  name="password_confirmation"
                />
              </div>
              <div class="d-grid gap-2">
                <button class="btn btn-outline-primary" type="submit" :disabled="store.loading">
                  <IconSpinner v-show="store.loading" />
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

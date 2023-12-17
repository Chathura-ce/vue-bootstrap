<script setup>
import { useProfile } from '@/stores/profile'
import { onBeforeUnmount, onMounted } from 'vue'
import IconSpinner from '@/components/IconSpinner.vue'
const store = useProfile()
onMounted(store.fetchProfile)
onBeforeUnmount(store.resetForm)
const validationClass = (field) => {
  if (store.errors?.value?.[field]?.length > 0) {
    return 'is-invalid'
  }
  return ''
}
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-6 mx-auto mt-3 my-auto">
        <div class="card shadow-lg">
          <div class="card-header bg-light">Edit Profile</div>
          <div class="card-body">
            <div class="alert alert-success" v-show="store.status">{{ store.status }}</div>
            <form @submit.prevent="store.updateProfile()" novalidate>
              <div class="mb-3">
                <label for="email" class="form-label">Name<span class="text-danger">*</span></label>
                <input
                  v-model="store.form.name"
                  type="email"
                  class="form-control"
                  :disabled="store.loading"
                  :class="validationClass('name')"
                  id="name"
                  name="name"
                  aria-describedby="nameHelp"
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
                  :disabled="store.loading"
                  :class="validationClass('email')"
                  id="email"
                  name="email"
                  aria-describedby="emailHelp"
                />
                <ValidationError :errors="store.errors" field="email" />
              </div>
              <div class="d-grid gap-2">
                <button class="btn btn-outline-primary" type="submit" :disabled="store.loading">
                  <IconSpinner v-show="store.loading" />Update profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

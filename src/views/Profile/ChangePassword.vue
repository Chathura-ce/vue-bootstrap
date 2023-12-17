<script setup>
import { useChangePassword } from '@/stores/changePassword'
import { onBeforeUnmount } from 'vue'
import IconSpiner from '@/components/IconSpiner.vue'
const store = useChangePassword()
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
          <div class="card-header bg-light">Change Password</div>
          <div class="card-body">
            <div class="alert alert-success" v-show="store.status">{{ store.status }}</div>
            <form @submit.prevent="store.updatePassword()" novalidate>
              <div class="mb-3">
                <label for="email" class="form-label"
                  >Current Password<span class="text-danger">*</span></label
                >
                <input
                  v-model="store.form.current_password"
                  type="password"
                  class="form-control"
                  :disabled="store.loading"
                  :class="validationClass('current_password')"
                  id="current_password"
                  name="current_password"
                  aria-describedby="current_passwordHelp"
                />
                <ValidationError :errors="store.errors" field="current_password" />
              </div>
              <div class="mb-3">
                <label for="password" class="form-label"
                  >New Password<span class="text-danger">*</span></label
                >
                <input
                  v-model="store.form.password"
                  type="password"
                  class="form-control"
                  :disabled="store.loading"
                  :class="validationClass('password')"
                  id="password"
                  name="password"
                  aria-describedby="passwordHelp"
                />
                <ValidationError :errors="store.errors" field="password" />
              </div>
              <div class="mb-3">
                <label for="password_confirmation" class="form-label"
                  >Password Confirmation<span class="text-danger">*</span></label
                >
                <input
                  v-model="store.form.password_confirmation"
                  type="password"
                  class="form-control"
                  :disabled="store.loading"
                  :class="validationClass('password_confirmation')"
                  id="password_confirmation"
                  name="password_confirmation"
                  aria-describedby="password_confirmationHelp"
                />
                <ValidationError :errors="store.errors" field="password_confirmation" />
              </div>
              <div class="d-grid gap-2">
                <button class="btn btn-outline-primary" type="submit" :disabled="store.loading">
                  <IconSpiner v-show="store.loading" />Update Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// import {defineProps } from "vue"
const props = defineProps(['errors',"field"])

</script>


<template>
  <div v-if="props?.errors?.value?.[props.field]?.length" class="invalid-feedback">
    <ul>
      <li v-for="message in props.errors.value[props.field]" :key="message">{{message}}</li>
    </ul>
  </div>
</template>


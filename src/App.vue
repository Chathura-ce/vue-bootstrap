<script setup>
import {RouterLink, RouterView} from 'vue-router'
import {useAuth} from "@/stores/auth";
const auth = useAuth();
</script>

<template>
  <div class="">
      <header>
        <nav class="navbar navbar-expand-lg bg-light-blue" style="">
          <div class="container-fluid">
            <a class="navbar-brand" href="/">Car Park</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item" v-if="auth.check">
                  <RouterLink class="nav-link" :to="{name:'vehicles.index'}">Vehicles</RouterLink>
                </li>
                <li class="nav-item" v-else>
                  <RouterLink class="nav-link" :to="{name:'home'}">Home</RouterLink>
                </li>
              </ul>
              <ul class="navbar-nav ml-auto" v-if="auth.check">
                <li class="nav-item">
                  <button @click="auth.logout" class="nav-link">Logout</button>
                </li>
              </ul>
              <ul class="navbar-nav ml-auto" v-else>
                <li class="nav-item">
                  <RouterLink class="nav-link" :to="{name:'login'}">Login</RouterLink>
                </li>
                <li class="nav-item">
                  <RouterLink class="nav-link" :to="{name:'register'}">Register</RouterLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <RouterView/>
      </main>
    </div>

</template>


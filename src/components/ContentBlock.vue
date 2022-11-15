<template>
  <v-container>
    <v-row align="center" justify="center" class="ma-4">
      <v-progress-circular v-if="loading" :value="40"></v-progress-circular>
      <v-col cols="12">
        <v-img :src="logo" class="my-3" contain height="200" />
      </v-col>

      <Filters />

      <UsersList :users="users" />
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useFilter } from '@/composables/useFilter'
import Filters from './Filters.vue'
import UsersList from './UsersList.vue'
import logo from '@/assets/logo.svg'

const { users, loading } = useFilter()
</script>

<script setup lang="ts">
import { useFilters } from '@/stores/filter'
import { storeToRefs } from 'pinia'

const store = useFilters()
const { countryFilter, countryFilters, scoreFilter, scoreFilters } =
  storeToRefs(store)
</script>

<template>
  <v-col cols="12" md="4">
    <v-select
      v-model="countryFilter"
      :items="countryFilters"
      clearable
      label="Filter by country"
    ></v-select>

    <v-select
      v-model="scoreFilter"
      :items="scoreFilters"
      clearable
      label="Filter by score"
    ></v-select>
  </v-col>
</template>

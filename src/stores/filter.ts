import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

type scoreType = '> 20' | '< 10' | '' | null
type countryType = 'russia' | 'usa' | '' | null

export const useFilters = defineStore('filters', () => {
  const scoreFilter = ref<scoreType>('')
  const countryFilter = ref<countryType>('')

  const scoreFilters = ref<scoreType[]>(['> 20', '< 10'])
  const countryFilters = ref<countryType[]>(['russia', 'usa'])

  return {
    scoreFilter,
    countryFilter,
    scoreFilters,
    countryFilters,
  }
})

import { loadData } from '@/service'
import { useFilters } from '@/stores/filter'
import { helper } from '@/utils/helpers'
import type { IUser } from '@/utils/types'
import { storeToRefs } from 'pinia'
import { computed, onMounted, ref, watch } from 'vue'

export const useFilter = () => {
  const store = useFilters()
  const { countryFilter, scoreFilter } = storeToRefs(store)

  const userList = ref<IUser[]>([])
  const loading = ref<boolean>(false)

  onMounted(async () => {
    loading.value = true
    userList.value = await loadData()
    loading.value = false
  })

  const users = computed(() => {
    if (!countryFilter.value && !scoreFilter.value) return userList.value

    return userList.value?.filter((user) => {
      if (countryFilter.value && scoreFilter.value) {
        return (
          user?.country?.toLowerCase() === countryFilter.value &&
          helper(scoreFilter.value, user?.score!)
        )
      }
      return countryFilter.value
        ? user?.country?.toLowerCase() === countryFilter.value
        : user && scoreFilter.value
        ? helper(scoreFilter.value, user?.score!)
        : user
    })
  })

  watch(users, () => {
    loading.value = true
    loading.value = false
  })

  return {
    users,
    loading,
  }
}

<script setup lang="ts">
import type { IUser } from '@/utils/types'
import { ref } from 'vue'

interface IProps {
  user: IUser
  index: number
}
const props = defineProps<IProps>()
const isAdresShow = ref<boolean>(false)

const showAdres = () => {
  isAdresShow.value = !isAdresShow.value
}
</script>

<template>
  <v-divider :inset="true"></v-divider>

  <v-list-item>
    <v-list-item-title v-if="isAdresShow">
      Address: {{ user.address }}
    </v-list-item-title>

    <v-avatar @click="showAdres">
      <v-img :src="user?.avatar"></v-img>
    </v-avatar>
    <v-list-item-title v-html="user?.title"></v-list-item-title>
    <v-list-item-subtitle v-html="user.subtitle"></v-list-item-subtitle>
  </v-list-item>
</template>

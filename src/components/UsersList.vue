<script setup lang="ts">
import type { IUser } from '@/utils/types'
import UserCard from './UserCard.vue'

interface IProps {
  users: IUser[]
}
const props = defineProps<IProps>()
</script>

<template>
  <v-col cols="12" md="4">
    <v-card max-width="450" class="mx-auto">
      <v-list three-line>
        <template v-for="(user, index) in users">
          <UserCard :user="user" :index="index" />
        </template>
      </v-list>
    </v-card>
  </v-col>
</template>

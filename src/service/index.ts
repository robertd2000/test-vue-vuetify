import type { IDivider, IUser } from '@/utils/types'
import data from '../data/data.json'

export const loadData = async (): Promise<IUser[]> => {
  return data.userList
}

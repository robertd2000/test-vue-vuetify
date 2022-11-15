export const helper = (value: string, score: number): boolean => {
  if (!value) return true
  if (value[0] === '<') return score < +value.slice(1)
  return score >= +value.slice(1)
}

export function formatPrice(value: string) {
  const price = +value - 1

  return Math.abs(price)
}

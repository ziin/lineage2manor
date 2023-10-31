import { crops } from "@/data"

type Crops = typeof crops

function filterCropsByLevel(crops: Crops, level: number) {
  return crops.filter(
    (crop) => crop.level.min >= level - 10 && crop.level.max <= level + 10
  )
}

function filterCropsByTown(crops: Crops, town: string) {
  return crops.filter((crop) => crop.town.includes(town))
}

export function filterCrops(
  crops: Crops,
  filters: { level?: number; town?: string }
) {
  const { level, town } = filters
  let filtered = crops

  if (level) {
    filtered = filterCropsByLevel(filtered, level)
  }
  if (town) {
    filtered = filterCropsByTown(filtered, town)
  }
  return filtered
}

export function calculatePrice(
  quantity: number,
  price: number,
  materialPrice: number
) {
  return Math.floor((quantity * price) / materialPrice)
}

export function formatName(name: string) {
  return name.trim().toLowerCase().split(" ").join("-")
}

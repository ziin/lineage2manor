import cropsJson from "./crops.json"
import materialsJson from "./materials.json"

// Extract all towns
export const towns = Array.from(
  new Set(cropsJson.map((crop) => crop.town).flat())
)

export const materials: {
  [key: string]: {
    name: string
    price: number
    value: string
    crops: typeof cropsJson
  }
} = materialsJson.reduce(
  (obj, m) => ({
    ...obj,
    [m.name]: {
      name: m.name,
      price: m.price,
      value: m.name.split(" ").join("-").toLocaleLowerCase(),
      crops: cropsJson.filter(
        (c) => c.reward.first === m.name || c.reward.second === m.name
      ),
    },
  }),
  {}
)

export const crops = cropsJson

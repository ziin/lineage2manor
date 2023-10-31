"use client"
import { crops, materials } from "@/data"
import { createContext, useContext, useState } from "react"
import { calculatePrice, filterCrops } from "./utils"

type ManorCalculatorContextType = {
  level: number
  quantity: number
  price: number
  town: string
  crop: string
  material: string
  result: number
  townsActive: string[]
  filteredCrops: typeof crops
  cropSelected: (typeof crops)[number]
  materialSelected: (typeof materials)[string]
  handleLevelChange: (level: number) => void
  handleTownChange: (town: string) => void
  handleCropChange: (crop: string) => void
  handleMaterialChange: (material: string, selectLowestCrop?: boolean) => void
  setQuantity: React.Dispatch<React.SetStateAction<number>>
  setPrice: React.Dispatch<React.SetStateAction<number>>
}

export const ManorCalculatorContext =
  createContext<ManorCalculatorContextType | null>(null)

const initialLevel = 21
const initial = filterCrops(crops, { level: initialLevel })

export function ManorCalculatorProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [level, setLevel] = useState(initialLevel)
  const [quantity, setQuantity] = useState(100)
  const [price, setPrice] = useState(500)
  const [town, setTown] = useState("")
  const [crop, setCrop] = useState(initial[0].name)
  const [material, setMaterial] = useState(initial[0].reward.first)

  const filteredCrops = filterCrops(crops, { level, town })
  const townsActive = Array.from(
    new Set(
      filterCrops(crops, { level })
        .map((c) => c.town)
        .flat()
    )
  )
  const cropSelected = filteredCrops.find((c) => c.name === crop)!
  const materialSelected = materials[material]
  const result = calculatePrice(quantity, price, materialSelected.price)

  function handleLevelChange(level: number) {
    const filtered = filterCrops(crops, { level })
    if (!filtered.length) return
    setLevel(level)
    setTown("")
    setCrop(filtered[0].name)
    setMaterial(filtered[0].reward.first)
  }

  function handleTownChange(townName: string) {
    let newTown = townName === town ? "" : townName
    const filtered = filterCrops(crops, { level, town: newTown })
    if (!filtered.length) return
    setTown(newTown)
    setCrop(filtered[0].name)
    setMaterial(filtered[0].reward.first)
  }

  function handleCropChange(cropName: string) {
    const cropSelected = filteredCrops.find((c) => c.name === cropName)
    if (cropSelected) {
      setCrop(cropName)
      setMaterial(cropSelected.reward.first)
    }
  }

  function handleMaterialChange(
    materialName: string,
    selectLowestCrop?: boolean
  ) {
    if (selectLowestCrop) {
      const lowestCrop = materials[materialName].crops.reduce((a, b) =>
        a.level.min < b.level.min ? a : b
      )
      setMaterial(materialName)
      setCrop(lowestCrop.name)
      setLevel(lowestCrop.level.min)
      setTown("")
    } else {
      setMaterial(materialName)
    }
  }

  const value = {
    level,
    quantity,
    price,
    town,
    crop,
    material,
    result,
    townsActive,
    filteredCrops,
    cropSelected,
    materialSelected,
    handleLevelChange,
    handleTownChange,
    handleCropChange,
    setQuantity,
    setPrice,
    handleMaterialChange,
  }

  return (
    <ManorCalculatorContext.Provider value={value}>
      {children}
    </ManorCalculatorContext.Provider>
  )
}

export function useManorCalculator() {
  const context = useContext(ManorCalculatorContext)
  if (!context) {
    throw new Error(
      "useManorCalculator must be used within a ManorCalculatorProvider"
    )
  }
  return context
}

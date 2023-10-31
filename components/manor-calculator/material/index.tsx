"use client"

import { QuantityPrice } from "../quantity-price"
import { Result } from "../result"
import { Section } from "../section"
import { MaterialCards } from "./material-cards"
import { MaterialSearch } from "./material-search"

export function ManorCalculatorByMaterial() {
  return (
    <div className="grid gap-4 pt-4 sm:grid-cols-2">
      {/* Search Material */}
      <Section className="flex flex-col items-center gap-2">
        <MaterialSearch />
      </Section>

      {/* Material Cards */}
      <Section className="grid grid-cols-2 gap-2 sm:gap-4" label="Crops">
        <MaterialCards />
      </Section>

      {/* Quantity and Price */}
      <Section className="grid grid-cols-2 gap-2 sm:gap-4">
        <QuantityPrice />
      </Section>

      {/* Result */}
      <Section label="Total">
        <Result />
      </Section>
    </div>
  )
}

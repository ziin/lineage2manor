"use client"

import { QuantityPrice } from "../quantity-price"
import { Result } from "../result"
import { Section } from "../section"
import { CropFilter } from "./crop-filter"
import { LevelFilter } from "./level-filter"
import { MaterialFilter } from "./material-filter"
import { RegionFilter } from "./region-filter"

export function ManorCalculatorByLevel() {
  return (
    <div className="grid gap-4 pt-4 sm:grid-cols-2">
      {/* Level Filter */}
      <Section>
        <LevelFilter />
      </Section>

      {/* Region */}
      <Section className="flex flex-col items-center gap-2">
        <RegionFilter />
      </Section>

      {/* Crops */}
      <Section label="Crops" className="sm:col-auto">
        <CropFilter />
      </Section>

      {/* Material */}
      <Section label="Reward" className="sm:col-auto">
        <MaterialFilter />
      </Section>

      {/* Price and Quantity Inputs */}
      <Section className="grid grid-cols-2 gap-4">
        <QuantityPrice />
      </Section>

      {/* Result */}
      <Section label="Total">
        <Result />
      </Section>
    </div>
  )
}

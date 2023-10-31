import { InputNumber } from "@/components/input-number"
import { useManorCalculator } from "./useManorCalculator"

export function QuantityPrice() {
  const { quantity, setQuantity, price, setPrice } = useManorCalculator()
  return (
    <>
      <div className="flex flex-col gap-1.5">
        <InputNumber
          label="Quantity"
          id="quantity"
          value={quantity}
          onChange={(e) =>
            e.target.validity.valid && setQuantity(Number(e.target.value))
          }
        />
      </div>
      <div className="grid items-center gap-1.5">
        <InputNumber
          label="Price"
          id="price"
          value={price}
          onChange={(e) =>
            e.target.validity.valid && setPrice(Number(e.target.value))
          }
        />
      </div>
    </>
  )
}

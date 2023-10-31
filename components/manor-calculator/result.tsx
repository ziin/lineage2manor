import Image from "next/image"
import { useManorCalculator } from "./useManorCalculator"
import { formatName } from "./utils"

export function Result() {
  const { material, quantity } = useManorCalculator()
  return (
    <div className="relative z-0 flex items-center gap-2">
      <Image
        src={`/materials/${formatName(material)}.png`}
        alt=""
        width={16}
        height={16}
        priority
        className="absolute left-2 -z-10 rounded-full blur-md"
      />
      <p className="text-lg">
        <span className="font-mono">{quantity}</span> {material}
      </p>
      <Image
        src={`/materials/${formatName(material)}.png`}
        alt=""
        width={24}
        height={24}
        priority
        className="rounded-sm"
      />
    </div>
  )
}

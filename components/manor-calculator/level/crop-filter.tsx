import { Label } from "@/components/ui/label"
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group-with-children"
import { crops } from "@/data"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { useManorCalculator } from "../useManorCalculator"
import { formatName } from "../utils"

export function CropFilter() {
  const { crop, handleCropChange, filteredCrops } = useManorCalculator()
  return (
    <RadioGroup
      className="flex flex-col flex-wrap gap-2"
      value={crop}
      onValueChange={(crop) => handleCropChange(crop)}
    >
      {filteredCrops.map((c) => (
        <CropItem key={c.name} isSelected={c.name === crop} {...c} />
      ))}
    </RadioGroup>
  )
}

type CropItemProps = (typeof crops)[number] & {
  isSelected?: boolean
}
function CropItem({ name, level, reward, isSelected }: CropItemProps) {
  return (
    <RadioGroupItem
      value={name}
      id={name}
      className={cn(
        "flex h-8 w-full items-center justify-between gap-2",
        isSelected &&
          "border border-input bg-accent outline-none ring-2 ring-ring ring-offset-1 ring-offset-background"
      )}
    >
      <div className="flex items-center gap-2">
        <Image
          src={`/crops/${formatName(name)}.png`}
          alt=""
          width={32}
          height={32}
          priority
        />
        <div className="flex flex-col leading-3 text-muted-foreground">
          <Label htmlFor={name} className="text-foreground">
            {name}
          </Label>
          <span className="text-start font-mono text-[11px]">
            {level.min}-{level.max}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-1 px-1 opacity-40">
        {Object.values(reward).map((r) => (
          <Image
            key={r}
            src={`/materials/${formatName(r)}.png`}
            alt=""
            width={24}
            height={24}
            priority
            className="rounded-sm"
          />
        ))}
      </div>
    </RadioGroupItem>
  )
}

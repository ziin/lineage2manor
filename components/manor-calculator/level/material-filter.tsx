import { Label } from "@/components/ui/label"
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group-with-children"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { useManorCalculator } from "../useManorCalculator"
import { formatName } from "../utils"

export function MaterialFilter() {
  const { material, cropSelected, handleMaterialChange } = useManorCalculator()

  return (
    <RadioGroup
      className="flex flex-col flex-wrap gap-2"
      value={material}
      onValueChange={(material) => handleMaterialChange(material)}
    >
      {/* <div className="flex items-center space-x-2"> */}
      <RewardItem
        name={cropSelected.reward.first}
        isSelected={material === cropSelected.reward.first}
      />
      {/* </div> */}
      {/* <div className="flex items-center space-x-2"> */}
      <RewardItem
        name={cropSelected.reward.second}
        isSelected={material === cropSelected.reward.second}
      />
      {/* </div> */}
    </RadioGroup>
  )
}
type RewardItemProps = { name: string; isSelected?: boolean }

function RewardItem({ name, isSelected }: RewardItemProps) {
  return (
    <RadioGroupItem
      value={name}
      id={name}
      className={cn(
        "flex h-8 w-full items-center gap-2",
        isSelected &&
          "border border-input bg-accent opacity-100 outline-none ring-2 ring-ring ring-offset-1 ring-offset-background"
      )}
    >
      <Image
        src={`/materials/${formatName(name)}.png`}
        alt=""
        width={32}
        height={32}
        priority
      />
      <Label className="cursor-pointer" htmlFor={name}>
        {name}
      </Label>
    </RadioGroupItem>
  )
}

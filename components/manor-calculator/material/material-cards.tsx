import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import { useManorCalculator } from "../useManorCalculator"
import { formatName } from "../utils"

export function MaterialCards() {
  const { materialSelected } = useManorCalculator()

  return materialSelected.crops.map((crop, i) => {
    return (
      <Card
        key={i}
        className="z-0 col-span-2 overflow-hidden rounded-md bg-stone-900/40 sm:col-auto"
      >
        <CardHeader className="relative space-y-0 p-4">
          <CardTitle className="flex items-baseline gap-2">
            <Image
              src={`/crops/${formatName(crop.name)}.png`}
              alt=""
              width={64}
              height={64}
              priority
              className="absolute left-3 top-3 -z-10 rounded-sm opacity-20 blur-md"
            />
            <span className="whitespace-nowrap">{crop.name}</span>
            <Image
              src={`/crops/${formatName(crop.name)}.png`}
              alt=""
              width={24}
              height={24}
              priority
              className="-z-10 rounded-sm"
            />
          </CardTitle>
          <CardDescription className="font-mono shadow-sm">
            {crop.level.min}-{crop.level.max}
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex flex-wrap gap-1.5 p-3">
          {crop.town.map((town) => (
            <Badge
              key={town}
              variant="secondary"
              className="text-muted-foreground"
            >
              {town}
            </Badge>
          ))}
        </CardFooter>
      </Card>
    )
  })
}

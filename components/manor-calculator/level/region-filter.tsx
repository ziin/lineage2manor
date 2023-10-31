import { Label } from "@/components/ui/label"
import { Toggle } from "@/components/ui/toggle"
import { towns } from "@/data"
import { useManorCalculator } from "../useManorCalculator"

export function RegionFilter() {
  const { town, handleTownChange, townsActive } = useManorCalculator()

  return (
    <>
      <Label className="text-center text-sm text-muted-foreground">
        Regions
      </Label>
      <div className="flex flex-wrap justify-center gap-2 px-4 sm:px-16">
        {towns.map((t) => {
          const isActive = townsActive.includes(t)
          return (
            <Toggle
              key={t}
              size="sm"
              variant="outline"
              disabled={!isActive}
              pressed={t === town}
              onPressedChange={() => handleTownChange(t)}
            >
              {t}
            </Toggle>
          )
        })}
      </div>
    </>
  )
}

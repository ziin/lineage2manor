import { Label } from "../../ui/label"
import { Slider } from "../../ui/slider"
import { useManorCalculator } from "../useManorCalculator"

export function LevelFilter() {
  const { level, handleLevelChange } = useManorCalculator()
  return (
    <>
      {/* Level */}
      <div className="text-center">
        <Label id="level" className="text-sm text-muted-foreground">
          Player Level
        </Label>
        <h1 className="font-mono text-6xl font-extrabold">{level}</h1>
      </div>

      {/* Slider */}
      <div className="flex items-center gap-3 sm:px-8">
        <span className="text-lg text-muted-foreground">5</span>
        <Slider
          name="level"
          min={5}
          max={90}
          step={1}
          value={[level]}
          className="cursor-pointer"
          onValueChange={([level]) => handleLevelChange(level)}
        />
        <span className="text-lg text-muted-foreground">90</span>
      </div>
    </>
  )
}

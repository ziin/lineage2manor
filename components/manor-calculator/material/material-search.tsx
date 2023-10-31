import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { ScrollArea } from "@/components/ui/scroll-area"
import { materials } from "@/data"
import { cn } from "@/lib/utils"
import { Label } from "@radix-ui/react-label"
import { ChevronsUpDown } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { useManorCalculator } from "../useManorCalculator"
import { formatName } from "../utils"

export function MaterialSearch() {
  const [open, setOpen] = useState(false)
  const { materialSelected, handleMaterialChange } = useManorCalculator()

  function handleMaterialSelect(selected: string) {
    handleMaterialChange(selected, true)
    setOpen(false)
  }
  return (
    <>
      <Label
        htmlFor="material"
        className="text-center text-sm font-medium text-muted-foreground"
      >
        Material
      </Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            id="material"
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-72 justify-between px-3"
          >
            <div className="flex w-full items-center justify-start gap-2">
              <Image
                key={materialSelected.value}
                src={`/materials/${formatName(materialSelected.name)}.png`}
                alt=""
                width={24}
                height={24}
                className="rounded-sm"
              />
              {materialSelected.name}
            </div>
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-72 p-0" align="center">
          <Command>
            <CommandInput placeholder="Search..." />
            <CommandEmpty>No material found.</CommandEmpty>
            <CommandGroup>
              <ScrollArea className="h-48">
                {Object.keys(materials).map((m) => {
                  const value = materials[m].value
                  const isSelected = materialSelected.value === value
                  return (
                    <CommandItem
                      key={value}
                      onSelect={() => handleMaterialSelect(m)}
                      className={cn(
                        "group flex items-center gap-2 p-1 text-muted-foreground",
                        isSelected && "text-foreground"
                      )}
                    >
                      <Image
                        key={materialSelected.value}
                        src={`/materials/${formatName(m)}.png`}
                        alt=""
                        width={24}
                        height={24}
                        priority
                        className={cn(
                          "rounded-sm opacity-60 group-hover:opacity-100",
                          isSelected && "opacity-100"
                        )}
                      />
                      {m}
                    </CommandItem>
                  )
                })}
              </ScrollArea>
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </>
  )
}

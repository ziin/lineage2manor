import { cn } from "@/lib/utils"

type SectionType = React.HTMLAttributes<HTMLDivElement> & {
  label?: string
}

export function Section({ children, className, label, ...props }: SectionType) {
  return (
    <div
      className={cn(
        "col-span-2 select-none rounded-md bg-background",
        label && "relative pt-7",
        className
      )}
      {...props}
    >
      {label && (
        <span className="absolute -top-0 left-0 text-sm font-medium text-muted-foreground">
          {label}
        </span>
      )}
      {children}
    </div>
  )
}

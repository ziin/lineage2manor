import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import React from "react"

type InputNumberProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string
}

export function InputNumber({ label, id, ...props }: InputNumberProps) {
  return (
    <>
      {label && (
        <Label htmlFor={id} className="text-muted-foreground">
          {label}
        </Label>
      )}
      <Input
        className="font-mono text-base"
        pattern="[0-9]*"
        id={id}
        {...props}
      />
    </>
  )
}

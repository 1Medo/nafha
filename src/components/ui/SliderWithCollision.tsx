// components/ui/SliderWithCollision.tsx
"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"
import { cn } from "@/lib/utils"

const SliderWithCollision = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => {
  const trackingRef = React.useRef<'min' | 'max' | null>(null)
  const [internalValue, setInternalValue] = React.useState(props.value || [0, 100])

  return (
    <SliderPrimitive.Root
      ref={ref}
      {...props}
      value={internalValue}
      onValueChange={(values) => {
        let [minVal, maxVal] = values
        if (trackingRef.current === 'min') {
          if (minVal >= internalValue[1]) minVal = internalValue[1] - (props.step || 1)
          setInternalValue([minVal, internalValue[1]])
        } else if (trackingRef.current === 'max') {
          if (maxVal <= internalValue[0]) maxVal = internalValue[0] + (props.step || 1)
          setInternalValue([internalValue[0], maxVal])
        } else {
          setInternalValue(values)
        }

        // تحديث الـ value الخارجي لو في props
        if (props.onValueChange) props.onValueChange(internalValue)
      }}
      className={cn("relative flex w-full touch-none select-none items-center", className)}
    >
      <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-Background-bg-surface">
        <SliderPrimitive.Range className="absolute h-full bg-primary" />
      </SliderPrimitive.Track>

      <SliderPrimitive.Thumb
        className="block h-4 w-4 rounded-full border-2 border-Background-bg-tertiary bg-Brand-primary transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 cursor-pointer"
        onPointerDown={() => (trackingRef.current = 'min')}
        onPointerUp={() => (trackingRef.current = null)}
      />

      <SliderPrimitive.Thumb
        className="block h-4 w-4 rounded-full border-2 border-Background-bg-tertiary bg-Brand-primary transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 cursor-pointer"
        onPointerDown={() => (trackingRef.current = 'max')}
        onPointerUp={() => (trackingRef.current = null)}
      />
    </SliderPrimitive.Root>
  )
})

SliderWithCollision.displayName = SliderPrimitive.Root.displayName
export { SliderWithCollision }

import {
  type ComponentPropsWithoutRef,
  type CSSProperties,
  type FC,
} from "react"

import { cn } from "@/lib/utils"

export interface AnimatedShinyTextProps extends ComponentPropsWithoutRef < "span" > {
  shimmerWidth ? : number
  variant ? : "rainbow" | "aurora" | "neon"
}

const variantStyles = {
  rainbow: {
    base: "text-white dark:text-gray-100/90",
    shine: "bg-linear-to-r from-transparent via-gray-400 via-40% via-gray-600 via-60% via-gray-800 via-90% to-transparent dark:via-gray-400 dark:via-40% dark:via-gray-600 dark:via-60% dark:via-gray-800",
  },
  aurora: {
    base: "text-white dark:text-gray-100/90",
    shine: "bg-linear-to-r from-transparent via-gray-500 via-50% via-gray-700 via-70% to-transparent dark:via-gray-300 dark:via-60% dark:via-gray-500 dark:via-40% dark:via-gray-800",
  },
  neon: {
    base: "text-gray-100 dark:text-white",
    shine: "bg-linear-to-r from-transparent via-gray-800 via-50% via-gray-600 via-60% via-gray-400 via-85% to-transparent dark:via-gray-300 dark:via-60% dark:via-gray-600 dark:via-45% dark:via-gray-800",
  },
}

export const AnimatedShinyText: FC < AnimatedShinyTextProps > = ({
  children,
  className,
  shimmerWidth = 100,
  variant = "rainbow",
  ...props
}) => {
  const currentVariant = variantStyles[variant]
  
  return (
    <span
      style={
        {
          "--shiny-width": `${shimmerWidth}px`,
        } as CSSProperties
      }
      className={cn(
        "mx-auto max-w-md font-semibold",
        currentVariant.base,

        // Shine effect
        "animate-shiny-text bg-size-[var(--shiny-width)_100%] bg-clip-text bg-position-[0_0] bg-no-repeat [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite]",

        // Shine gradient
        currentVariant.shine,

        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
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
    base: "text-gray-800/90 dark:text-gray-100/90",
    shine: "bg-linear-to-r from-transparent via-purple-500 via-30% via-pink-500 via-50% via-yellow-500 via-70% to-transparent dark:via-cyan-400 dark:via-50% dark:via-fuchsia-500",
  },
  aurora: {
    base: "text-gray-800/85 dark:text-gray-100/85",
    shine: "bg-linear-to-r from-transparent via-emerald-400 via-40% via-teal-500 via-60% to-transparent dark:via-green-300 dark:via-50% dark:via-blue-400",
  },
  neon: {
    base: "text-gray-900 dark:text-white",
    shine: "bg-linear-to-r from-transparent via-cyan-500 via-30% via-fuchsia-500 via-50% via-cyan-500 via-70% to-transparent dark:via-lime-400 dark:via-50% dark:via-cyan-400",
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
        "mx-auto max-w-md font-semibold tracking-tight",
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
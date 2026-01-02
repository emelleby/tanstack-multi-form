import * as React from "react"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

export interface Step {
  id: string
  label: string
  description?: string
}

interface StepperProps {
  steps: Step[]
  currentStep: string
  onStepClick?: (stepId: string) => void
  className?: string
}

export function Stepper({ steps, currentStep, onStepClick, className }: StepperProps) {
  const currentIndex = steps.findIndex((step) => step.id === currentStep)
  const isCompleted = (index: number) => index < currentIndex
  const isCurrent = (index: number) => index === currentIndex

  return (
    <div className={cn("w-full", className)}>
      <div className="flex items-center justify-between">
        {steps.map((step, index) => {
          const completed = isCompleted(index)
          const current = isCurrent(index)
          const isLast = index === steps.length - 1

          return (
            <React.Fragment key={step.id}>
              <div className="flex flex-col items-center flex-1">
                <button
                  onClick={() => onStepClick?.(step.id)}
                  disabled={!completed && !current}
                  className={cn(
                    "relative flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-200",
                    completed
                      ? "bg-primary border-primary text-primary-foreground"
                      : current
                      ? "bg-background border-primary text-primary"
                      : "bg-background border-muted-foreground text-muted-foreground",
                    onStepClick && (completed || current)
                      ? "hover:border-primary cursor-pointer"
                      : "cursor-default"
                  )}
                >
                  {completed ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    <span className="text-sm font-medium">{index + 1}</span>
                  )}
                </button>
                <div className="mt-2 text-center">
                  <p
                    className={cn(
                      "text-sm font-medium",
                      current ? "text-foreground" : "text-muted-foreground"
                    )}
                  >
                    {step.label}
                  </p>
                  {step.description && (
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {step.description}
                    </p>
                  )}
                </div>
              </div>
              {!isLast && (
                <div
                  className={cn(
                    "flex-1 h-0.5 mx-4 transition-all duration-200",
                    completed ? "bg-primary" : "bg-muted"
                  )}
                />
              )}
            </React.Fragment>
          )
        })}
      </div>
    </div>
  )
}

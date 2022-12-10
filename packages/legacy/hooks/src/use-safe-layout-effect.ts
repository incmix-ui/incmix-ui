import { isBrowser } from "@incmix-ui/utils"
import { useEffect, useLayoutEffect } from "react"

export const useSafeLayoutEffect = isBrowser ? useLayoutEffect : useEffect

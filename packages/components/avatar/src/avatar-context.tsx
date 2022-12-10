import { createContext } from "@incmix-ui/react-context"
import { SystemStyleObject } from "@incmix-ui/system"

export const [AvatarStylesProvider, useAvatarStyles] = createContext<
  Record<string, SystemStyleObject>
>({
  name: `AvatarStylesContext`,
  hookName: `useAvatarStyles`,
  providerName: "<Avatar/>",
})

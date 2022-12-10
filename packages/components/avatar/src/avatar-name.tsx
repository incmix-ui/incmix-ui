import { incmix, HTMLincmixProps } from "@incmix-ui/system"
import { useAvatarStyles } from "./avatar-context"
import { AvatarOptions } from "./avatar-types"

export function initials(name: string) {
  const [firstName, lastName] = name.split(" ")
  return firstName && lastName
    ? `${firstName.charAt(0)}${lastName.charAt(0)}`
    : firstName.charAt(0)
}

interface AvatarNameProps
  extends HTMLincmixProps<"div">,
    Pick<AvatarOptions, "name" | "getInitials"> {}
/**
 * The avatar name container
 */

export function AvatarName(props: AvatarNameProps) {
  const { name, getInitials, ...rest } = props
  const styles = useAvatarStyles()

  return (
    <incmix.div role="img" aria-label={name} {...rest} __css={styles.label}>
      {name ? getInitials?.(name) : null}
    </incmix.div>
  )
}

AvatarName.displayName = "AvatarName"

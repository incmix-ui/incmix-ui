import { incmix, forwardRef, HTMLincmixProps } from "@incmix-ui/system"
import { cx } from "@incmix-ui/shared-utils"
import { useBreadcrumbStyles } from "./breadcrumb-context"

export interface BreadcrumbLinkProps extends HTMLincmixProps<"a"> {
  isCurrentPage?: boolean
}
/**
 * Breadcrumb link.
 *
 * It renders a `span` when it matches the current link. Otherwise,
 * it renders an anchor tag.
 */

export const BreadcrumbLink = forwardRef<BreadcrumbLinkProps, "a">(
  function BreadcrumbLink(props, ref) {
    const { isCurrentPage, as, className, href, ...rest } = props
    const styles = useBreadcrumbStyles()

    const sharedProps = {
      ref,
      as,
      className: cx("incmix-breadcrumb__link", className),
      ...rest,
    }

    if (isCurrentPage) {
      return (
        <incmix.span aria-current="page" __css={styles.link} {...sharedProps} />
      )
    }

    return <incmix.a __css={styles.link} href={href} {...sharedProps} />
  },
)
BreadcrumbLink.displayName = "BreadcrumbLink"

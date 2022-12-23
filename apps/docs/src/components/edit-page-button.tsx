import { incmix, Icon, Link, Stack } from '@incmix-ui/react'
import { MdEdit } from 'react-icons/md'
import { t } from 'utils/i18n'

const EditPageLink = ({ href }: { href?: string }) => {
  return (
    <Link href={href} isExternal>
      <Stack fontSize="sm" textAlign="right" display="inline-flex" direction="row" spacing={1} align="center" opacity={0.7}>
        <Icon as={MdEdit} mr="1" />
        <incmix.span>{t('component.edit-page-button.edit-this-page')}</incmix.span>
      </Stack>
    </Link>
  )
}

export default EditPageLink

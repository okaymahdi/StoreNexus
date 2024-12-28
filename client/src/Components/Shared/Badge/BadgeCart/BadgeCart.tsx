import { Tooltip } from '@mui/material'
import Badge, { BadgeProps } from '@mui/material/Badge'
import IconButton from '@mui/material/IconButton'
import { styled } from '@mui/material/styles'

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))

export const BadgeCart = ({
  children,
  title,
}: {
  children: React.ReactNode
  title: string
}) => {
  return (
    <Tooltip title={title} placement="bottom">
      <IconButton aria-label="cart">
        <StyledBadge badgeContent={0} color="secondary">
          {children}
        </StyledBadge>
      </IconButton>
    </Tooltip>
  )
}

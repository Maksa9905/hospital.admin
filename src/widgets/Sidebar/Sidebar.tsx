import { Drawer, List, Stack, Typography } from '@mui/material'
import { StyledListItem, StyledTitle } from './StyledSidebar'
import { useMemo } from 'react'
import { routes } from '#/shared/lib'
import { useNavigate } from 'react-router'

const Sidebar = () => {
  const navigate = useNavigate()

  const sidebarConfig = useMemo(
    () => [
      { label: 'Список пациентов', href: routes.patients },
      { label: 'Добавить пациента', href: routes.patientById('new') },
      { label: 'Статистика', href: routes.statistics },
    ],
    [],
  )

  return (
    <Drawer
      variant="permanent"
      open
    >
      <Stack width="300px">
        <StyledTitle
          color="primary"
          variant="h6"
        >
          Hospital Admin
        </StyledTitle>
        <List>
          {sidebarConfig.map((item) => (
            <StyledListItem
              key={item.href}
              onClick={() => navigate(item.href)}
            >
              <Typography>{item.label}</Typography>
            </StyledListItem>
          ))}
        </List>
      </Stack>
    </Drawer>
  )
}

export default Sidebar

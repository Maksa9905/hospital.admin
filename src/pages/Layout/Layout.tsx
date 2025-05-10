import Sidebar from '#/widgets/Sidebar'
import { Outlet } from 'react-router'
import { StyledLayoutContainer, StyledOutletContainer } from './StyledLayout'

const Layout = () => {
  return (
    <StyledLayoutContainer>
      <Sidebar />
      <StyledOutletContainer>
        <Outlet />
      </StyledOutletContainer>
    </StyledLayoutContainer>
  )
}

export default Layout

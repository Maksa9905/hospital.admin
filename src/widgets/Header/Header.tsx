import { StyledContainer, StyledTitle } from './StyledHeader'

type HeaderProps = {
  title: string
}

const Header = ({ title }: HeaderProps) => {
  return (
    <StyledContainer>
      <StyledTitle>{title}</StyledTitle>
    </StyledContainer>
  )
}

export default Header

import { Link } from 'remix'

import { Anchor, ButtonToggleTheme, Content, Logo } from '~/components'
import { styled } from '~/stitches'

const HeaderContainer = styled('header', {
  zIndex: '$sticky',
  position: 'fixed',
  backgroundColor: '$background1',
  borderBottom: '1px solid $background6',
  top: '0',
  left: '0',
  width: '100%',
  padding: '0.5rem 0',
  '@tablet': { padding: '1rem 0' },
})

const LogoNavigation = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

/**
 * Header
 */
export const Header = () => (
  <HeaderContainer>
    <Content>
      <LogoNavigation>
        <Link to="/" title="Kontenbase">
          <Logo />
        </Link>
        <Navigation />
      </LogoNavigation>
    </Content>
  </HeaderContainer>
)

const NavigationContainer = styled('nav', {})

const NavigationList = styled('ul', {
  display: 'flex',
  listStyleType: 'none',
  alignItems: 'center',
  padding: '0',
  margin: '0',
  fontWeight: 'bold',
  fontSize: '$3',
  gap: '0.1rem',
  '@tablet': { gap: '0.5rem' },
  '@desktop': { gap: '0.75rem' },
})

const NavigationItem = styled('li', {
  display: 'flex',
  alignItems: 'center',
  variants: {
    visible: {
      tablet: {
        display: 'none',
        '@tablet': {
          display: 'flex',
        },
      },
    },
  },
})

const navigationItemChildStyles = {
  padding: '0.5rem',
  borderRadius: '$2',
  color: '$brand9',
  px: '$2',
  py: '$1',
  '@tablet': { px: '$2', py: '$1' },
  '@desktop': { px: '$3', py: '$2' },
  '&:hover': {
    backgroundColor: '$brand3',
  },
}

const NavigationLink = styled(Link, {
  ...navigationItemChildStyles,
})

const NavigationAnchor = styled(Anchor, {
  ...navigationItemChildStyles,
})

export const Navigation = () => (
  <NavigationContainer aria-label="Main navigation">
    <NavigationList>
      <NavigationItem>
        <ButtonToggleTheme />
      </NavigationItem>
      <NavigationItem visible="tablet">
        <NavigationLink to="/">Home</NavigationLink>
      </NavigationItem>
      <NavigationItem>
        <NavigationLink to="/pricing">Pricing</NavigationLink>
      </NavigationItem>
      <NavigationItem visible="tablet">
        <NavigationLink to="/blog">Blog</NavigationLink>
      </NavigationItem>
      <NavigationItem>
        <NavigationAnchor href="https://a.kontenbase.com/docs">
          Docs
        </NavigationAnchor>
      </NavigationItem>
      <NavigationItem>
        <NavigationAnchor href="https://a.kontenbase.com/jobs">
          Jobs
        </NavigationAnchor>
      </NavigationItem>
      {/* <NavigationItem>
          <AnchorButton variant="brand" href="https://app.kontenbase.com/login">
            Login
          </AnchorButton>
        </NavigationItem> */}
    </NavigationList>
  </NavigationContainer>
)

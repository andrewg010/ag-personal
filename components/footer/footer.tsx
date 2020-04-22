import styled from 'styled-components'
import SocialIcons from '~/components/socialIcons'

const FooterContainer = styled.div<Props>`
  text-align: center;
  padding: 2rem 0rem;
  margin: 0px 0.5rem;
  font-size: 0.8rem;
  align-items: center;
  justify-content: space-between;
  @media (min-width: ${props => props.theme.breakpoints.mdMin}) {
    display: ${props => props.central ? 'block' : 'flex'};
    padding-bottom: ${props => props.central ? '2rem' : '0rem'};
  }
  span {
    display: inline-block;
    max-width: 100px;
  }
`

interface Props {
  central?: boolean
}

const Footer: React.FC<Props> = ({ central }) => (
  <FooterContainer central={central}>
    <p>© 2020 Andrew Griffiths</p>
    <span><SocialIcons /></span>
  </FooterContainer>
)

export default Footer

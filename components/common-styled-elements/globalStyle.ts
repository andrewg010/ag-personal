import { createGlobalStyle } from 'styled-components'
import assetPrefix from '~/config/assetPrefix'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Rockwell, Arial';
      src: url(${`${assetPrefix}/fonts/Rockwell.woff`});
      src: url(${`${assetPrefix}/fonts/Rockwell.woff2`});
      src: url(${`${assetPrefix}/fonts/Rockwell.ttf`});
  }
  html {
    font-family: ${props => props.theme.fontFamily};
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    color: ${props => props.theme.colors.text};
    height: 100%;
  }
  body {
    width: 100%;
    margin: 0;
    padding: 0;
    height: 100%;
  }
  img {
    max-width: 100%;
  }
  a {
    text-decoration: none;
    color: ${props => props.theme.links.color};
    &:hover {
      color: ${props => props.theme.links.hoverColor};
    }
    cursor: pointer;
  }
`

export default GlobalStyle

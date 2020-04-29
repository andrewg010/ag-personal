import config from '~/config'

const { domainSettings } = config

const defaults = {
  title: 'Andrew Griffiths - Web Developer, Software Engineer',
  description: 'Andrew Griffiths, web developer and software engineer in kent, UK. Personal website all about me.',
  url: `${domainSettings.scheme}://${domainSettings.scheme}`,
  img: 'img/og.png',
  robots: 'index, follow'
}

export default defaults
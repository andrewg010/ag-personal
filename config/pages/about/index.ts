import { PageSettings } from '~/@types'
import getDomain from '~/config/pages/helpers/getDomain'
import basics from '~/config/pages/about/basics'
import skills from '~/config/pages/about/skills'
import work from '~/config/pages/about/work'
import interests from '~/config/pages/about/interests'
import assetPrefix from '~/config/assetPrefix'

const settings: PageSettings = {
  props: {
    page: 'about',
    metaUrl: `${getDomain()}/about.html`,
    titleText: 'About Me',
    headTitle: 'A Griffiths - Web Developer, Software Engineer - About Me',
    metaDescription: 'Andrew Griffiths, web developer and software engineer in kent, UK. Personal website all about me. View my resume cv and experience here.',
    metaOgImg: `${assetPrefix}/img/og.png`,
    smallerTitle: true,
    sections: {
      basics,
      skills,
      work,
      interests
    }
  }
}

export default settings

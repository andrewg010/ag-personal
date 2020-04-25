import { PageSettings } from '~/@types'
import getDomain from '~/config/pages/helpers/getDomain'
import socialMedia from '~/config/pages/contact/socialMedia'

const settings: PageSettings = {
  props: {
    page: 'contact',
    metaUrl: `${getDomain()}/contact.html`,
    titleText: 'Get in touch with me',
    headTitle: 'A Griffiths - Web Developer, Software Engineer - Contact me',
    metaDescription: 'Page description',
    metaOgImg: 'img/og.png',
    smallerTitle: false,
    contentHeading: 'Would you like my help or just want to chat about something? Maybe a project you would like me for?',
    sections: {
      socialMedia
    }
  }
}

export default settings
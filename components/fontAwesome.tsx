import { config, library } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

import {
  faBars, 
  faTimes,
  faLaptopCode,
  faAt,
  faFileAlt,
  faGraduationCap,
  faMapMarkerAlt,

} from '@fortawesome/free-solid-svg-icons'

import {
  faGithub,
  faFacebook,
  faTwitter,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons'

config.autoAddCss = false 
library.add(faBars, faTimes, faLaptopCode, faAt, faFileAlt, faGithub, faFacebook, faTwitter, faLinkedin, faGraduationCap, faMapMarkerAlt)

const FontAwesome = () => null

export default FontAwesome

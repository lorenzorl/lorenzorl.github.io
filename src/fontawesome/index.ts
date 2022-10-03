import { library, dom } from '@fortawesome/fontawesome-svg-core'
import {
  faChevronRight,
  faTimes,
  faExternalLinkAlt,
  faArrowAltCircleRight,
  faArrowAltCircleLeft
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faChevronRight,
  faTimes,
  faExternalLinkAlt,
  faArrowAltCircleRight,
  faArrowAltCircleLeft
);

dom.i2svg();
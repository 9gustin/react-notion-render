import Heading1 from './components/Heading1'
import Heading2 from './components/Heading2'
import Heading3 from './components/Heading3'
import List from './components/List'
import Paragraph from './components/Paragraph'
import StyledText from './components/StyledText'
import { parseBlocks } from './utils/parseBlocks'
import renderBlocks from './utils/renderBlocks'
import Block from './types/Block'
import Text from './types/Text'

import './styles/index.css'

// Components
export { Heading1, Heading2, Heading3, Paragraph, List, StyledText }

// Utils
export { renderBlocks as render, parseBlocks as parser }

// Types
export { Block, Text }

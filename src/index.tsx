import Title from './components/Title'
import List from './components/List'
import Paragraph from './components/Paragraph'
import StyledText from './components/StyledText'
import { parseBlocks } from './utils/parseBlocks'
import renderBlocks from './utils/renderBlocks'
import Block from './types/Block'
import Text from './types/Text'

import './styles/index.css'

// Components
export { Title, Paragraph, List, StyledText }

// Utils
export { renderBlocks as render, parseBlocks as parser }

// Types
export { Block, Text }

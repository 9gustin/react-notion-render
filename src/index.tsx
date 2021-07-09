import Title from './components/Title'
import List from './components/List'
import Paragraph from './components/Paragraph'
import StyledText from './components/StyledText'
import { parseBlocks } from './utils/parseBlocks'
import renderBlocks from './utils/renderBlocks'
import Block from './types/Block'
import Text from './types/Text'

import './styles/index.css'
import renderTitle from './utils/renderTitle'

// Components
export { Title, Paragraph, List, StyledText }

// Utils
export { renderBlocks as render, renderBlocks, renderTitle, parseBlocks as parser }

// Types
export { Block, Text }

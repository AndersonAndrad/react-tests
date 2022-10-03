import './App.css'

import { Flex } from '@chakra-ui/react'
import History from './components/history/history'
import SideMenu from './components/side-menu/side-menu'
import Tools from './components/tools/tools'

function App() {
  return (
    <Flex>
      <SideMenu />
      <Flex bg='gray.900' direction='column'>
        <History />
        <Tools />
      </Flex>
    </Flex>
  )
}

export default App

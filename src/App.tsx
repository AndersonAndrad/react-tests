import './App.css'

import { Flex } from '@chakra-ui/react'
import History from './components/history/history'
import SideMenu from './components/side-menu/side-menu'

function App() {
  return (
    <Flex>
      <SideMenu />
      <History />
    </Flex>
  )
}

export default App

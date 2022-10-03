import { Flex } from '@chakra-ui/react'
import History from './components/history/history'
import NotificationNewRepository from './components/notification-new-repository/notification-new-repository'
import SideMenu from './components/side-menu/side-menu'
import Tools from './components/tools/tools'

function App() {
  return (
    <Flex height='100%'>
      <SideMenu />
      <Flex bg='gray.900' direction='column' padding='30px'>
        <History />
        <Tools />
        <NotificationNewRepository />
        <NotificationNewRepository />
        <NotificationNewRepository />
        <NotificationNewRepository />
        <NotificationNewRepository />
        <NotificationNewRepository />
        <NotificationNewRepository />
        <NotificationNewRepository />
        <NotificationNewRepository />
        <NotificationNewRepository />
        <NotificationNewRepository />
        <NotificationNewRepository />
        <NotificationNewRepository />
        <NotificationNewRepository />
      </Flex>
    </Flex>
  )
}

export default App

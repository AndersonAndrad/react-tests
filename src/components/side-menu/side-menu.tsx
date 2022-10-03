import { Box, Button, Flex, Image, Input, Text } from "@chakra-ui/react";

import { BsJournalBookmark } from 'react-icons/bs';

export default function SideMenu() {
  const userAvatar = 'https://avatars.githubusercontent.com/u/31743641?s=400&u=f9a5acec735fcb6b8d0ed270a44cbad52295dd85&v=4'

  return (
    <Box
      bg='gray.700'
      padding='10'
      h='100%'
      color='white'
      borderRight='1px'
      borderColor='gray.100'
    >
      <Flex
        gap='5'
        width='full'
        paddingBottom='30px'
        borderBottom='1px'
        borderColor='gray.100'
      >
        <Image
          src={userAvatar}
          boxSize='25px'
          borderRadius='full'
        />
        <span>AndersonAndrad</span>
      </Flex>

      <Flex align='center' paddingTop='30px' justify='space-between'>
        <label>Recent repositories</label>

        <Button
          bg='blue.400'
          color='white'
        >
          <Flex gap='2' align='center'>
            <BsJournalBookmark />
            Color
          </Flex>
        </Button>
      </Flex>

      <Input
        marginTop='10px'
        placeholder="Find a repository..."
        color='gray.600'
        background='gray.900'
        fontWeight='bold'
        borderColor='gray.500'
      />

      <Flex gap='15px' direction='column' marginTop='40px'>
        <Flex align='center' gap='10px'>
          <Image src={userAvatar} boxSize='20px' borderRadius='full' />
          <label>AndersonAndrad/study-nodejs</label>
        </Flex>

        <Flex align='center' gap='10px'>
          <Image src={userAvatar} boxSize='20px' borderRadius='full' />
          <label>AndersonAndrad/study-nodejs</label>
        </Flex>

        <Flex align='center' gap='10px'>
          <Image src={userAvatar} boxSize='20px' borderRadius='full' />
          <label>AndersonAndrad/study-nodejs</label>
        </Flex>

        <Flex align='center' gap='10px'>
          <Image src={userAvatar} boxSize='20px' borderRadius='full' />
          <label>AndersonAndrad/study-nodejs</label>
        </Flex>

        <Flex align='center' gap='10px'>
          <Image src={userAvatar} boxSize='20px' borderRadius='full' />
          <label>AndersonAndrad/study-nodejs</label>
        </Flex>

        <Flex align='center' gap='10px'>
          <Text fontSize='12px' cursor='pointer'>Show more</Text>
        </Flex>
      </Flex>

    </Box>
  )
}
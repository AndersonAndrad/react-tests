import { Box, Flex, Image, Text } from "@chakra-ui/react";

import { AiOutlineStar } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function NotificationNewRepository() {
  const userAvatar = 'https://avatars.githubusercontent.com/u/31743641?s=400&u=f9a5acec735fcb6b8d0ed270a44cbad52295dd85&v=4'
  return (
    <Flex color='white' marginTop='20px' marginBottom='20px' >
      <Box>
        <Image src={userAvatar} width='52px' height='52px' borderRadius='full' />
      </Box>
      <Flex direction='column' width='full' gap='10px'>
        <Flex gap='5px' align='center' paddingTop='15px'>
          <Text fontWeight='bold'>Anderson Andrade</Text>
          <Text>created a repository</Text>
          <Text fontWeight='bold'>AndersonAndrad/ReactTest</Text>
          <Text fontSize='12px'>3 hours ago</Text>
        </Flex>

        <Flex bg='gray.700' width='full' padding='20px' justify='space-between' align='flex-start' border='1px' borderRadius='10px'>
          <Flex gap='20px' direction='column' align='start'>
            <Text fontWeight='bold'>AndersonAndrade/ReactTest</Text>
            <Text fontSize='12px'>Updated Oct 2</Text>
          </Flex>

          <Flex bg='gray.800' height='fit-content' border='1px' borderRadius='10px'>
            <Flex gap='5px' padding='5px' paddingRight='20px' align='center' borderRight='1px' borderColor='gray.100'>
              <AiOutlineStar />
              <Text>Star</Text>
            </Flex>
            <Flex align='center' padding='10px'>
              <RiArrowDropDownLine />
            </Flex>
          </Flex>

        </Flex>
      </Flex>

    </Flex>
  )
}
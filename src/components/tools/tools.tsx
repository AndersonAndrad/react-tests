import { Box, Flex, Text } from "@chakra-ui/react";

import { AiOutlineTool } from "react-icons/ai";

export default function Tools() {
  return (
    <Box padding='20px' textAlign='initial' color='white'>
      <Flex direction='column'>
        <Flex align='center' gap='10px'>
          <Box bg='gray.100' padding='10px' borderRadius='full' color='gray.800'>
            <AiOutlineTool />
          </Box>
          <Text>Use tools of the trade</Text>
        </Flex>

        <Flex
          justifyContent='space-between'
          bg='gray.700'
          padding='30px'
          borderRadius='10px'
          border='1px'
          borderColor='gray.100'
          marginTop='30px'
          marginBottom='30px'
          gap='20px'
        >
          <Flex direction='column' align='start' gap='10px' >
            <Text fontWeight='bold'>
              Write code in your web browser
            </Text>
            <Text >
              Collaborate on code with others and track your work in a repository
            </Text>
          </Flex>

          <Flex
            direction='column'
            align='start'
            gap='10px'
          >
            <Text fontWeight='bold'>
              Install a powerful code editor
            </Text>
            <Text >
              Create a file in a repository that tells the GibHub community who you are.
            </Text>
          </Flex>

          <Flex direction='column' align='start' gap='10px'>
            <Text fontWeight='bold'>Set up your local dev environment</Text>
            <Text
              color='blue.300'
              fontWeight='bold'>
              Collaborate on code with others and track your work in a repository
            </Text>
            <Text
              color='blue.300'
              fontWeight='bold'>
              Collaborate on code with others and track your work in a repository
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Box >
  )
}
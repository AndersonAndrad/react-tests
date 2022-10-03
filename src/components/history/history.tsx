import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { BsCode, BsJournalBookmark } from "react-icons/bs";

import { DiGitBranch } from "react-icons/di";
import { HiOutlineBookOpen } from "react-icons/hi";

export default function History() {
  return (
    <Box padding='20px' textAlign='initial' color='white'>
      <Flex direction='column' align='flex-start' gap='10px' marginBottom='10px' >
        <Text fontSize='32px' fontWeight='bold'>The home for all developers - including you.</Text>
        <Text >Welcome to your personal dashboard, where you can find an introduction to how GitHub works, tools to help you build software, and help merging your first lines of code</Text>
      </Flex>

      <Flex direction='column'>
        <Flex align='center' gap='10px'>
          <Box bg='gray.100' padding='10px' borderRadius='full' color='gray.800'>
            <BsCode />
          </Box>
          <Text>Start writing code</Text>
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
          <Flex
            direction='column'
            align='start'
            gap='10px' >

            <Box
              bg='gray.100'
              padding='10px'
              borderRadius='full'
              color='gray.800'>
              <BsJournalBookmark />
            </Box>

            <Text fontWeight='bold'>Start a new repository</Text>
            <Text >
              Collaborate on code with others and track your work in a repository
            </Text>

            <Button colorScheme='blue'  >Create a new Repository</Button>
          </Flex>

          <Flex direction='column' align='start' gap='10px'>

            <Box
              bg='gray.100'
              padding='10px'
              borderRadius='full'
              color='gray.800'>
              <HiOutlineBookOpen />
            </Box>

            <Text fontWeight='bold'>Create your profile README</Text>
            <Text >Create a file in a repository that tells the GibHub community who you are.</Text>

            <Button colorScheme='blue'  >Create a README</Button>
          </Flex>

          <Flex direction='column' align='start' gap='10px'>

            <Box bg='gray.100' padding='10px' borderRadius='full' color='gray.800'>
              <DiGitBranch />
            </Box>

            <Text fontWeight='bold'>Start a new repository</Text>
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
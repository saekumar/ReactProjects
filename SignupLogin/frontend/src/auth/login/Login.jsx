import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react'
import { data } from 'autoprefixer'

import { useState } from 'react'
export default function SimpleCard() {
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
  })
  const toast = useToast()
  const handleLogin = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputs),
      })

      const data = await res.json()
      console.log(data)
      if (data.error) {
        toast({
          title: 'Error',
          description: data.error,
          status: 'error',
          duration: 3000,
          isClosable: true,
        })
      } else {
        toast({
          title: 'Success',
          description: data.message,
          status: 'success',
          duration: 3000,
          isClosable: true,
        })
      }
      localStorage.setItem('user-token2', JSON.stringify(data))
      setInputs({
        username: '',
        password: '',
      })
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Something went wrong',
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
    }
  }

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Username</FormLabel>
              <Input
                value={inputs.username}
                onChange={(e) => {
                  setInputs({ ...inputs, username: e.target.value })
                }}
                type="text"
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={inputs.password}
                onChange={(e) => {
                  setInputs({ ...inputs, password: e.target.value })
                }}
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                onClick={handleLogin}
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}

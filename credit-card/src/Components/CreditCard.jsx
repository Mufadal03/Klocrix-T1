import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import CardBg from '../assets/card-bg.jpg'

const CreditCard = ({
    cardHolderName ,
    expMonth ,
    expYear ,
    cvv ,
    cardNumber
}) => {
  return (
      <Flex color={'white'} w='80%' h='50%' borderRadius={'2xl'} bgColor={'darkblue'} direction={'column'} p='1.5rem' justifyContent={'space-between'}>
          <Heading textAlign={'right'}>VISA</Heading>

          <Heading fontWeight={'bold'}>{cardNumber ? cardNumber.split('').map((el, i) => {
              if ((i + 1) % 4 == 0) return `${el} `
              else return el
          }
          ) : '**** **** **** ****'}</Heading>
          <Flex justifyContent={'space-between'}>
              <Box>
                  <Text fontWeight={'bold'} fontSize={'sm'}> CARD HOLDER</Text>
                  <Text>{cardHolderName?cardHolderName:'Name' }</Text>
              </Box>

              <Box>
                  <Text fontWeight={'bold'} fontSize={'sm'}>EXPIRY</Text>
                  <Text>{expMonth?expMonth:"MM"} / {expYear?expYear:'YY' }</Text>
              </Box>

              <Box>
                  <Text fontWeight={'bold'} fontSize={'sm'}> CVV</Text>
                  <Text>{cvv?cvv:'***' }</Text>
              </Box>
          </Flex>
    </Flex>
  )
}

export default CreditCard
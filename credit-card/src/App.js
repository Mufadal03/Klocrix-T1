import { Box, Button, Flex, Heading, Input, Select } from '@chakra-ui/react';
import './App.css';
import CreditCard from './Components/CreditCard';
import { useState } from 'react';

const credentials = {
  cardHolderName: '',
  cardNumber: '',
  expMonth: '',
  expYear: '',
  cvv: ''
}
function App() {
  const [cardDetails, setCardDetails] = useState(credentials)

  const handleChange = (e) => {
    const { name, value } = e.target
    if (!value) return 
    setCardDetails({
      ...cardDetails,
      [name]:value
    })
  }

  const handleClick = () => {
    console.log(cardDetails)
  }


  return (
    // page-container
    <Flex border={'1px solid red'} justifyContent={'center'} alignItems={'center'} h='100vh'>

      {/* credit-card && form contaniner */}
      <Flex w='90%' border={'2px solid blue'} h='80%'>

        {/* credit-card-container */}
        <Flex w='50%' border={'1px solid'} justifyContent={'center'} alignItems={'center'}>
          <CreditCard />
        </Flex>
        {/* credit-card-container */}

        {/* credit-card-form-container */}
        <Flex direction='column' border={'2px solid red'} w='50%' m='auto' p='2rem' gap='3rem'>
          <Heading >Payment Details</Heading>

          <Flex direction={'column'} gap='2rem '>
            <Box>
              <label style={{color:'red'}} htmlFor='card-holder'>CARDHOLDER NAME</label>
              <Input onChange={handleChange} value={cardDetails.cardHolderName} variant='flushed' borderBottom={'1px solid red'} name='cardHolderName' type='text' id='card-holder' placeholder='Enter Cardholder Name' />
            </Box>

            <Box>
              <label style={{color:'red'}} htmlFor='card-number'>CARD NUMBER</label>
              <Input onChange={handleChange} value={cardDetails.cardNumber} variant='flushed' borderBottom={'1px solid red'} name='cardNumber' type='number' id='card-number' placeholder='Enter Card Number' />
            </Box>

            <Flex justifyContent={'space-between'}>

              <Box>
                <label style={{color:'red'}} htmlFor='exp-month'>EXPIRY MONTH</label>
                <Select onChange={handleChange} value={cardDetails.expMonth} name='expMonth' id='exp-month'>
                  <option value={null}>MM</option>
                  {
                    new Array(12).fill(0).map((_, i) => <option value={i < 9 ? `0${i + 1}` : i + 1}>{i < 9 ? `0${i + 1}` : i + 1}</option>)
                  }
                  
                </Select>
              </Box>
              
              <Box>
                <label style={{color:'red'}} htmlFor='exp-year'>EXPIRY YEAR</label>
                <Select onChange={handleChange} value={cardDetails.expYear} name="expYear" id='exp-year'>
                  <option value={null}>YY</option>
                  {
                    new Array(12).fill(0).map((el, i) => {
                      let current = 23
                      return (
                        <option value={`20${current+i}`}>20{current + i}</option>
                      )
                    })
                  }
                </Select>
              </Box>

              <Box>
                <label style={{color:'red'}} htmlFor='cvv'>CVV</label>
                <Input onChange={handleChange} name='cvv' value={cardDetails.cvv} id='cvv' type='number' placeholder='CVV' />
              </Box>
            </Flex>
          </Flex>
          
          <Heading>Payment Amount : 200000</Heading>
          <Button onClick={handleClick} colorScheme='red'>Pay</Button>
        </Flex>
        {/* credit-card-form-container */}


      </Flex>
      {/* credit-card && form contaniner */}


    </Flex>
    // page-container

  );
}

export default App;

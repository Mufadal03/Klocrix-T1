import { Box, Button, Flex, Heading, Input, Select, useToast } from '@chakra-ui/react';
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
  const toast = useToast()
  const handleChange = (e) => {
    let { name, value } = e.target
    if (value == -1) return

    // validation only numbers in cardholder name
    if (name == 'cardHolderName') {
      const pattern = /^[A-Za-z]+$/
      if (!pattern.test(value)) return
    }
    // validating card number 
    if (name == 'cardNumber'|| name=='cvv') {
      if(!Number(value))return
    }

    setCardDetails({
      ...cardDetails,
      [name]:value
    })
  }

  const validateNumber = (e, maxLength) => {
    if(e.target.value.length>maxLength)e.target.value=e.target.value.slice(0,maxLength)
  }
  const handlePay = () => {
    for (let k in cardDetails) {
      if (!cardDetails[k]) {
        toast({
          title: `All Fields are required`,
          description: `please fill ${k} details to proceed`,
          status: 'error',
          duration: 3000,
          isClosable: true,
          position:"top"
        })
        return 
      }
    }
    toast({
      title: `Payment Successfull`,
      description: `Thankyou for Paying 200000`,
      status: 'success',
      duration: 3000,
      isClosable: true,
      position:'top'
    })
  }


  return (
    // page-container
    <Flex justifyContent={'center'} alignItems={'center'} h='100vh'>

      {/* credit-card && form contaniner */}
      <Flex w='90%'h='80%'>

        {/* credit-card-container */}
        <Flex w='50%' justifyContent={'center'} alignItems={'center'}>
          <CreditCard
            cardHolderName={cardDetails.cardHolderName}
            cardNumber={cardDetails.cardNumber}
            cvv={cardDetails.cvv}
            expMonth={cardDetails.expMonth}
            expYear={cardDetails.expYear} />
        </Flex>
        {/* credit-card-container */}

        {/* credit-card-form-container */}
        <Flex direction='column' border={'1px solid rgba(0,0,0,.5)'} w='50%' m='auto' p='2rem' gap='3rem'>
          <Heading >Payment Details</Heading>

          <Flex direction={'column'} gap='2rem '>
            <Box>
              <label style={{color:'darkBlue'}} htmlFor='card-holder'>CARDHOLDER NAME</label>
              <Input onChange={handleChange} type='text' value={cardDetails.cardHolderName} variant='flushed' borderBottom={'1px solid darkBlue'} name='cardHolderName'  id='card-holder' placeholder='Enter Cardholder Name' />
            </Box>

            <Box>
              <label style={{color:'darkBlue'}} htmlFor='card-number'>CARD NUMBER</label>
              <Input onChange={handleChange} value={cardDetails.cardNumber} variant='flushed' borderBottom={'1px solid darkBlue'} onInput={(e)=>validateNumber(e,16)} name='cardNumber' type='number' id='card-number' placeholder='Enter Card Number' />
            </Box>

            <Flex justifyContent={'space-between'}>

              <Box>
                <label style={{color:'darkBlue'}} htmlFor='exp-month'>EXPIRY MONTH</label>
                <Select onChange={handleChange} value={cardDetails.expMonth} name='expMonth' id='exp-month'>
                  <option value={-1}>MM</option>
                  {
                    new Array(12).fill(0).map((_, i) => <option key={i} value={i < 9 ? `0${i + 1}` : i + 1}>{i < 9 ? `0${i + 1}` : i + 1}</option>)
                  }
                  
                </Select>
              </Box>
              
              <Box>
                <label style={{color:'darkBlue'}} htmlFor='exp-year'>EXPIRY YEAR</label>
                <Select onChange={handleChange} value={cardDetails.expYear} name="expYear" id='exp-year'>
                  <option value={-1}>YY</option>
                  {
                    new Array(12).fill(0).map((el, i) => {
                      let current = 23
                      return (
                        <option key={i} value={`20${current+i}`}>20{current + i}</option>
                      )
                    })
                  }
                </Select>
              </Box>

              <Box>
                <label style={{color:'darkBlue'}} htmlFor='cvv'>CVV</label>
                <Input onChange={handleChange} name='cvv' onInput={(e)=>validateNumber(e,3)} value={cardDetails.cvv} id='cvv' type='number' inputMode='numeric' placeholder='CVV' />
              </Box>
            </Flex>
          </Flex>
          
          <Heading>Payment Amount : 200000</Heading>
          <Button onClick={handlePay} colorScheme='red'>PAY</Button>
        </Flex>
        {/* credit-card-form-container */}


      </Flex>
      {/* credit-card && form contaniner */}


    </Flex>
    // page-container

  );
}

export default App;

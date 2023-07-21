import { Flex, Heading } from '@chakra-ui/react';
import './App.css';
import CreditCard from './Components/CreditCard';
import { useState } from 'react';

const credentials = {
  cardHolderName: '',
  cardNumber: '',
  expMonth: '',
  expYear: '',
  cvv:''
}
function App() {
  const [cardDetails,setCardDetails] = useState(credentials)
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
        <Flex direction='column' border={'2px solid red'} w='50%' m='auto' p='2rem'>
          <Heading fontFamily={'Ubuntu'}>Payment Details</Heading>
          
        </Flex>
        {/* credit-card-form-container */}

        
      </Flex>
      {/* credit-card && form contaniner */}


    </Flex>
    // page-container

  );
}

export default App;

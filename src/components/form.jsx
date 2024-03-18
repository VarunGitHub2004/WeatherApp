import {
  Box,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { data as datadb } from "../assets/data/data";
const Form = ({ handleChange }) => {
  const [data, setData] = useState(datadb);

  return (
    <FormControl>
       <Box   className="loader">
  <Text textAlign={'center'}  fontSize={'5rem'} className="text-weather">
    Weather
  </Text>
</Box>
      <VStack
      bg={'#1B1A55'}
      p={'1em'}
      className="form"
      >
        {" "}
        <Input
          placeholder="search"
          fontSize={'1.3rem'}
          outline={'none'}
          type="text"
          onChange={(e) => handleChange(e)}
          p={"0.5em"}
          width={["100%","50vw"]}
        />
        {/* <Text color={"white"} className="text"> OR </Text> */}
        {/* <Select
        height={'42px'}
          borderRadius={"0.2em"}
          justifySelf={"flex-end"}
          onChange={(e) => handleChange(e)}
          defaultValue={'Jaipur'}
          width={["100%","50%"]}
          display={'block'}
          margin={'auto'}
        >
          {data.map((d) => (
            <option key={d.name}  style={{background:'black',color:'white'}}>{d.name}</option>
          ))}
        </Select> */}
      </VStack>
    </FormControl>
  );
};

export default Form;

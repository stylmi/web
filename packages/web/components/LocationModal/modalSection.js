import React from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { Box, Text } from "@chakra-ui/react";
import Places from "./placeInKigali.json";

const ModalSection = ({ text, setMethod, type}) => {
    const widthValue = type==="districts"? "95%":"100%"
    const texts = type==="districts"? Places[text]: text


  return (
    <Box
      height="3vh"
      d="flex"
      flexDirection="row"
      justifyContent="flex-start"
      alignItems="center"
      my="1%"
      bg="gainsboro"
      borderRadius="2px"
      px="5%"
      onClick={() => setMethod(texts,"sectors")}
    >
      <Text fontSize=".8rem" width={widthValue}>
        {text}
      </Text>
     {type === "districts" && <IoMdArrowDropright />}
    
    </Box>
  );
};
export default ModalSection;

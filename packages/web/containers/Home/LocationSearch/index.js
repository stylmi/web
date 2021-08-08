import React, {useState} from "react";
import {IoLocationSharp} from "react-icons/io5";
import {Text, Box as ChakraBox} from '@chakra-ui/react';
import Button from 'reusecore/src/elements/Button';
import LocationModal from "../../../components/LocationModal";
import {useDisclosure} from "@chakra-ui/react"
import { cli } from "winston/lib/winston/config";

const LocationSearch = ({enableScroll, setScroll}) => {
  const {isOpen, onOpen, onClose} = useDisclosure()
  const [text, setText] = useState("All Rwanda")
    return (
       
        <ChakraBox d="flex" flexDirection="row" justifyContent="center" alignItems="center">
        <Text color="primary" fontSize={["1.2rem"]} px="1%">
          Search Products in 
        </Text>
        <Button
          title={text}
          icon={<IoLocationSharp/>}
          iconPosition="left"
          bg="solid"
          color="white"
          border="1px solid #30C56D"
          onClick = {() => {onOpen(), setScroll(!enableScroll)}}
        />
        <LocationModal close={onClose} open={isOpen} setScroll={setScroll} enableScroll={enableScroll} setText={setText} />
        </ChakraBox>

    )
}
export default LocationSearch;
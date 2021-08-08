import React, { useState, useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Text,
  Flex,
  Box,
  Button,
} from "@chakra-ui/react";
import InputSearch from "../InputSearch";
import ModalSection from "./modalSection";
import Places from "./placeInKigali.json";
import { IoMdArrowDropleft } from "react-icons/io";

const LocationModal = ({ open, close, setScroll, enableScroll, setText }) => {
  const [searchValue, setSearchValue] = useState("");
  const [places, setPlaces] = useState([]);
  const [type, setType] = useState("districts");

  useEffect(() => {
    setContent(Object.keys(Places), "districts");
  }, [open, close]);
  const onChange = (e) => {
    setSearchValue(e.target.value);
  };
  const setContent = (places, type) => {
    if (typeof places === "string") {
      setType("");
      setText(places);
      close();
    } else {
      places = places.sort();
      let lowerLimit, middleLimit;
      const remainder = places.length % 3;
      const value = places.length / 3;
      if (remainder === 1) {
        lowerLimit = value * 1 + 1;
        middleLimit = lowerLimit + 3;
      } else if (remainder === 2) {
        lowerLimit = value * 1 + 1;
        middleLimit = lowerLimit + 3 + 1;
      } else {
        lowerLimit = value * 1;
        middleLimit = value * 2;
      }

      setPlaces([
        places.slice(0, lowerLimit),
        places.slice(lowerLimit, middleLimit),
        places.slice(middleLimit),
      ]);
      setType(type);
    }
  };

  return (
    <Modal
      isOpen={open}
      onClose={() => {
        close(), setScroll(!enableScroll);
      }}
      motionPreset="slideInRight"
      autofocus={true}
      preserveScrollBarGap={true}
      size="md"
    >
      <ModalOverlay />
      <ModalContent top="15rem">
        <ModalBody>
          <Box
            d="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="start"
          >
            {type === "districts" ? (
              <Text fontSize="0.8rem">{"All Rwanda"}</Text>
            ) : (
              <Button
                onClick={() => setContent(Object.keys(Places), "districts")}
                leftIcon={<IoMdArrowDropleft />}
                variant="link"
                border="0px"
                colorScheme="black"
                fontWeight="medium"
                my="3.5%"
                bg="none"
                fontSize="0.8rem"
              >
                Back
              </Button>
            )}
            <InputSearch
              value={searchValue}
              placeholder="&#x1F50D;      Find district or sector ..."
              placeholderAlign="left"
              changed={onChange}
              style={{
                marginTop: 10,
                marginBottom: 0,
                boxShadow: "0 0 1px rgba(0,0,0,0.4)",
                fontSize: "0.8rem",
                width: "50%",
                height: "20px",
              }}
            />
          </Box>

          <Flex
            direction="row"
            height={["30vh"]}
            justifyContent="space-between"
          >
            {places &&
              places.map((placeColumn) => {
                return (
                  <Flex direction="column" width="30%">
                    {placeColumn.map((place) => {
                      return (
                        <Box key={place} width="100%">
                          <ModalSection
                            text={place}
                            type={type}
                            setMethod={setContent}
                          />
                        </Box>
                      );
                    })}
                  </Flex>
                );
              })}
          </Flex>
        </ModalBody>

        <ModalFooter>
          <Text color="primary"> SellIt - faster, closer</Text>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default LocationModal;

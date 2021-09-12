import React, { useState, useEffect, useContext } from "react";
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
import { HOME_PAGE } from "core/navigation/constant";
import Link from "next/link";
import  uuid  from "react-uuid";
import { LocationContext, ScrollContext } from "../../contexts/HomepageContext";

const LocationModal = ({ open, close }) => {
  const [searchValue, setSearchValue] = useState("");
  const [places, setPlaces] = useState([]);
  const [type, setType] = useState("districts");
  const {changeLocation} = useContext(LocationContext)
  const{enableScroll, setScroll} = useContext(ScrollContext)

  useEffect(() => {
    setContent(Object.keys(Places), "districts");
  }, [open, close]);
  const onChange = (e) => {
    setSearchValue(e.target.value);
  };
  const setContent = (place, types) => {
    if (typeof place === "string") {
      setType("");
      changeLocation(place);
      close();
      setScroll(true);

    } else {
      place = place.sort();
      let lowerLimit, middleLimit;
      const remainder = place.length % 3;
      const value = place.length / 3;
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
        place.slice(0, lowerLimit),
        place.slice(lowerLimit, middleLimit),
        place.slice(middleLimit),
      ]);
      setType(types);
    }
  };

  return (
    <Modal
      isOpen={open}
      onClose={() => {
        close(), setScroll(!enableScroll) ;
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
               <Link
               href={`${HOME_PAGE}`}
               as={`${HOME_PAGE}`}
             ><Text fontSize="0.8rem">{"All Rwanda"}</Text>
             </Link>
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
                  <Flex key={uuid()} direction="column" width="30%">
                    {placeColumn.map((place) => {
                      return (
                        <Box key={uuid()} width="100%">
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

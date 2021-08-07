import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Text
} from "@chakra-ui/react";


const LocationModal =   ({ open, close, setScroll,enableScroll })  => {
  return (
    <Modal isOpen={open} onClose={() => {close(),setScroll(!enableScroll)}} motionPreset="slideInRight" autofocus={true} preserveScrollBarGap={true} >
      <ModalOverlay />
      <ModalContent top='20rem'>
        <ModalBody>{/* <Lorem count={2} /> */}</ModalBody>

        <ModalFooter>
            <Text color="primary"> SellIt - faster, closer</Text>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};


export default LocationModal;
import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Heading,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
} from "@chakra-ui/react";

const PostSongModal = ({ isOpen, onOpen, onClose, song, onPost }) => {
  const [caption, setCaption] = useState("");
  const charLeft = 250 - caption.length;

  const onChange = (e) => {
    e.preventDefault();
    if (e.target.value.length <= 250) {
      setCaption(e.target.value);
    }
  };

  return (
    <>
      <Modal
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
        size={"4xl"}
      >
        <ModalOverlay />
        <ModalContent align={"center"}>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Heading size={"xl"}>{song?.title}</Heading>
            <Heading size={"l"}>{song?.artist?.name}</Heading>
            <FormControl>
              <FormLabel>Caption</FormLabel>
              <Input
                id="caption"
                type="text"
                value={caption}
                placeholder="Caption this post!"
                onChange={onChange}
              />
              <FormHelperText>{charLeft} characters remaining.</FormHelperText>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose} mr={3}>
              Cancel
            </Button>
            <Button colorScheme="teal" onClick={() => onPost(caption)}>
              Post Song
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default PostSongModal;

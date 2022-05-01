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
  Input,
  FormHelperText,
  Spacer,
} from "@chakra-ui/react";
import Comment from "./Comment";

const CommentModal = ({ isOpen, onOpen, onClose, post, onComment }) => {
  const [comment, setComment] = useState("");
  const charLeft = 250 - comment.length;

  const onChange = (e) => {
    e.preventDefault();
    if (e.target.value.length <= 250) {
      setComment(e.target.value);
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
            <Heading size={"xl"}>{post.song_title}</Heading>
            <Heading size={"l"}>Comments</Heading>
            {post.comments.map((comment) =>
                <Comment comment={comment}/>
            )}
          </ModalBody>
          <ModalFooter spacing={2}>
            <FormControl>
              <Input
                  id="comment"
                  type="text"
                  value={comment}
                  placeholder="comment"
                  onChange={onChange}
              />
              <FormHelperText>{charLeft} characters remaining.</FormHelperText>
            </FormControl>
            <Spacer/>
            <Button onClick={onClose} mr={3}>
              Cancel
            </Button>
            <Button colorScheme="teal" onClick={() => onComment(comment)}>
              Comment
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default CommentModal;

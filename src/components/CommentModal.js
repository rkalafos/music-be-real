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
        size={"xl"}
      >
        <ModalOverlay />
        <ModalContent align={"center"}>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Heading size={"xl"} color={"teal"}>{post.song_title}</Heading>
            <Heading size={"l"}>Comments</Heading>
            {post.comments.map((comment) =>
                <Comment comment={comment}/>
            )}
          </ModalBody>
          <ModalFooter>
            <FormControl pr={4}>
              <Input
                  id="comment"
                  type="text"
                  value={comment}
                  placeholder="Leave a comment"
                  onChange={onChange}
              />
              <FormHelperText>{charLeft} characters remaining.</FormHelperText>
            </FormControl>
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

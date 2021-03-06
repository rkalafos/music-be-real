import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Heading,
  HStack,
  Avatar,
  Text,
} from "@chakra-ui/react";

function UserInfo({ close, follower, navigate }) {
  const user = useSelector((state) =>
    state.allUsers.find((u) => u?._id === follower)
  );
  return (
    <HStack
      spacing={4}
      alignItems="center"
      onClick={() => {
      close();
      navigate(`/profile/${user._id}`);
      }}
    >
      <Avatar size="md" src={user?.avatarImage} alt={user?.username} />
      <Text>{user?.username}</Text>
    </HStack>
  );
}

const FollowModal = ({ isOpen, onOpen, onClose, followers, header }) => {
  const [caption, setCaption] = useState("");
  const charLeft = 250 - caption.length;
  const navigate = useNavigate();

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
            <Heading size={"m"}>{header}</Heading>

            {followers?.map((follower) => (
              <UserInfo
                key={follower}
                close = {onClose}
                follower={follower}
                navigate={navigate}
              />
            ))}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default FollowModal;

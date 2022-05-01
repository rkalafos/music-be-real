import React, { useState } from "react";
import {useNavigate} from "react-router";
import {useDispatch} from "react-redux";
import { getUserById } from "../actions/user-actions";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Heading,
  HStack,
  Avatar,
  Text,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
} from "@chakra-ui/react";

function UserInfo(follower, navigate) {
    const dispatch = useDispatch();
    // followers undefined?
    const user = getUserById(dispatch, follower);
  return (
                                    <HStack
                                        spacing={4}
                                        alignItems="center"
                                        onClick={() => navigate(`/profile/${user._id}`)}
                                    >
                                        <Avatar
                                            size="md"

                                            src={user.avatarImage}
                                            alt={user.username}
                                        />
                                        <Text>{user.username}</Text>
                                    </HStack>
  );
}


const FollowModal = ({ isOpen, onOpen, onClose, followers}) => {
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
            <Heading size={"m"}>Followers</Heading>
            {console.log("Followers: " + followers)}
             {followers.map((follower) => <UserInfo key={follower}  follower={follower} navigate={navigate} />)}

          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default FollowModal;


//            for follower in user?.followers {
//                                    <HStack
//                                        spacing={4}
//                                        alignItems="center"
//                                        onClick={() => navigate(`/profile/${follower._id}`)}
//                                    >
//                                        <Avatar
//                                            size="md"
//                                            src={follower.avatarImage}
//                                            alt={follower.username}
//                                        />
//                                        <Text>{follower.username}</Text>
//                                    </HStack>
//            }
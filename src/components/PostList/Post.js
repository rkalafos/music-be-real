import React from "react";
import {useDispatch} from "react-redux";
import { deletePost } from '../../actions/post-actions';
import {findUserByID} from "../../actions/user-actions";
import {Box} from "@chakra-ui/react";
// import PostStats from "./tuit-stats";

const Post = ({post}) => {
    const dispatch = useDispatch();
    const postedBy = findUserByID(dispatch, post.userId);

    return (
        <>
            <Box
                borderRadius="sm"
                background="#38383d"
                boxShadow="md"
                _hover={{background: "#42414d" }}
            >
                <div className="d-flex">
                    <div className="col-1 ">
                        <img className="img img-responsive rounded-circle" width="100%"
                             src={postedBy.avatarImage} alt={postedBy.username}/>
                    </div>
                    <div className="col-11">
                        <div>
                            <b style={{color: "white"}}>{postedBy.username}</b>
                            <i onClick={() => deletePost(dispatch, post)} className="fas fa-remove fa-pull-right"></i>
                        </div>
                        <div style={{color: "white"}}>
                            <p>{post.caption}</p>
                        </div>
                        {/*<PostStats post={post}/>*/}
                    </div>
                </div>
            </Box>
        </>
    );
}

export default Post;
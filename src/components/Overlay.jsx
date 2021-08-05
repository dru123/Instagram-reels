import React, { useState, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Button,
  CardMedia,
  Card,
  Typography,
  Container,
  Paper,
} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import FavouriteIcon from "@material-ui/icons/Favorite";
import { database, storage, firestore } from "../firebase";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  details: {
    display: "flex",
    position: "absolute",
    top: "0px",
    left: "50%",
    zIndex: "50",
    transform: "translateX(-50%)"
  },
  content: {
    flex: "1 0 auto",
  },
  text: {
    color: "white",
    fontFamily: "serif",
    fontSize: "1.5rem",
    marginLeft: "1rem",
  },
  cover: {
    width: "30rem",
  },
  icon: {
    strokeWidth: "1",
    fontSize: "2rem",
  },
  notLiked: {
    color: "white",
  },
  Liked: {
    color: "red",
  },
  noBody: {
    borderTop: "1px solid lightgrey",
    display: "flex",
  },
  heart: {
    stroke: "black",
    strokeWidth: "1",
  },
  hidden: {
    height: "6rem",
    backgroundColor: "green",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  cmntBox: {
    display: "flex",
  },
  avtar: {
    marginLeft: "0.6rem",
    marginTop: "1rem",
  },
  txt: {
    fontFamily: "serif",
    fontSize: "1.4rem",
    marginLeft: "1rem",
    marginTop: "1rem",
    fontWeight: "bold",
  },
  cmnt: {
    fontFamily: "serif",
    marginTop: "1.2rem",
    fontSize: "1.3rem",
    marginLeft: "1.5rem",
    color: "darkgray",
  },
  flex: {
    display: "flex",
  },
  "MuiContainer-root": {
    paddingLeft: "24px",
    paddingRight: "24px",
    position: "absolute !important",
    top: "113px !important",
  },
}));

export default function Overlay(props) {
  console.log("97",props.userProfile);
  const [userComment, setComment] = useState("");
  const [postData, setPost] = useState();
  const [commentArr, setUserComment] = useState([]);
  const [commentLoader, setCommentLoader] = useState(false);
  const classes = useStyles();
  const theme = useTheme();
  const handleComment = (e) => {
    let val = e.target.value;
    setComment(e.target.value);
    if (val == "") {
      setCommentLoader(false);
    } else {
      setCommentLoader(true);
    }
  };
  const addComment = async (e) => {
      setCommentLoader(true);
      let { username, profileUrl } = props.user;
      
    // console.log(props.puid);
    // console.log(props.user);
    const res = await firestore.collection("comments").add({
        comment: userComment,
        username,
        profileUrl,
        createdAt: database.getUserTimeStamp(),
    });
    let cid = res.id;
    let postRef = await database.posts.doc(props.puid).get();
    let post = postRef.data();
    let comments = post.comments;
    database.posts.doc(props.puid).update({
      comments: [...comments, cid],
    });
    // setUserComment([...commentArr, userComment])
    setComment("");
    setCommentLoader(false);

  };
  useEffect(async () => {
    let docRefsnap = await database.posts
      .doc(props.puid)
      .onSnapshot((snapshot) => {
        let data = snapshot.data();
        console.log(data);
        setPost(data);
      });

    return docRefsnap;
  }, []);
  // https://my-project-8602e.web.app/
  
  useEffect(async () => {
    let postRef = await database.posts.doc(props.puid).get();
    let post = postRef.data();
    // console.log(post);
    let comments = post.comments;
    // console.log(comments);
    // console.log(comments.length);
    let allComments = [];
    for (let i = 0; i < comments.length; i++) {
      let docRef = await database.comments.doc(comments[i]).get();
      let Comment = docRef.data();
      allComments.push(Comment);

    }
    setUserComment(allComments);
  }, [postData]);


  
  return (

    
    <>
    {
      console.log("170",commentArr),
      console.log(props.userName)
    }
      <div className={classes.details}>
        <Container>
          <div className={classes.flex}>
            <Card>
              <CardMedia style={{ width: "30rem" }}>
                <video
                  
                  style={{
                    height: "80vh",
                    width: "100%",

                    // marginTop:"0.1rem",

                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }} controls
                >
                  <source src={props.videoUrl}></source>
                </video>
              </CardMedia>
            </Card>
            <Card className={classes.cover} style={{ overflow: "auto" }}>
              <div className={classes.hidden}>
                <CardMedia>
                  <Avatar alt="Remy Sharp " src={props.user.profileUrl}></Avatar>
                </CardMedia>
                <Typography className={classes.text}>
                  {props.userName}
                </Typography>
                <MoreVertIcon
                  style={{ marginLeft: "50%", color: "darkgray" }}
                ></MoreVertIcon>
              </div>
              <div>
                <div
                  className="cmtDiv"
                  style={{
                    overflow: "auto",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    height: "60.5vh",
                  }}
                >
                  { commentArr.map((cmnt) => {
                    // console.log(cmnt,commentArr);
                    return (
                      <>
                        <div className={classes.cmntBox}>
                          <Avatar
                            className={classes.avtar}
                            src={cmnt.profileUrl}
                          ></Avatar>
                          <Typography className={classes.txt}>
                            {cmnt.username}
                          </Typography>
                          <Typography className={classes.cmnt}>
                            {cmnt.comment}
                          </Typography>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
              <div className={classes.noBody}>
                <FavouriteIcon
                  stroke="white"
                  strokeWidth="1"
                  className={[
                    props.isLiked == true ? classes.Liked : classes.notLiked,
                    classes.icon,
                    classes.heart,
                  ]}
                  onClick={() => {
                    props.handleLiked(props.puid);
                  }}
                ></FavouriteIcon>
                <Typography style={{ color: "gray" }}></Typography>
                {props.isLiked == true ? (
                  <Typography style={{ color: "gray", marginLeft: "2rem" }}>
                    Liked By Somebody
                  </Typography>
                ) : (
                  <Typography style={{ color: "gray", marginLeft: "2rem" }}>
                  
                    Liked By Nobody
                  </Typography>
                )}
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <input
                  style={{
                    marginTop: "1.7rem",
                    border: "none",
                    borderBottom: "2px solid darkgray",
                    outline: "none",
                    fontSize: "1rem",
                    width: "30rem",
                  }}
                  value={userComment}
                  placeholder="Add a Comment"
                  onChange={(e) => {
                    handleComment(e);
                  }}
                ></input>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={(e) => {
                    addComment(e);
                  }}
                >
                  POST
                </Button>
              </div>
            </Card>
          </div>
        </Container>
      </div>
    </>
  );
}
//98212

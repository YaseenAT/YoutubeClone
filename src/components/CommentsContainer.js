import React from "react";
import usericon from "../icons/usericon.png";

const commentsData = [
  {
    name: "Shruti",
    text: "lorem ipsum dolor sit",
    replies: [
      {
        name: "Shruti",
        text: "lorem ipsum dolor sit",
        replies: [
          { name: "Shruti", text: "lorem ipsum dolor sit", replies: [] },
        ],
      },
      {
        name: "Shruti",
        text: "lorem ipsum dolor sit",
        replies: [],
      },
    ],
  },
  {
    name: "Shruti",
    text: "lorem ipsum dolor",
    replies: [
      {
        name: "Shruti",
        text: "lorem ipsum dolor sit",
        replies: [],
      },
      {
        name: "Shruti",
        text: "lorem ipsum dolor sit",
        replies: [
          { name: "Shruti", text: "lorem ipsum dolor sit", replies: [] },
        ],
      },
    ],
  },
  {
    name: "Shruti",
    text: "lorem ipsum",
    replies: [],
  },
];

// compoenent for 1 comment
const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-lg bg-gray-100 p-2 rounded-lg my-2">
      <img src={usericon} alt="userimage" className="h-10 w-10" />

      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

// component for comments list pass a comment list in it it will render the list map over

// loop in through all the comment list
const CommentsList = ({ comments }) => {
  return comments.map((comment, ind) => (
    <div key={ind}>
      <Comment data={comment}  />

      <div className="pl-5 border-l-black border ml-5">
      {/* replies are a list of comments once again i.e recursing the component itself calling CommentsList within it only  */}

      {/* <Comment data={comment} key={ind} />
      <Comment data={comment} key={ind} />
      <Comment data={comment} key={ind} /> */}


{/* for each comment recursing it with comment.replies   */}
      <CommentsList comments = {comment.replies} />

      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>

      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;

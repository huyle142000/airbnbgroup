import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListCommentAPI } from "../../../redux/actions/CommentAction";

export default function FooterDetail(props) {
  const { inforRoom } = props;
  const { arrListComment } = useSelector((state) => state.CommentReducer);

  console.log(arrListComment);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListCommentAPI(inforRoom?.id));
  }, [inforRoom?.id]);
  const userComment=(id)=>{

  }
  const renderComments = () => {
    let storageStar = 0;
    let storageReview = 0;
    return <div className="row">
      {arrListComment.map((cmt)=>{
        <div className="col-6">

        </div>
      })}
    </div>;
  };
  return <div>FooterDetail</div>;
}

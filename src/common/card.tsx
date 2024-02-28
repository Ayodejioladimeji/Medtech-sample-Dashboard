import Image from "next/image";
import React, { useState, useContext } from "react";
import moment from "moment";
import { useRouter } from "next/router";
import { DeleteRequest, PostRequest } from "@/utils/request";
import cogoToast from "cogo-toast";
import Loading from "./loading";
import { DataContext } from "@/store/GlobalState";
import { ACTIONS } from "@/store/Actions";

type Props = {
  _id: string;
  image: any;
  title: string;
  content: string;
  category: string;
  createdAt: string;
};

const Card = (props: Props) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState("");
  const { state, dispatch } = useContext(DataContext);

  // handle delete
  const handleDelete = async (newId) => {
    setId(newId);
    setLoading(true);

    const res = await DeleteRequest(`/delete-blog/${newId}`);
    if (res?.status === 200) {
      // delete image from cloudinary
      const payload = {
        public_id: props?.image?.public_id,
      };
      await PostRequest("/delete-image", payload);

      dispatch({
        type: ACTIONS.DELETECALLBACK,
        payload: !state?.deletecallback,
      });

      cogoToast.success("Blog deleted successfully");
      setLoading(false);
    } else {
      setLoading(false);
    }
  };

  //
  return (
    <div className="card">
      <div
        className="card-image"
        onClick={() => router.push(`/blogs/articles/${props._id}`)}
      >
        <Image
          src={props?.image?.url}
          alt=""
          width={100}
          height={100}
          unoptimized
        />
      </div>

      <div
        className="card-content"
        onClick={() => router.push(`/blogs/articles/${props._id}`)}
      >
        <h3>{props?.title}</h3>
        <p>Updated at {moment(props?.createdAt).format("ll")}</p>
      </div>

      <div className="card-footer">
        <button
          className="edit"
          onClick={() => router.push(`/blogs/${props?._id}`)}
        >
          Edit
        </button>
        <button onClick={() => handleDelete(props?._id)} className="delete">
          {loading && id === props?._id ? (
            <Loading
              height="20px"
              width="20px"
              primaryColor="#fff"
              secondaryColor="#fff"
            />
          ) : (
            "Delete"
          )}
        </button>
      </div>
    </div>
  );
};

export default Card;

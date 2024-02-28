import Image from "next/image";
import React, { useState } from "react";
import moment from "moment";
import { useRouter } from "next/router";
import { DeleteRequest } from "@/utils/request";
import cogoToast from "cogo-toast";

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

  // handle delete
  const handleDelete = async () => {
    setLoading(true);
    const res = await DeleteRequest("/blog");
    if (res?.status === 200) {
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
        <button onClick={handleDelete} className="delete">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;

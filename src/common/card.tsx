import Image from "next/image";
import React from "react";
import moment from "moment";
import { useRouter } from "next/router";

type Props = {
  _id: string;
  image: string;
  title: string;
  content: string;
  category: string;
  createdAt: string;
};

const Card = (props: Props) => {
  const router = useRouter();
  //
  return (
    <div
      className="card"

    >
      <div className="card-image" onClick={() => router.push(`/blogs/articles/${props._id}`)}>
        <Image src={props?.image} alt="" width={100} height={100} unoptimized />
      </div>

      <div className="card-content" onClick={() => router.push(`/blogs/articles/${props._id}`)}>
        <h3>{props?.title}</h3>
        <p>Updated at {moment(props?.createdAt).format("ll")}</p>
      </div>

      <div className="card-footer">
        <button className="edit" onClick={() => router.push(`/blogs/${props?._id}`)}>Edit</button>
        <button className="delete">Delete</button>
      </div>
    </div>
  );
};

export default Card;

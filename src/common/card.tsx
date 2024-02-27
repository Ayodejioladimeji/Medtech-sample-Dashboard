import Image from "next/image";
import React from "react";
import moment from "moment";
import { ShortenContent } from "./shortenContent";
import ReactHtmlParser from "react-html-parser";
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
      onClick={() => router.push(`/blogs/articles/${props._id}`)}
    >
      <div className="card-image">
        <Image src={props?.image} alt="" width={100} height={100} unoptimized />
      </div>

      <div className="card-content">
        <h3>{props?.title}</h3>
        {/* <p>{props?.category}</p> */}
      </div>

      <div className="card-footer">
        Updated at {moment(props?.createdAt).format("ll")}
      </div>
    </div>
  );
};

export default Card;

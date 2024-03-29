import Layout from "@/components/Layout";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import GoBack from "@/common/back";
import { useRouter } from "next/router";
import { DataContext } from "@/store/GlobalState";
import { GetRequest } from "@/utils/request";
import ReactHtmlParser from "react-html-parser";
import moment from "moment";
import Loading from "@/common/loading";

const BlogDetails = () => {
  const router = useRouter();
  const [blog, setBlog] = useState(null);
  const { slug2 } = router.query;
  const [loading, setLoading] = useState(true);

  //   get single blog
  useEffect(() => {
    if (slug2) {
      (async () => {
        const res = await GetRequest(`/blog/${slug2}`);
        setBlog(res.data);
        setLoading(false);
      })();
    }
  }, [slug2]);

  //
  return (
    <Layout>
      {loading ? (
        <div
          style={{
            height: "50vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Loading
            height="35px"
            width="35px"
            primaryColor="#000"
            secondaryColor="#000"
          />
        </div>
      ) : (
        <>
          <div className="article">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 article-left">
                  <div className="d-flex align-items-center gap-3 mb-2">
                    <GoBack />

                    <p>{moment(blog?.updatedAt).format("lll")}</p>
                  </div>

                  <h1>{blog?.title}</h1>

                  <div className="hero-footer gap-4">
                    <p>{blog?.category}</p>
                  </div>
                </div>

                <div className="col-lg-6 article-right">
                  <div className="article-right-img">
                    <Image
                      src={blog?.image?.url}
                      alt="hero"
                      width={100}
                      height={100}
                      unoptimized
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="summary">
            <div className="container">
              <div className="row">
                <p className="summary-box">
                  {ReactHtmlParser(atob(blog?.content))}
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </Layout>
  );
};

export default BlogDetails;

import React, { useContext, useEffect, useState } from "react";
import Nav from "../../components/nav";
import Layout from "@/components/Layout";
import { GetRequest } from "@/utils/request";
import { DataContext } from "@/store/GlobalState";
import { useRouter } from "next/router";
import Card from "@/common/card";
import Loading from "@/common/loading";

interface Props {}

const AllBlogs = (props: Props) => {
  const { state } = useContext(DataContext);
  const [blogs, setBlogs] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const [categories, setCategories] = useState("");

  useEffect(() => {
    (async () => {
      const res = await GetRequest("/all-blog");
      if (res?.status === 200) {
        setBlogs(res.data);
        setLoading(false);
      } else {
        setLoading(false);
      }
    })();
  }, []);

  //
  return (
    <Layout>
      <div className="all-blog">
        <div className="heading">
          <div>
            <h1>All Blogs</h1>

            <div className="dropdown">
              <select
                // value={categories}
                // onChange={(e) => setCategories(e.target.value)}
                className="form-select"
              >
                <option defaultValue="">Category</option>
                <option value="1">Business</option>
                <option value="2">General</option>
                <option value="3">News</option>
              </select>
            </div>
          </div>

          <button onClick={() => router.push("/blogs/create-blogs")}>
            Add new
          </button>
        </div>

        {loading ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Loading
              height="40px"
              width="40px"
              primaryColor="#ffc619"
              secondaryColor="#ffc619"
            />
          </div>
        ) : (
          <>
            {blogs?.length === 0 ? (
              <div
                className="order"
                style={{
                  height: "70vh",
                }}
              >
                <div className="text-center blog-empty">
                  <i className="bi bi-box"></i>
                  <p className="text-center mt-2 ">Blogs not found</p>
                </div>
              </div>
            ) : !blogs ? (
              <div
                className="order"
                style={{
                  height: "70vh",
                }}
              >
                <div className="text-center order-empty">
                  <i className="bi bi-box"></i>
                  <p className="text-center mt-2 ">All Blogs will show here</p>
                </div>
              </div>
            ) : (
              <div className="row">
                {blogs?.map((item: any, index: number) => {
                  return (
                    <div className="col-3" key={index}>
                      <Card {...item} />
                    </div>
                  );
                })}
              </div>
            )}
          </>
        )}
      </div>
    </Layout>
  );
};

export default AllBlogs;

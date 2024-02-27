import React, { useContext, useRef, useState } from "react";
import Nav from "../../components/nav";
import Editors from "@/components/editor";
import Layout from "@/components/Layout";
import { checkImage } from "@/utils/checkImage";
import cogoToast from "cogo-toast";
import { PostRequest, UploadRequest } from "@/utils/request";
import { DataContext } from "@/store/GlobalState";
import Button from "@/common/button";
import { useRouter } from "next/router";
import Image from "next/image";
import Loading from "@/common/loading";
import CameraIcon from "@/svg/CameraIcon";

interface Props {}

const initialValues = {
  image: "",
  category: "",
  title: "",
};

const CreateBlogs = (props: Props) => {
  const editorRef = useRef<any>(null);
  const [values, setValues] = useState(initialValues);
  const [selectedFile, setSelectedFile] = useState(null);
  const [initialContent, setInitialContent] = useState(null);
  const { state } = useContext(DataContext);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [uploading, setUploading] = useState(false);

  // handle change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  // handle file
  const handleFile = async (e) => {
    e.preventDefault();

    const file = e.target.files[0];

    const err = checkImage(file);
    if (err) {
      cogoToast.error(err);
      return;
    }
    setUploading(true);
    let formData = new FormData();
    formData.append("files", file);

    // upload image
    const res = await UploadRequest("/upload-image", formData);
    setSelectedFile(res.data);
    setUploading(false);
  };

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // validate input
    if (
      !values.category ||
      values.category === "----" ||
      !values.title ||
      !selectedFile
    ) {
      return cogoToast.error("Input cannot be empty");
    }

    setLoading(true);

    const payload = {
      image: selectedFile,
      category: values?.category,
      title: values?.title,
      content: btoa(editorRef.current.getContent()),
    };

    const result = await PostRequest("/blog", payload, state?.token);
    if (result.status === 200 || result.status === 201) {
      console.log(result);
      cogoToast.success(result.data.msg);
      router.push("/blogs/all-blogs");
      setLoading(false);
    } else {
      setLoading(false);
    }

    // setInitialContent(atob(btoa(editorRef.current.getContent())));
  };

  // delete image
  const deleteImage = async () => {
    const payload = {
      public_id: selectedFile?.public_id,
    };

    const res = await PostRequest("/delete-image", payload);
    console.log(res.data);
    setSelectedFile(null);
  };

  //
  return (
    <Layout>
      <div className="container create-blog">
        <h1>Write Article</h1>

        <form onSubmit={handleSubmit}>
          <div className="upload-box">
            {uploading ? (
              <Loading
                height="30px"
                width="30px"
                primaryColor="#888"
                secondaryColor="#888"
              />
            ) : (
              <>
                {selectedFile !== null ? (
                  <>
                    <Image
                      height={100}
                      width={100}
                      src={selectedFile?.url}
                      className="img-fluid"
                      alt="image"
                      unoptimized
                    />
                    <i className="bi bi-x-circle" onClick={deleteImage}></i>
                  </>
                ) : (
                  <>
                    <input
                      autoComplete="off"
                      type="file"
                      accept="image/*"
                      id="Image"
                      className="file-up"
                      onChange={handleFile}
                    />
                    <div className="upload-text">
                      <CameraIcon /> <br />
                      <i className="bi bi-upload"></i>Click to upload
                    </div>
                  </>
                )}
              </>
            )}
          </div>

          <div className="row mb-4">
            <div className="col-2">
              <div className="form-box">
                <label htmlFor="category">Category</label>
                <select
                  value={values.category}
                  name="category"
                  onChange={handleChange}
                  className="form-select"
                >
                  <option defaultValue="">----</option>
                  <option value="business">Business</option>
                  <option value="general">General</option>
                </select>
              </div>
            </div>

            <div className="col-7">
              <div className="form-box">
                <label htmlFor="asset">Title</label>
                <input
                  type="text"
                  id="asset"
                  value={values.title}
                  name="title"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="form-box">
            <Editors editorRef={editorRef} initialValue={initialContent} />
          </div>

          <div className="button-container">
            <Button
              title="Create Article"
              handlesubmit={handleSubmit}
              loading={loading}
              width="150px"
            />
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default CreateBlogs;

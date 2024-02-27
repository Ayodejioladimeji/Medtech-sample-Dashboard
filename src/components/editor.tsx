import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

export default function Editors({ editorRef, initialValue }: any) {
  return (
    <>
      <Editor
        apiKey={process.env.NEXT_PUBLIC_TINY_KEY}
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue={initialValue}
        init={{
          height: 700,
          menubar: true,
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "code",
            "help",
            "wordcount",
          ],
          toolbar:
            "undo redo | blocks | " +
            "bold italic forecolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
      {/* <button onClick={log}>Log editor content</button> */}
    </>
  );
}

// import React from "react";
// import dynamic from "next/dynamic";
// const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
// import "react-quill/dist/quill.snow.css";

// export default function Editor({ text, setText }: any) {
//   const modules = {
//     toolbar: [
//       ["bold", "italic", "underline", "strike"], // toggled buttons
//       ["blockquote", "code-block"],

//       [{ header: 1 }, { header: 2 }], // custom button values
//       [{ list: "ordered" }, { list: "bullet" }],
//       [{ script: "sub" }, { script: "super" }], // superscript/subscript
//       [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
//       [{ direction: "rtl" }], // text direction

//       [{ size: ["small", false, "large", "huge"] }], // custom dropdown
//       [{ header: [1, 2, 3, 4, 5, 6, false] }],

//       [{ color: [] }, { background: [] }], // dropdown with defaults from theme
//       [{ font: [] }],
//       [{ align: [] }],

//       ["clean"], // remove formatting button
//     ],
//     clipboard: {
//       // toggle to add extra line breaks when pasting HTML:
//       matchVisual: false,
//     },
//   };

//   const formats = [
//     "font",
//     "size",
//     "bold",
//     "italic",
//     "underline",
//     "strike",
//     "color",
//     "background",
//     "script",
//     "header",
//     "blockquote",
//     "code-block",
//     "indent",
//     "list",
//     "direction",
//     "align",
//     "link",
//     "image",
//     "video",
//     "formula",
//   ];

//   return (
//     <ReactQuill
//       theme="snow"
//       placeholder="Select Code Editor and Type...."
//       value={text}
//       onChange={setText}
//       modules={modules}
//       formats={formats}
//     />
//   );
// }

import React, { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { useEffect } from "react";

const TinyMCE = ({ get }) => {
  const [value, setValue] = useState("");
  //   const editorRef = useRef(null);
  //   const log = () => {
  //     if (editorRef.current) {
  //       console.log(editorRef.current.getContent());
  //     }
  //   };

  useEffect(() => {
    get(value);
  }, [value]);

  return (
    <>
      <Editor
        apiKey="shr4ebbg4q013zmsd1tvhpy2okxwa8frfpg8gi6llkx3m5x5"
        // onInit={(evt, editor) => (editorRef.current = editor)}
        // initialValue="<p>This is the initial content of the editor.</p>"
        value={value}
        onEditorChange={(newValue) => setValue(newValue)}
        init={{
          height: 500,
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
};

export default TinyMCE;

// tinymce.init({
//     selector: '#mytextarea',
//     plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage tinycomments tableofcontents footnotes mergetags autocorrect',
//     toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
//     tinycomments_mode: 'embedded',
//     tinycomments_author: 'Author name',
//     mergetags_list: [
//       { value: 'First.Name', title: 'First Name' },
//       { value: 'Email', title: 'Email' },
//     ],
//   });
//   // tinymce.init({
//   //   selector: '#mytextarea'
//   // });
//   const editor = document.querySelector("#prueba")
//   const form = document.querySelector("form")
//   const handleSubmit = (e) => {
//     e.preventDefault()
//     let myContent = tinymce.get("mytextarea").getContent();
//     console.log(myContent);
//     editor.innerHTML = myContent
//   }
//   form.addEventListener("submit", handleSubmit)

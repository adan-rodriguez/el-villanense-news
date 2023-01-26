import PropTypes from "prop-types";
import { /* useRef */ useState, useEffect } from "react";
import { Editor } from "@tinymce/tinymce-react";

function TinyMCE({ getContentTiny }) {
  const [value, setValue] = useState("");
  //   const editorRef = useRef(null);
  //   const log = () => {
  //     if (editorRef.current) {
  //       console.log(editorRef.current.getContent());
  //     }
  //   };

  useEffect(() => {
    getContentTiny(value);
  }, [value]);

  return (
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
  );
}

TinyMCE.propTypes = {
  getContentTiny: PropTypes.func.isRequired,
};

export default TinyMCE;

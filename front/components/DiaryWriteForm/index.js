import React, { useCallback, useRef } from "react";
import useInput from "../../hooks/useInput";
import { Form, Button, Input } from "antd";
import { ADD_DIARY_REQUEST, UPLOAD_PHOTOS_REQUEST } from "../../actions/diary";
import { useDispatch, useSelector } from "react-redux";
import { PictureFilled } from "@ant-design/icons";

const DiaryWriteForm = () => {
  const dispatch = useDispatch();
  const { photoPaths, addDiaryLoading } = useSelector((state) => state.diary);

  const [title, onChangeTitle, setTitle] = useInput("");
  const [feel, onChangeFeel, setFeel] = useInput("");
  const [content, onChangeContent, setContent] = useInput("");

  const onSubmit = useCallback(() => {
    if (!title || !title.trim()) {
      return alert("제목을 입력해주세요.");
    }
    const formData = new FormData();
    photoPaths.forEach((v) => {
      formData.append("photo", v);
    });
    formData.append("title", title);
    formData.append("content", content);
    formData.append("feel", feel);
    console.log("formData", formData);
    return dispatch({
      type: ADD_DIARY_REQUEST,
      data: formData,
    });
  }, [title, photoPaths]);

  const imageInput = useRef();

  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);

  const onChangeImages = useCallback((e) => {
    console.log("photos", e.target.files);
    const imageFormData = new FormData();
    [].forEach.call(e.target.files, (f) => {
      imageFormData.append("photo", f);
    });

    dispatch({
      type: UPLOAD_PHOTOS_REQUEST,
      data: imageFormData,
    });
  }, []);

  return (
    <Form encType="multipart/form-data" onFinish={onSubmit}>
      <input
        value={title}
        onChange={onChangeTitle}
        placeholder="제목을 입력하세요."
      />
      <input value={feel} onChange={onChangeFeel} placeholder="기분입력" />
      <textarea
        value={content}
        onChange={onChangeContent}
        maxLength={1000}
        placeholder="내용을 입력하세요."
      />

      <div>
        <input
          type="file"
          name="image"
          multiple
          hidden
          ref={imageInput}
          onChange={onChangeImages}
        />
        <Button onClick={onClickImageUpload}>
          <PictureFilled />
        </Button>
      </div>

      <Button type="primary" htmlType="submit" loading={addDiaryLoading}>
        등록
      </Button>
    </Form>
  );
};

export default DiaryWriteForm;

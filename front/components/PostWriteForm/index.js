import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { Input } from "antd";

import { useDispatch, useSelector } from "react-redux";
import {
  UPLOAD_IMAGES_REQUEST,
  REMOVE_IMAGE,
  ADD_POST_REQUEST,
} from "../../actions/post";
import useInput from "../../hooks/useInput";
import { EditFilled, PictureFilled } from "@ant-design/icons";

import {
  FormWrapper,
  ImageDeleteBtn,
  ImageEnrollBtn,
  ImagesWrapper,
  PostWriteButton,
  WriteButtonWrapper,
} from "./styles";

const PostWriteForm = () => {
  const dispatch = useDispatch();
  const { imagePaths, addPostFinish, addPostLoading } = useSelector(
    (state) => state.post
  );
  const [text, onChangeText, setText] = useInput("");

  useEffect(() => {
    if (addPostFinish) {
      setText("");
    }
  }, [addPostFinish]);

  const onSubmit = useCallback(() => {
    if (!text || !text.trim()) {
      return alert("내용을 입력해주세요.");
    }
    const formData = new FormData();
    imagePaths.forEach((v) => {
      formData.append("image", v);
    });
    formData.append("content", text);
    return dispatch({
      type: ADD_POST_REQUEST,
      data: formData,
    });
  }, [text, imagePaths]);

  const imageInput = useRef();

  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);

  const onChangeImages = useCallback((e) => {
    console.log("images", e.target.files);
    const imageFormData = new FormData();
    [].forEach.call(e.target.files, (f) => {
      imageFormData.append("image", f);
    });

    dispatch({
      type: UPLOAD_IMAGES_REQUEST,
      data: imageFormData,
    });
  }, []);

  const onRemoveImage = useCallback(
    (index) => () => {
      dispatch({
        type: REMOVE_IMAGE,
        data: index,
      });
    },
    []
  );

  const TextAreaStyles = useMemo(
    () => ({
      marginBottom: 8,
      backgroundColor: "gray",
      borderColor: "#6f6f70",
      color: "white",
      borderRadius: 10,
    }),
    []
  );

  return (
    <FormWrapper encType="multipart/form-data" onFinish={onSubmit}>
      <Input.TextArea
        style={TextAreaStyles}
        value={text}
        onChange={onChangeText}
        maxLength={140}
        placeholder="내용을 입력하세요."
      />

      <WriteButtonWrapper>
        <input
          type="file"
          name="image"
          multiple
          hidden
          ref={imageInput}
          onChange={onChangeImages}
        />
        <ImageEnrollBtn onClick={onClickImageUpload}>
          <PictureFilled />
        </ImageEnrollBtn>

        <PostWriteButton
          type="primary"
          htmlType="submit"
          loading={addPostLoading}
        >
          <EditFilled />
        </PostWriteButton>
      </WriteButtonWrapper>

      <ImagesWrapper>
        {imagePaths.map((v, i) => (
          <div key={v}>
            <img src={`http://localhost:3065/${v}`} alt={v} />
            <ImageDeleteBtn onClick={onRemoveImage(i)} />
          </div>
        ))}
      </ImagesWrapper>
    </FormWrapper>
  );
};

export default PostWriteForm;

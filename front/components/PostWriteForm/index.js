import React, { useCallback, useEffect, useRef } from "react";
import { Input, Button } from "antd";

import { useDispatch, useSelector } from "react-redux";
import { addPost, UPLOAD_IMAGES_REQUEST } from "../../actions/post";
import useInput from "../../hooks/useInput";

import {
  FormWrapper,
  ImageButton,
  PostWriteButton,
  WriteButtonWrapper,
} from "./styles";
import { EditFilled, PictureFilled } from "@ant-design/icons";

const PostWriteForm = () => {
  const { imagePaths, addPostFinish, addPostLoading } = useSelector(
    (state) => state.post
  );
  const dispatch = useDispatch();

  const [text, onChangeText, setText] = useInput("");

  useEffect(() => {
    if (addPostFinish) {
      setText("");
    }
  }, [addPostFinish]);

  const onSubmit = useCallback(() => {
    dispatch(addPost(text));
  }, [text]);

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

  return (
    <FormWrapper encType="multipart/form-data" onFinish={onSubmit}>
      <Input.TextArea
        style={{
          marginBottom: 8,
          backgroundColor: "gray",
          borderColor: "#6f6f70",
          color: "white",
          borderRadius: 10,
        }}
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
        <ImageButton onClick={onClickImageUpload}>
          <PictureFilled />
        </ImageButton>
        <PostWriteButton
          type="primary"
          htmlType="submit"
          loading={addPostLoading}
        >
          <EditFilled />
        </PostWriteButton>
      </WriteButtonWrapper>

      <div>
        {imagePaths.map((v) => (
          <div key={v} style={{ display: "inline-block" }}>
            <img src={v} style={{ width: "200px" }} alt={v} />
            <div>
              <Button>제거</Button>
            </div>
          </div>
        ))}
      </div>
    </FormWrapper>
  );
};

export default PostWriteForm;

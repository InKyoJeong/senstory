import React, { useCallback, useEffect, useRef } from "react";
import { Input, Button } from "antd";

import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../../actions/post";
import useInput from "../../hooks/useInput";

import { FormWrapper, ImageButton, PostWriteButton } from "./styles";
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
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <input type="file" multiple hidden ref={imageInput} />
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
      </div>
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

import React, { useCallback, useEffect, useRef } from "react";
import { Input, Button } from "antd";

import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../../actions/post";

import { FormWrapper } from "./styles";
import useInput from "../../hooks/useInput";

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
        style={{ marginBottom: 5 }}
        value={text}
        onChange={onChangeText}
        maxLength={140}
        placeholder="내용을 입력하세요."
      />
      <div>
        <input type="file" multiple hidden ref={imageInput} />
        <Button onClick={onClickImageUpload}>이미지 업로드</Button>
        <Button
          style={{ float: "right" }}
          type="primary"
          htmlType="submit"
          loading={addPostLoading}
        >
          등록
        </Button>
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

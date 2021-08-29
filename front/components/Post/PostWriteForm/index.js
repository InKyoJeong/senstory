import React, { useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { EditFilled, PictureFilled } from '@ant-design/icons';
import useInput from '../../../hooks/useInput';
import {
  FormWrapper,
  ImageDeleteBtn,
  ImageEnrollBtn,
  ImagesWrapper,
  PostWriteButton,
  PostWriteInput,
  WriteButtonWrapper,
} from './styles';
import { addPostRequest } from '../../../reducers/post/addPost';
import { uploadImagesRequest } from '../../../reducers/post/uploadImages';
import { removeImageRequest, REMOVE_IMAGE } from '../../../reducers/post/removeImage';

const PostWriteForm = () => {
  const dispatch = useDispatch();
  const { imagePaths, addPostFinish, addPostLoading, addPostError } = useSelector((state) => state.post);
  const [text, onChangeText, setText] = useInput('');

  useEffect(() => {
    if (addPostFinish) {
      setText('');
    }
  }, [addPostFinish]);

  useEffect(() => {
    if (addPostError) {
      alert(addPostError);
    }
  }, [addPostError]);

  const onSubmit = useCallback(() => {
    if (!text || !text.trim()) {
      return alert('내용을 입력해주세요.');
    }
    const formData = new FormData();
    imagePaths.forEach((v) => {
      formData.append('image', v);
    });
    formData.append('content', text);
    // console.log("formData", formData);
    // return dispatch({
    //   type: ADD_POST_REQUEST,
    //   data: formData,
    // });
    return dispatch(addPostRequest(formData));
  }, [text, imagePaths]);

  const imageInput = useRef();

  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);

  const onChangeImages = useCallback((e) => {
    console.log('images', e.target.files);
    const imageFormData = new FormData();
    [].forEach.call(e.target.files, (f) => {
      imageFormData.append('image', f);
    });

    // dispatch({
    //   type: UPLOAD_IMAGES_REQUEST,
    //   data: imageFormData,
    // });
    dispatch(uploadImagesRequest(imageFormData));
  }, []);

  const onRemoveImage = useCallback(
    (index) => () => {
      // dispatch({
      //   type: REMOVE_IMAGE,
      //   data: index,
      // });
      dispatch(removeImageRequest(index));
    },
    [],
  );

  return (
    <FormWrapper encType="multipart/form-data" onFinish={onSubmit}>
      <PostWriteInput value={text} onChange={onChangeText} maxLength={140} placeholder="내용을 입력하세요." />

      <WriteButtonWrapper>
        <input type="file" name="image" multiple hidden ref={imageInput} onChange={onChangeImages} />
        <ImageEnrollBtn onClick={onClickImageUpload}>
          <PictureFilled />
        </ImageEnrollBtn>

        <PostWriteButton type="primary" htmlType="submit" loading={addPostLoading}>
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

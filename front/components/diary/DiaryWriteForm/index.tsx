import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button } from 'antd';
import { FrownOutlined, LoadingOutlined, MehOutlined, SmileOutlined, StarOutlined } from '@ant-design/icons';
import useInput from '../../../hooks/useInput';
import Conditional from '../../../hocs/Conditional';
import { addDiaryRequest } from '../../../reducers/diary/addDiary';
import { uploadPhotoRequest } from '../../../reducers/diary/uploadPhoto';
import { removeDiaryPhotoRequest } from '../../../reducers/diary/removeDiaryPhoto';
import {
  DiaryContentInput,
  DiaryModalForm,
  DiaryTitleInput,
  DiaryWriteFooter,
  DiaryWriteInner,
  DiaryWriteOverlay,
  FeelButton,
  FeelButtonWrapper,
  PhotoBorder,
  PhotoDeleteBtn,
  PhotoDisplay,
  PhotoEnrollWrapper,
  TempMin,
  TempMax,
  TempWriteWrapper,
} from './styles';
import { RootState } from '../../../reducers';

const WEATHER_API_KEY = '754396fc47cf98139cb846496c61d15d';

interface DiaryWriteFormProps {
  closeModal: () => void;
}

const DiaryWriteForm = ({ closeModal }: DiaryWriteFormProps) => {
  const dispatch = useDispatch();
  const { photoPaths, addDiaryLoading, addDiaryFinish, addDiaryError } = useSelector((state: RootState) => state.diary);
  const [title, onChangeTitle, setTitle] = useInput('');
  const [content, onChangeContent, setContent] = useInput('');
  const [feel, setFeel] = useState<string | null>(null);
  const [maxtemp, setMaxtemp] = useState<any>(null);
  const [mintemp, setMintemp] = useState<any>(null);
  const [geoError, setGeoError] = useState(false);

  useEffect(() => {
    if (addDiaryError) {
      alert(addDiaryError);
    }
  }, [addDiaryError]);

  const imageInput = useRef<HTMLInputElement>(null);

  const onGeoSuccess = useCallback(
    async (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw Error('요청이 실패했습니다. 다시 시도해주세요.');
        }
        const data = await response.json();
        setMaxtemp(Math.round(data.main.temp_max));
        setMintemp(Math.round(data.main.temp_min));
      } catch (err) {
        throw err;
      }
    },
    [maxtemp, mintemp],
  );

  const onGeoError = useCallback(() => {
    setGeoError(true);
    alert('위치를 찾을 수 없습니다.');
  }, []);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
  }, []);

  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;

    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);

  useEffect(() => {
    if (addDiaryFinish) {
      setTitle('');
      setContent('');
      setFeel(null);
    }
    return () => {
      closeModal();
    };
  }, [addDiaryFinish]);

  const onSubmit = useCallback(() => {
    if (maxtemp === null && mintemp === null && !geoError) {
      return alert('날씨 로딩이 끝난 후에 등록해주세요.');
    }
    if (!title || !title.trim()) {
      return alert('제목을 입력해주세요.');
    }
    if (!content) {
      return alert('내용을 입력해주세요.');
    }
    if (!feel) {
      return alert('기분을 선택해주세요.');
    }
    const formData = new FormData();
    photoPaths.forEach((v) => {
      formData.append('photo', v);
    });
    formData.append('title', title);
    formData.append('content', content);
    formData.append('feel', feel);
    formData.append('maxtemp', maxtemp);
    formData.append('mintemp', mintemp);

    return dispatch(addDiaryRequest(formData));
  }, [title, content, feel, photoPaths, maxtemp, mintemp]);

  const onClickImageUpload = useCallback(() => {
    if (!imageInput.current) {
      return;
    }
    imageInput.current.click();
  }, [imageInput.current]);

  const onChangeImages = useCallback((e) => {
    const imageFormData = new FormData();
    [].forEach.call(e.target.files, (f) => {
      imageFormData.append('photo', f);
    });

    dispatch(uploadPhotoRequest(imageFormData));
  }, []);

  const onChangeFeel = useCallback((e) => {
    setFeel(e.target.innerText);
  }, []);

  const onResetContents = useCallback((i) => {
    dispatch(removeDiaryPhotoRequest(i));
  }, []);

  return (
    <DiaryWriteOverlay>
      <DiaryModalForm>
        <Form encType="multipart/form-data" onFinish={onSubmit}>
          <DiaryWriteInner>
            <DiaryTitleInput value={title} onChange={onChangeTitle} placeholder="제목을 입력하세요." />

            <DiaryContentInput
              value={content}
              onChange={onChangeContent}
              maxLength={500}
              placeholder="내용을 입력하세요."
              rows={4}
            />

            <TempWriteWrapper>
              <div>현재 날씨</div>
              <Conditional condition={maxtemp === null && mintemp === null}>
                <span>
                  <LoadingOutlined />
                </span>
              </Conditional>
              <Conditional condition={maxtemp !== null && mintemp !== null}>
                <span>
                  <TempMin>{mintemp}°</TempMin> / <TempMax>{maxtemp}°</TempMax>
                </span>
              </Conditional>
            </TempWriteWrapper>

            <FeelButtonWrapper onClick={onChangeFeel} feel={feel}>
              <FeelButton>
                <StarOutlined />
                Special
              </FeelButton>
              <FeelButton>
                <SmileOutlined />
                Good
              </FeelButton>
              <FeelButton>
                <MehOutlined />
                Soso
              </FeelButton>
              <FeelButton>
                <FrownOutlined />
                Bad
              </FeelButton>
            </FeelButtonWrapper>

            <PhotoDisplay>
              {photoPaths.map((v, i) => (
                <div key={v}>
                  <img src={`http://localhost:3065/${v}`} alt={v} />
                  <PhotoDeleteBtn onClick={() => onResetContents(i)} />
                </div>
              ))}
            </PhotoDisplay>

            <input type="file" name="image" hidden ref={imageInput} onChange={onChangeImages} />
            <PhotoEnrollWrapper>
              <Conditional condition={photoPaths.length === 0}>
                <PhotoBorder onClick={onClickImageUpload}>
                  <div>+</div>
                  <div>사진 추가</div>
                </PhotoBorder>
              </Conditional>
            </PhotoEnrollWrapper>
          </DiaryWriteInner>

          <DiaryWriteFooter>
            <Button type="primary" htmlType="submit" loading={addDiaryLoading}>
              등록
            </Button>
            <Button type="default" onClick={closeModal}>
              취소
            </Button>
          </DiaryWriteFooter>
        </Form>
      </DiaryModalForm>
    </DiaryWriteOverlay>
  );
};

export default DiaryWriteForm;

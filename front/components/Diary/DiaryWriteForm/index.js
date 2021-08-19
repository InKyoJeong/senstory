import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Form, Button } from "antd";
import {
  FrownOutlined,
  LoadingOutlined,
  MehOutlined,
  SmileOutlined,
  StarOutlined,
} from "@ant-design/icons";
import {
  ADD_DIARY_REQUEST,
  REMOVE_DIARY_PHOTO,
  UPLOAD_PHOTOS_REQUEST,
} from "../../../actions/diary";
import useInput from "../../../hooks/useInput";
import Conditional from "../../../hocs/Conditional";
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
} from "./styles";

const WEATHER_API_KEY = "754396fc47cf98139cb846496c61d15d";

const DiaryWriteForm = ({ closeModal }) => {
  const dispatch = useDispatch();
  const { photoPaths, addDiaryLoading, addDiaryFinish } = useSelector(
    (state) => state.diary
  );
  const [title, onChangeTitle, setTitle] = useInput("");
  const [content, onChangeContent, setContent] = useInput("");
  const [feel, setFeel] = useState(null);
  const [maxtemp, setMaxtemp] = useState(null);
  const [mintemp, setMintemp] = useState(null);
  const [geoError, setGeoError] = useState(false);

  const imageInput = useRef();

  const onGeoSuccess = useCallback(
    (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`;

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          const maxtemp = data.main.temp_max;
          const mintemp = data.main.temp_min;
          setMaxtemp(Math.round(maxtemp));
          setMintemp(Math.round(mintemp));
        });
    },
    [maxtemp, mintemp]
  );

  const onGeoError = useCallback(() => {
    setGeoError(true);
    alert("위치를 찾을 수 없습니다.");
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
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);

  useEffect(() => {
    if (addDiaryFinish) {
      setTitle("");
      setContent("");
      setFeel(null);
    }
    return () => {
      closeModal();
    };
  }, [addDiaryFinish]);

  const onSubmit = useCallback(() => {
    if (maxtemp === null && mintemp === null && !geoError) {
      return alert("날씨 로딩이 끝난 후에 등록해주세요.");
    }
    if (!title || !title.trim()) {
      return alert("제목을 입력해주세요.");
    }
    if (!content) {
      return alert("내용을 입력해주세요.");
    }
    if (!feel) {
      return alert("기분을 선택해주세요.");
    }
    const formData = new FormData();
    photoPaths.forEach((v) => {
      formData.append("photo", v);
    });
    formData.append("title", title);
    formData.append("content", content);
    formData.append("feel", feel);
    formData.append("maxtemp", maxtemp);
    formData.append("mintemp", mintemp);
    // console.log("formData", formData);
    return dispatch({
      type: ADD_DIARY_REQUEST,
      data: formData,
    });
  }, [title, content, feel, photoPaths, maxtemp, mintemp]);

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

  const onChangeFeel = useCallback((e) => {
    setFeel(e.target.innerText);
  }, []);

  const onResetContents = useCallback((i) => {
    dispatch({
      type: REMOVE_DIARY_PHOTO,
      data: i,
    });
  }, []);

  return (
    <DiaryWriteOverlay>
      <DiaryModalForm>
        <Form encType="multipart/form-data" onFinish={onSubmit}>
          <DiaryWriteInner>
            <DiaryTitleInput
              value={title}
              onChange={onChangeTitle}
              placeholder="제목을 입력하세요."
            />

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
              <Conditional condition={maxtemp && mintemp}>
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

            <input
              type="file"
              name="image"
              hidden
              ref={imageInput}
              onChange={onChangeImages}
            />
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

DiaryWriteForm.propTypes = {
  closeModal: PropTypes.func,
};

export default DiaryWriteForm;

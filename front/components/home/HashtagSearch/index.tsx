import React, { useCallback } from "react";
import Router from "next/router";
import { TagsFilled } from "@ant-design/icons";
import useInput from "../../../hooks/useInput";
import {
  SearchWrapper,
  TagSearchInput,
  TagSearchForm,
  TagSearchTitle,
} from "./styles";

const HashtagSearch = () => {
  const [tagSearch, onChangeTagSearch] = useInput("");

  const onSearch = useCallback(() => {
    Router.push(`/hashtag/${tagSearch}`);
  }, [tagSearch]);

  return (
    <SearchWrapper>
      <TagSearchTitle>
        <TagsFilled />
        <label>해시태그 찾기</label>
      </TagSearchTitle>
      <TagSearchForm>
        <TagSearchInput
          size="small"
          bordered={false}
          value={tagSearch}
          onChange={onChangeTagSearch}
          onSearch={onSearch}
        />
      </TagSearchForm>
    </SearchWrapper>
  );
};

export default HashtagSearch;

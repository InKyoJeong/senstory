import React, { useCallback } from "react";
import Router from "next/router";
import { SearchWrapper, TagSearchInput } from "./styles";
import useInput from "../../hooks/useInput";
import { TagsFilled } from "@ant-design/icons";

const HashtagSearch = () => {
  const [tagSearch, onChangeTagSearch] = useInput("");

  const onSearch = useCallback(() => {
    Router.push(`/hashtag/${tagSearch}`);
  }, [tagSearch]);

  return (
    <SearchWrapper>
      <div>
        <TagsFilled />
        <label>해시태그 검색</label>
      </div>
      <TagSearchInput
        size="small"
        bordered={false}
        value={tagSearch}
        onChange={onChangeTagSearch}
        onSearch={onSearch}
      />
    </SearchWrapper>
  );
};

export default HashtagSearch;

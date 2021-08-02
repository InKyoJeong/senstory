import React, { useCallback } from "react";
import Router from "next/router";
import { TagSearchInput } from "./styles";
import useInput from "../../hooks/useInput";

const HashtagSearch = () => {
  const [tagSearch, onChangeTagSearch] = useInput("");

  const onSearch = useCallback(() => {
    Router.push(`/hashtag/${tagSearch}`);
  }, [tagSearch]);

  return (
    <div style={{ padding: 20 }}>
      <label style={{ color: "white" }}>해시태그 검색</label>
      <TagSearchInput
        size="small"
        bordered={false}
        value={tagSearch}
        onChange={onChangeTagSearch}
        onSearch={onSearch}
      />
    </div>
  );
};

export default HashtagSearch;

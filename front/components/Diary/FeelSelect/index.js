import React, { useCallback, useState } from "react";
import Router from "next/router";
import { useSelector } from "react-redux";

const FeelSelect = () => {
  const [feelSelect, setFeelSelect] = useState(null);
  const { me } = useSelector((state) => state.user);

  const onSelect = useCallback(
    (e) => {
      setFeelSelect(e.target.innerText);
      Router.push(`/feel/${me.id}/${feelSelect}`);
    },
    [feelSelect]
  );

  return (
    <div onClick={onSelect} style={{ width: 200, height: 500, color: "white" }}>
      <div>Special</div>
      <div>Good</div>
      <div>Soso</div>
      <div>Bad</div>
    </div>
    // <SearchWrapper>
    //   <TagSearchTitle>
    //     <TagsFilled />
    //     <label>해시태그 검색</label>
    //   </TagSearchTitle>
    //   <TagSearchForm>
    //     <TagSearchInput
    //       size="small"
    //       bordered={false}
    //       value={tagSearch}
    //       onChange={onChangeTagSearch}
    //       onSearch={onSearch}
    //     />
    //   </TagSearchForm>
    // </SearchWrapper>
  );
};

export default FeelSelect;

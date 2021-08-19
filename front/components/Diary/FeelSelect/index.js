import React, { useCallback, useState } from "react";
import Router from "next/router";
import { useSelector } from "react-redux";
import { Button } from "antd";

const FeelSelect = () => {
  const { me } = useSelector((state) => state.user);

  const onSelect = useCallback((e) => {
    // console.log(e.target);
    Router.push(`/feel/${me.id}/${e.target.innerText}`);
  }, []);

  return (
    <div
      onClick={onSelect}
      style={{
        width: 200,
        height: 500,
        color: "white",
        backgroundColor: "gray",
      }}
    >
      <Button>Special</Button>
      <Button>Good</Button>
      <Button>Soso</Button>
      <Button>Bad</Button>
    </div>
  );
};

export default FeelSelect;

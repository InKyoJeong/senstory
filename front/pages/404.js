import React, { useMemo } from "react";

const Custom404 = () => {
  const pageStyle = useMemo(
    () => ({
      backgroundColor: "#2d2d2e",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }),
    []
  );

  const textStyle = useMemo(() => ({ color: "white" }), []);

  return (
    <div style={pageStyle}>
      <div>
        <h1 style={textStyle}>Page Not Found (404)</h1>
        <div style={textStyle}>페이지를 찾을 수 없습니다.</div>
      </div>
    </div>
  );
};

export default Custom404;

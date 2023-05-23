import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

export const InfoGrid = ({ v, onClick }) => {
  return (
    <>
      <div className="film" onClick={() => onClick(v.id)}>
        <Link to={"/info/"+v.id}><img src={v.url_imagen} alt="" draggable="false"/></Link>
      </div>
    </>
  );
};


import React, { useEffect, useState } from 'react';

export const InfoGrid = (v) => {
  
  return (
    <>
      <div className="film">
        <img src={v.url_imagen} alt="" draggable="false"/>
      </div>
    </>
  )
}

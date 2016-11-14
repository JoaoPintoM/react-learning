import React from 'react'

export const EstateList = ({ estates, onClickImage }) => {
  const estateList = estates.map((estate) => {
    const imgUrl = estate.picture;

    let img = <img src={imgUrl} />;
    if (!estate.picture)
      img = <b>OKAY :D</b>

    return (
      <div key={estate._id} onClick={ onClickImage.bind(this, estate._id) }>
        {img}
        <p>{estate._id}</p>
      </div>
    )
  });

  return (
    <div className="estateList">
      <div>{estateList}</div>
    </div>
  );
};

export default EstateList

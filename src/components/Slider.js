import React from "react";
import { useSelector } from "react-redux"; //Lấy dữ liệu từ redux store

const Slider = () => {
  const { banner } = useSelector((state) => state.app);
  console.log(banner);
  return (
    <div className="flex flex-col">
      {banner?.map((item) => (
        <img
          key={item.encodeId}
          src={item.banner}
          alt="banner"
          className="flex-1 object-contain"
        />
      ))}
    </div>
  );
};

export default Slider;

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"; //Lấy dữ liệu từ redux store
import { getArrSlider } from "../utils/fn";
import * as actions from "../store/actions/";

const Slider = () => {
  const { banner } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  useEffect(() => {
    const sliderEls = document.getElementsByClassName("slider-item");
    // console.log(sliderEls);
    let min = 0;
    let max = 2;
    const intervalId = setInterval(() => {
      const list = getArrSlider(min, max, sliderEls.length - 1);

      for (let i = 0; i < sliderEls.length; i++) {
        //delete classname (css)
        sliderEls[i]?.classList?.remove(
          "animate-slide-right",
          "order-last",
          "z-20"
        );
        sliderEls[i]?.classList?.remove(
          "animate-slide-left",
          "order-first",
          "z-10"
        );
        sliderEls[i]?.classList?.remove(
          "animate-slide-left2",
          "order-2",
          "z-10"
        );

        //Hide or show images
        if (list.some((item) => item === i)) {
          sliderEls[i].style.cssText = `display: block`;
        } else {
          sliderEls[i].style.cssText = `display: none`;
        }
      }

      //Add animation by adding classname
      list.forEach((item) => {
        if (item === max) {
          sliderEls[item]?.classList?.add(
            "animate-slide-right",
            "order-last",
            "z-20"
          );
        } else if (item === min) {
          sliderEls[item]?.classList?.add(
            "animate-slide-left",
            "order-first",
            "z-10"
          );
        } else {
          sliderEls[item]?.classList?.add(
            "animate-slide-left2",
            "order-2",
            "z-10"
          );
        }
      });

      sliderEls[max]?.classList?.add("animate-slide-right");

      if (min === sliderEls.length - 1) {
        min = 0;
      } else {
        min += 1;
      }

      if (max === sliderEls.length - 1) {
        max = 0;
      } else {
        max += 1;
      }

      // console.log(list);
    }, 3000);
    return () => {
      intervalId && clearInterval(intervalId);
    };
  }, []);

  const handleClickBanner = (item) => {
    if (item?.type === 1) {
      //luu id vao redux
      dispatch(actions.setCurSongId(item.encodeId));
      dispatch(actions.play(true));
    }
  };

  return (
    <div className="w-full overflow-hidden px-[59px]">
      <div className="flex w-full gap-8 pt-8">
        {banner?.map((item, index) => (
          <img
            key={item.encodeId}
            src={item.banner}
            alt="banner"
            onClick={() => handleClickBanner(item)}
            className={`slider-item flex-1 object-contain w-[30%] rounded-lg ${
              index <= 2
            } ? 'block' : 'hidden'`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;

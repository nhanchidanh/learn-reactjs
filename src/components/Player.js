import React from "react";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import * as apis from "../apis";
import icons from "../utils/icons";
import { BsPlayFill } from "react-icons/bs";
import { play } from "../store/actions";

const {
  AiFillHeart,
  AiOutlineHeart,
  BsThreeDots,
  MdSkipNext,
  MdSkipPrevious,
  CiRepeat,
  CiShuffle,
  BsFillPlayFill,
  BsPauseFill,
} = icons;

const Player = () => {
  const audioEl = new Audio(
    "https://mp3-s1-zmp3.zmdcdn.me/5fab934fd90f3051691e/5559462859543474162?authen=exp=1674558645~acl=/5fab934fd90f3051691e/*~hmac=9b05d53e0ba272cc1fc2cfe8ae8d652e&fs=MTY3NDM4NTg0NTg3NXx3ZWJWNnwwfDE0LjE3My4xMDmUsICdUngMTU3"
  );
  const { curSongId, isPlaying } = useSelector((state) => state.music);
  const [songInfo, setSongInfo] = useState(null);
  const [source, setSource] = useState(null);

  console.log(audioEl);

  useEffect(() => {
    const fetchDetailSong = async () => {
      const [res1, res2] = await Promise.all([
        apis.getDetailSong(curSongId),
        apis.getSong(curSongId),
      ]);

      if (res1.data.err === 0) {
        setSongInfo(res1.data.data);
      }

      if (res2.data.err === 0) {
        setSource(res2.data.data["128"]);
      }
    };

    fetchDetailSong();
  }, [curSongId]); //nếu curSongId thay doi thi useffect se goi lai api tra ve bai hat moi

  useEffect(() => {
    audioEl.play();
    return () => {};
  }, [curSongId]);

  const handleTogglePlayMusic = () => {
    // setIsPlaying((prev) => !prev);
  };

  return (
    <div className="bg-main-400 px-5 h-full flex">
      <div className="w-[30%] flex-auto flex items-center gap-3">
        <img
          src={songInfo?.thumbnail}
          alt="thumbnail"
          className="w-16 h-16 object-cover rounded-md"
        />
        <div className="flex flex-col">
          <span className="font-semibold text-gray-700 text-sm">
            {songInfo?.title}
          </span>
          <span className="text-xs text-gray-500">
            {songInfo?.artistsNames}
          </span>
        </div>
        <div className="flex gap-4 pl-2">
          <span>
            <AiOutlineHeart size={16} />
          </span>
          <span>
            <BsThreeDots size={16} />
          </span>
        </div>
      </div>
      <div className="w-[40%] flex-auto border flex flex-col items-center justify-center gap-2 border-gray-600 py-2">
        <div className="flex gap-8 justify-center items-center">
          <span className="cursor-pointer" title="Bật phát ngẫu nhiên">
            <CiShuffle size={24} />
          </span>
          <span className="cursor-pointer">
            <MdSkipPrevious size={24} />
          </span>
          <span
            className="p-1 border border-gray-700 rounded-full cursor-pointer hover:text-main-500"
            onClick={handleTogglePlayMusic}
          >
            {isPlaying ? <BsPauseFill size={30} /> : <BsPlayFill size={30} />}
          </span>
          <span className="cursor-pointer">
            <MdSkipNext size={24} />
          </span>
          <span className="cursor-pointer" title="Bật phát lại tất cả">
            <CiRepeat size={24} />
          </span>
        </div>

        <div>Progress bar</div>
      </div>
      <div className="w-[30%] flex-auto border border-green-600">Volume</div>
    </div>
  );
};

export default Player;

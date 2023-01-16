import { useState } from "react";

function App() {
  const [work, setWork] = useState("");
  //work: luu trữ công việc
  //setWork: set giá trị cho work
  //useState: Gần giống như store lưu trữ giá trị realtime
  console.log(work);
  return (
    <div className="flex gap-8 justify-center items-center h-screen border-red-500 border">
      <input
        className="outline-none border border-blue-600 px-4 py-2 w-[400px]"
        type="text"
        value={work}
        onChange={(e) => setWork(e.target.value)}
      />
      <button
        type="button"
        className="outline-none px-4 py-2 rounded-md text-white bg-blue-500"
      >
        add
      </button>
    </div>
  );
}

export default App;

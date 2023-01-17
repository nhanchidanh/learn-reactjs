import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [work, setWork] = useState("");
  //work: luu trữ công việc
  //setWork: set giá trị cho work
  //useState: Gần giống như store lưu trữ giá trị realtime
  const [todos, setTodos] = useState([]);
  const handleAdd = () => {
    if (todos?.some((item) => item.id === work?.replace(/\s/g, ""))) {
      toast.warn("Công việc đã được thêm vào trước đó!");
    } else {
      setTodos((prev) => [
        ...prev,
        { id: work?.replace(/\s/g, ""), job: work },
      ]);
      setWork("");
    }
  };
  // console.log(todos);

  const handleDeleteJob = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <div>
      <div className="flex flex-col gap-8 justify-center items-center h-screen border-red-500 border">
        <div className="flex gap-8">
          <input
            className="outline-none border border-blue-600 px-4 py-2 w-[400px]"
            type="text"
            value={work}
            onChange={(e) => setWork(e.target.value)}
          />
          <button
            type="button"
            className="outline-none px-4 py-2 rounded-md text-white bg-blue-500"
            onClick={handleAdd}
          >
            add
          </button>
        </div>
        <div>
          <h3 className="font-bold text-xl">Content: </h3>
          <ul>
            {todos?.map((item) => {
              return (
                <li key={item.id} className="flex gap-10 items-center my-4">
                  <span>{item.job}</span>
                  <span
                    onClick={() => handleDeleteJob(item.id)}
                    className="cursor-pointer p-2"
                  >
                    X
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  );
}

export default App;

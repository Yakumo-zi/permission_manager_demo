import UserList from "./components/UserList";
import { useEffect, useState } from "react";
import UserInfoAdd from "./components/UserInfoAdd";
import { useStore } from "./store";
function App() {
  let { userList, initUserList } = useStore();
  useEffect(() => {
    initUserList();
  },[initUserList]);
  let userMapList = userList.reduce((acc, cur) => {
    if (acc[cur.sharedDirectory]) {
      acc[cur.sharedDirectory].push(cur);
    } else {
      acc[cur.sharedDirectory] = [cur];
    }
    return acc;
  }, {});

  let [closeIdx, setCloseIdx] = useState(
    Array.from({ length: Object.keys(userMapList).length }, () => false),
  );
  useEffect(() => {
    setCloseIdx((prev) => prev);
  }, [userMapList]);
  return (
    <div className="container flex max-h-screen min-h-screen gap-2 overflow-hidden p-2">
      <div className="flex max-h-screen w-full max-w-[320px] flex-col gap-2 overflow-scroll">
        {Object.keys(userMapList).map((sharedDirectory, index) => {
          return (
            <div className="flex flex-col gap-2" key={sharedDirectory}>
              <button
                onClick={() =>
                  setCloseIdx((prev) =>
                    Array.from(
                      { length: Object.keys(userMapList).length },
                      (_, k) => (k === index ? !prev[k] : prev[k]),
                    ),
                  )
                }
                className="flex w-full select-none items-center justify-center rounded-md bg-slate-100 p-2 hover:bg-slate-200 active:bg-slate-300"
              >
                {sharedDirectory}
              </button>
              <UserList
                key={index}
                userList={userMapList[sharedDirectory]}
                close={closeIdx[index]}
              />
            </div>
          );
        })}
      </div>
      <div className="flex flex-1 items-center justify-center">
        <UserInfoAdd />
      </div>
    </div>
  );
}

export default App;

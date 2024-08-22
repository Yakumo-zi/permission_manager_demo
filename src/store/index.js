import { create } from "zustand";
/**
 * 期望的userList数据结构
 * Array<User>
 * User:{
 * id:number,
 * name:string,
 * volume:string,
 * sharedDireactory:string,
 * readonly:boolean,
 * writeable:boolean
 * }
 *
 * example:
 * const userList = [
 * {id:1,name:'user1',volume:'/data/user1',sharedDirectory:'/data/shared',readonly:true,writeable:false},
 * {id:2,name:'user2',volume:'/data/user2',sharedDirectory:'/data/shared',readonly:true,writeable:false},
 * }
 */
/**@typedef {import("../type").UserList UserList} */
/**@typedef {import("../type").User User} */

/**@type {UserList} */
let userList = [
  {
    id: 1,
    name: "user1",
    volume: "/data/user1",
    sharedDirectory: "/data/shared1",
    readonly: true,
    writeable: true,
  },
  {
    id: 2,
    name: "user2",
    volume: "/data/user2",
    sharedDirectory: "/data/shared1",
    readonly: true,
    writeable: false,
  },
  {
    id: 3,
    name: "user3",
    volume: "/data/user3",
    sharedDirectory: "/data/shared1",
    readonly: false,
    writeable: false,
  },
  {
    id: 4,
    name: "user4",
    volume: "/data/user4",
    sharedDirectory: "/data/shared1",
    readonly: false,
    writeable: true,
  },
  {
    id: 5,
    name: "user5",
    volume: "/data/user5",
    sharedDirectory: "/data/shared2",
    readonly: true,
    writeable: false,
  },
  {
    id: 6,
    name: "user6",
    volume: "/data/user6",
    sharedDirectory: "/data/shared2",
    readonly: true,
    writeable: false,
  },
  {
    id: 7,
    name: "user7",
    volume: "/data/user7",
    sharedDirectory: "/data/shared2",
    readonly: false,
    writeable: false,
  },
  {
    id: 8,
    name: "user8",
    volume: "/data/user8",
    sharedDirectory: "/data/shared2",
    readonly: false,
    writeable: true,
  },
];

async function MockGetAllUser() {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(userList);
    }, 1000);
  });
}

// eslint-disable-next-line no-unused-vars
async function getAllUser() {
  let res = fetch("http://localhost:3000/user", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(),
  });
  return (await res).json;
}

export const useStore = create((set) => ({
  userList: [],
  initUserList: async () => {
    const res = await MockGetAllUser();
    set(() => ({
      userList: res,
    }));
  },
  updateUserList: (user) => {
    set((state) => ({
      userList: state.userList.map((u) => (u.id === user.id ? user : u)),
    }));
  },
  deleteUser: (id) => {
    set((state) => ({ userList: state.userList.filter((u) => u.id !== id) }));
  },
  addUser: (user) => {
    set((state) => ({ userList: [...state.userList, user] }));
  },
}));

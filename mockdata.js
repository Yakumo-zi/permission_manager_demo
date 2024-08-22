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
export let userList =[
    {id:1,name:'user1',volume:'/data/user1',sharedDirectory:'/data/shared1',readonly:true,writeable:true},
    {id:2,name:'user2',volume:'/data/user2',sharedDirectory:'/data/shared1',readonly:true,writeable:false},
    {id:3,name:'user3',volume:'/data/user3',sharedDirectory:'/data/shared1',readonly:false,writeable:false},
    {id:4,name:'user4',volume:'/data/user4',sharedDirectory:'/data/shared1',readonly:false,writeable:true},    
    {id:5,name:'user5',volume:'/data/user5',sharedDirectory:'/data/shared2',readonly:true,writeable:false},
    {id:6,name:'user6',volume:'/data/user6',sharedDirectory:'/data/shared2',readonly:true,writeable:false},
    {id:7,name:'user7',volume:'/data/user7',sharedDirectory:'/data/shared2',readonly:false,writeable:false},
    {id:8,name:'user8',volume:'/data/user8',sharedDirectory:'/data/shared2',readonly:false,writeable:true},
]

export function updateUserList(user){
    let index = userList.findIndex((u)=>u.id === user.id)
    userList[index]=user
}
export function getUserListGroupBySharedDirectory(){
    let sharedDirectoryList = {}
    userList.forEach((user)=>{
        if(sharedDirectoryList[user.sharedDirectory]){
            sharedDirectoryList[user.sharedDirectory].push(user)
        }else{
            sharedDirectoryList[user.sharedDirectory] = [user]
        }
    })
    return sharedDirectoryList
}
import PropTypes from "prop-types";
import UserListItem from "./UserListItem";
import {cn} from '@/lib/utils'
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

function UserList({ userList ,className,close}) {
  //限制userList的类型为数组，提供类型提示
  UserList.propTypes = {
    userList: PropTypes.array.isRequired,
    className:PropTypes.string,
    close:PropTypes.bool,
  };

  return (
    <div className={cn("flex max-h-screen overflow-scroll flex-col items-center justify-start gap-2 rounded-md transition-all ease-in-out",{
        "max-h-screen":!close,
        "max-h-0":close
    },className)}>
      {userList.map((user) => {
        return <UserListItem key={user.id} {...user} />;
      })}
    </div>
  );
}

export default UserList;

import PropTypes from "prop-types";
import UserInfoEditDialog from "./UserInfoEditDialog";
import { Button } from "@/components/ui/button";
import { useStore } from "../store";
/**
 * 期望的user数据结构
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
 * const user = {id:1,name:'user1',volume:'/data/user1',sharedDirectory:'/data/shared',readonly:true,writeable:false}
 */
const UserListItem = ({
  id,
  sharedDirectory,
  name,
  volume,
  readonly,
  writeable,
}) => {
  UserListItem.propTypes = {
    id: PropTypes.number.isRequired,
    sharedDirectory: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    volume: PropTypes.string.isRequired,
    readonly: PropTypes.bool.isRequired,
    writeable: PropTypes.bool.isRequired,
  };
  let user = {
    id: id,
    name: name,
    volume: volume,
    sharedDirectory: sharedDirectory,
    readonly: readonly,
    writeable: writeable,
  };

  const spanBaseStyle = "text-sm text-gray-500 font-semibold px-2 rounded-md";

  const getPermission = () => {
    if (readonly && writeable) {
      return (
        <span className={`${spanBaseStyle} bg-cyan-300`}>Readt & Write </span>
      );
    } else if (readonly) {
      return <span className={`${spanBaseStyle} bg-sky-300`}>Read</span>;
    } else if (writeable) {
      return <span className={`${spanBaseStyle} bg-green-300`}>Write</span>;
    } else {
      return <span className={`${spanBaseStyle} bg-red-300`}>None</span>;
    }
  };

  const updateUserList = useStore((state) => state.updateUserList);

  const onEdit = (user) => {
    updateUserList(user);
  };
  return (
    <div className="flex w-full min-w-[300px] items-center justify-center gap-2 rounded-md bg-slate-200 p-2 antialiased">
      <div className="flex w-full flex-col gap-2">
        <span className="text-lg font-bold text-violet-400">{name}</span>
        <div className="flex w-full flex-col gap-2">
          <span className="text-sm">Volume: {volume}</span>
          <div>Permissions: {getPermission()}</div>
        </div>
      </div>
      <UserInfoEditDialog callback={onEdit} user={user}>
        <Button variant="outline">Edit</Button>
      </UserInfoEditDialog>
    </div>
  );
};

export default UserListItem;

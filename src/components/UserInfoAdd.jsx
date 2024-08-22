import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { useStore } from "@/store";
import { useState } from "react";
/**
 * User:{
 * name:string,
 * volume:string,
 * sharedDireactory:string,
 * readonly:boolean,
 * writeable:boolean
 * }
 */
const UserInfoAdd = () => {
  let addUser = useStore((state) => state.addUser);
  let [currentUser, setCurrentUser] = useState({
    id: new Date().getTime(), // 需要在后端生成
    name: "",
    volume: "",
    sharedDirectory: "",
    readonly: false,
    writeable: false,
  });
  return (
    <div className="grid gap-4 rounded-md border-2 p-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="username" className="text-right">
          Username
        </Label>
        <Input
          id="username"
          className="col-span-3"
          placeholder={currentUser.name}
          onChange={(e) => {
            setCurrentUser({ ...currentUser, name: e.target.value });
          }}
        />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="sharedDirectory" className="text-right">
          Directory
        </Label>
        <Input
          id="sharedDirectory"
          placeholder={currentUser.sharedDirectory}
          onChange={(e) => {
            setCurrentUser({ ...currentUser, sharedDirectory: e.target.value });
          }}
          className="col-span-3"
        />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="volume" className="text-right">
          Volume
        </Label>
        <Input
          id="volume"
          placeholder={currentUser.volume}
          className="col-span-3"
          onChange={(e) => {
            setCurrentUser({ ...currentUser, volume: e.target.value });
          }}
        />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="readonly" className="text-right">
          Readonly
        </Label>
        <Switch
          id="readonly"
          defaultValue={currentUser.readonly}
          className="col-span-3"
          onCheckedChange={(value) => {
            setCurrentUser({ ...currentUser, readonly: value });
          }}
        />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="writeable" className="text-right">
          Writeable
        </Label>
        <Switch
          id="writeable"
          defaultValue={currentUser.writeable}
          className="col-span-3"
          onCheckedChange={(value) => {
            setCurrentUser({ ...currentUser, writeable: value });
          }}
        />
      </div>
      <div className="flex items-end justify-end">
        <Button
          type="submit"
          onClick={() => {
            addUser(currentUser);
          }}
        >
          Add New User
        </Button>
      </div>
    </div>
  );
};

export default UserInfoAdd;

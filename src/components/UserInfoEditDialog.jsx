import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "./ui/switch";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import PropTypes from "prop-types";
const UserInfoEditDialog = ({ children, callback, user }) => {
  UserInfoEditDialog.propTypes = {
    children: PropTypes.element.isRequired,
    callback: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
  };
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input
                id="username"
                defaultValue={user.name}
                className="col-span-3"
                onChange={(e) => {
                  user.name = e.target.value;
                }}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="sharedDirectory" className="text-right">
                Directory
              </Label>
              <Input
                id="sharedDirectory"
                defaultValue={user.sharedDirectory}
                onChange={(e) => {
                  user.sharedDirectory = e.target.value;
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
                defaultValue={user.volume}
                className="col-span-3"
                onChange={(e) => {
                  user.volume = e.target.value;
                }}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="readonly" className="text-right">
                Readonly
              </Label>
              <Switch
                id="readonly"
                defaultChecked={user.readonly}
                className="col-span-3"
                onCheckedChange={(value) => {
                  user.readonly = value;
                }}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="writeable" className="text-right">
                Writeable
              </Label>
              <Switch
                id="writeable"
                defaultChecked={user.writeable}
                className="col-span-3"
                onCheckedChange={(value) => {
                  user.writeable = value;
                }}
              />
            </div>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button
                type="Submit"
                onClick={() => {
                  console.log(user);
                  callback(user);
                }}
              >
                Save
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UserInfoEditDialog;

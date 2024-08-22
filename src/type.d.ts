export type User={
    id:number,
    name:string,
    volume:string,
    sharedDirectory:string,
    readonly:boolean,
    writeable:boolean,
}

export type UserList=User[]

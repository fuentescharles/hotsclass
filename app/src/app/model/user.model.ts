export class User {

  constructor(

    public firstName: string,

    public lastName: string,


    public jour: string,

    public moi: string,

    public year: string,

    public email: string,

    public password: string,

    public rolePreference: string,

    public hobbies?: string[]

  ) {}

}

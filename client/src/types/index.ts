export interface IEmployee {
  readonly id: string;
  readonly avatar: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly jobTitle: string;
  readonly age: number;
  readonly bio: string;
  readonly dateJoined: string;
}

export interface IState {
  employees: {
    selected: string | null;
  };
}

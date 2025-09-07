import { createContext, useReducer } from "react";
import type { ReactNode, Dispatch } from "react";


type PersonalInfo = {
    first_name: string,
    last_name: string,
    date_of_birth: string,
    phone_number: string,
    gender: string
};

type Account = {
  email: string;
  password: string;
  confirmPassword: string;
  userAgent: string;
};

type Profile = {
  username: string;
  profilePicture: any;
  bio: string;
  location: string;
  interests: string[];
};

type State = {
  currentStep: number;
  personalInfo: PersonalInfo;
  account: Account;
  profile: Profile;
};

export type UserContextType = {
  state: State;
  dispatch: Dispatch<any>;
};


export const userContext=createContext<UserContextType |undefined>(undefined)


const UserContextProvider = ({ children }: { children: ReactNode }) => {

    const initialState ={
  currentStep: 1,
  personalInfo: {
    first_name: "",
    last_name: "",
    date_of_birth: "",
    phone_number: "",
    gender: ""
  },
  account: {
    email: "",
    password: "",
    confirmPassword: "",
    userAgent: ""
  },
  profile: {
    username: "",
    profilePicture: null,
    bio: "",
    location: "",
    interests: []
  }};

    const userReducer = (state: State, action: any) => {
          
         switch(action.type)
         {
            case "UPDATE_PERSONAL_INFO":
                  return {...state,personalInfo:{...action.payload},currentStep:2}
            case "UPDATE_ACCOUNT_DETAILS":
                 return {...state,account:{...action.payload},currentStep:3}

   
            
            default: 
              return state


         }
    
        return state;
    };

    const [state, dispatch] = useReducer(userReducer, initialState);



    return ( <userContext.Provider value={{state,dispatch}}>

         {children}
     </userContext.Provider>)
}

export default UserContextProvider
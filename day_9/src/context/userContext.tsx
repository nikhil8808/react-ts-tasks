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


export const userContext=createContext<UserContextType |undefined>({
  state:{
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
  }},
  dispatch:()=>{

  }
})


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

  const getInitialState = () => {
    const storedState = localStorage.getItem("state");
    if (storedState) {
      return JSON.parse(storedState);
    }
    return undefined;
  }

    const userReducer = (state: State, action: any) => {
          let updated_state=null;
         switch(action.type)
         {
            case "UPDATE_PERSONAL_INFO":
                   updated_state= {...state,personalInfo:{...action.payload},currentStep:2}
                  localStorage.setItem("state",JSON.stringify(updated_state))
                 return updated_state
            case "UPDATE_ACCOUNT_DETAILS":
                    updated_state= {...state,account:{...action.payload},currentStep:3}
                  localStorage.setItem("state",JSON.stringify(updated_state))
                 return updated_state
            case "UPDATE_PROFILE_DETAILS":
                 updated_state= {...state,profile:{...action.payload},currentStep:4}
                  localStorage.setItem("state",JSON.stringify(updated_state))
                 return updated_state
            case "RESET_FORM":
                 return initialState
            

         default: 
              return state


         }
    
        return state;
    };

    const [state, dispatch] = useReducer(userReducer, initialState,getInitialState);



    return ( <userContext.Provider value={{state,dispatch}}>

         {children}
     </userContext.Provider>)
}

export default UserContextProvider
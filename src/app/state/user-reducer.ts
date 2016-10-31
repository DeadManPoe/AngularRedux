

import {Action} from "./action";


const setMode = (user, action:Action)=>{
  if(action.payload === 'NOT_LOGGED'){
      return {
          user : {},
          mode : action.payload
      }
  }
  else {
      return (<any>Object).assign({},user, {
          mode : action.payload
      })
  }
};
const setInfo = (user, action : Action)=>{
    return (<any>Object).assign({},user,{
        user : action.payload
    });
};
export const userReducer = (user, action:Action)=>{
  switch(action.type){
      case 'SET_MODE':
          return setMode(user,action);
      case 'SET_INFO':
          return setInfo(user,action);
      default:
          return  {user :{},mode: 'NOT_LOGGER'};
  }
};
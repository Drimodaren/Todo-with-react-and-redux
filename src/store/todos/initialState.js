import { LOADING_STATE } from "./constans";

// Здесь созадем изначальное состояние

export const INITIAL_STATE={
  todos:[],
  loading: LOADING_STATE.NEVER,
  errors:'',
  form:{
    title:'',
    userId:null,
    date:null
  }
}
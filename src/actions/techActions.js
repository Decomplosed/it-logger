import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  SET_LOADING,
  TECHS_ERROR
} from './types'

export const setLoading = () => {
  return {
    type: SET_LOADING
  }
}
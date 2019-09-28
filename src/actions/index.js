import {
    FETCHING_DATA,
    FETCHING_DATA_SUCCESS,
    FETCHING_DATA_FAILURE,
    FETCHING_DATA_USER_SUCCESS,
    CHECK_AUTH,
    LOGGING_USER,
    LOGGING_USER_SUCCESS,
    LOGGING_USER_FAILURE,
    LOAD_FONTS,
    CHANGE_INDEX
  } from '../constants'
  
  import {
    makeAuth
  } from '../api'
  
  export const authUser = () => {
    console.log("Logging en proceso...")
    return {
      type: LOGGING_USER
    }
  }

  export const authUserSuccess = (userData) => {
    console.log("Logeado exitosamente")
    return {
      type: LOGGING_USER_SUCCESS,
      userData
    }
  }

  export const authUserFailure = (error) => {
    console.log("No se pudo logear exitosamente")
    return {
      type: LOGGING_USER_FAILURE,
      error: error
    }
  }

  export const fetchAuthUser = (user) => {
    try {
      return async function(dispatch){
        
        dispatch(authUser())
  
        let responseJson = await makeAuth(user.phoneNumber, user.password)
        if(responseJson.result){
          await dispatch(authUserSuccess(responseJson))
        }else{
          authUserFailure("El usuario o contraseña son incorrectos.")
        }
      }
    } catch (error) {
      authUserFailure(error)
    }
  }
    
    export const selectedTab = (index) => {
      return {
        type: CHANGE_INDEX,
        payload: index
      }
    }

    export const loadFonts = () =>{
      return {
        type: LOAD_FONTS,
        payload: true
      }
    }
  
  export const getData = () => {
    return {
      type: FETCHING_DATA
    }
  }
  
  export const getDataSuccess = (data) => {
    return {
      type: FETCHING_DATA_SUCCESS,
      data
    }
  }

  export const getDataUserSuccess = (data) => {
    return{
      type: FETCHING_DATA_USER_SUCCESS,
      data
    }
  }
  
  export const getDataPeopleSuccess = (dataPeople) => {
    return {
      type: FETCHING_DATA_PEOPLE_SUCCESS,
      dataPeople
    }
  }
  
  export const getDateFailure = (data) => {
    return {
      type: FETCHING_DATA_FAILURE
    }
  }

  export const checkAuth = () => {
    return {
      type: CHECK_AUTH
    }
  }
  
  export const fetchData = () => {
    return (dispatch) => {
  
      dispatch(getData())
  
      fetchSchedule()
        .then(([response, json]) => {
          dispatch(getDataSuccess(json))
        })
        .catch((error) => console.log(error))
    }
  
  }

  export const fetchDataUsers = () => {
    return (dispatch) => {
      dispatch(getData())

      fetchUser()
        .then(([response, json]) => {
          dispatch(getDataUserSuccess(json))
        })
        .catch((error) => console.log(error))
    }
  }
  
  export const fetchDataActors = () => {
    return (dispatch) => {
  
      dispatch(getData())
  
      fetchPeople()
        .then(([response, json]) => {
          dispatch(getDataPeopleSuccess(json))
        })
        .catch((error) => console.log(error))
    }
  }
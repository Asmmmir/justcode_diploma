


const userReducer = (state = '', action) => {
    switch (action.type) {

        case 'LOGIN_USER': 
        return {
            ...state,
            id: action.id,
            user:  action.user
        }
        case 'LOGOUT_USER':
            return {
                ...state,
                id:'',
                user: ''
            }

      default:
        return {
            id: localStorage.getItem('userId') ? localStorage.getItem('userId') : action.id,
            user: localStorage.getItem('userName') ? localStorage.getItem('userName') :  action.user
        }
    }
  };
  export default userReducer



  
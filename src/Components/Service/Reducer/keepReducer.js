const initializ = {
    user: null,
    loading: false,
    error: false,
    notes:[],
    isSuc:false
}

const keepReducer = (state = initializ, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            return {
                ...state,
                loading: true,
                error: false
            }

        case 'SIGN_ERR':
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        case 'LOG_IN':
            return {
                ...state,
                loading:true,
                error: null,
                user:action.payload

            };
        case 'LOG_ERR':
            return {
                ...state,
                loading:false,
                error: action.payload,
                user:null
            };

        case 'LOG_OUT':
            return {
                ...state,
                loading:false,
                error: null,
                user:null
            }

        case 'GETDATASUC':
            return{
                ...state,
                notes:action.payload,
                isSuc:true
            }

        default:
            return state;
    }
}

export default keepReducer;
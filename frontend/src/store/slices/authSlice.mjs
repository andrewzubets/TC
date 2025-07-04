import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "axios";

function getGuestUser() {
    return {
        id: null,
        email: null,
        role: 'guest',
        is_auth: false
    }
}

export const fetchLogin = createAsyncThunk('user/login',
    async (postData) => {
    let responseData = null
    await axios.post('/api/user/login',postData)
            .then(r => {
                responseData = r.data
            })
            .catch((error) => {
                responseData = error.response.data;
            })
    return responseData;
});

export const fetchUser = createAsyncThunk('user/get',
    async () => {
        let responseData = null
        await axios.get('/api/user')
                .then(r => {
                    responseData = r.data
                })
                .catch((error) => {
                    responseData = error.response.data;
                })
        return responseData;
    });
export const fetchLogout = createAsyncThunk('user/logout',
    async () => {
        let responseData = null
        await axios.post('/api/user/logout')
                .then(r => {
                    responseData = {success: true}
                })
                .catch((error) => {
                    responseData = error.response.data;
                })
        return responseData;
    });

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: getGuestUser(),
        status: 'idle',
        lastResponse: null,
        lastUserResponse: null,
        lastLogoutResponse: null,
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchLogin.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchLogin.fulfilled, (state, action) => {
                state.status = 'succeeded';
                const response = action.payload
                if(response.success){
                    state.user = {
                        ...action.payload.user,
                        is_auth: true
                    }
                }
                state.lastResponse = action.payload
            })
            .addCase(fetchLogin.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(fetchUser.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                const response = action.payload
                if(response.success){
                    state.user = {
                        ...action.payload.user,
                        is_auth: true
                    }
                }
                state.lastUserResponse = action.payload
            })
            .addCase(fetchUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })

            .addCase(fetchLogout.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchLogout.fulfilled, (state, action) => {
                state.status = 'succeeded';
                const response = action.payload
                if(response.success){
                    state.user = getGuestUser()
                }
                state.lastLogoutResponse = action.payload
            })
            .addCase(fetchLogout.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    },
    selectors: {
        selectAuth: state => {
            if(!state.user){
                return getGuestUser()
            }
            return state.user
        },
        selectStatus: state => {
            return state.status
        },
        selectLoginError: state => {
            return state.lastResponse?.code
        },
        selectError: state => {
            return state.error
        }
    },
})

// export const {
//     setAuth
// } = authSlice.actions

const reducer = authSlice.reducer

export default authSlice;
const {
    selectAuth,
    selectLoginError,
    selectStatus,
    selectError
} = authSlice.selectors

export {
    selectAuth,
    selectStatus,
    selectError,
    selectLoginError,
    reducer
}
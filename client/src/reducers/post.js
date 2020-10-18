import { GET_POSTS, POST_ERROR } from '../actions/types';

const initialState = {
    posts: [],
    post: null,
    loading: true,
    error: {},
};

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case GET_POSTS:
            return {
                ...state,
                loading: false,
                posts: payload,
            };
        case POST_ERROR:
            return {
                ...state,
                loading: false,
                error: payload,
            };
        default:
            return state;
    }
}
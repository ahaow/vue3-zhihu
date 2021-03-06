import { createStore } from "vuex"
import { testData, testPosts, ColumnProps } from './testData'
interface UserProps {
    isLogin: boolean;
    name?: string;
    id?: number;
    columnId?: number;
}
export interface PostProps {
    id: number;
    title: string;
    content: string;
    image?: string;
    createdAt: string;
    columnId: number;
  }

export interface GlobalDataProps {
    columns: ColumnProps[];
    posts: PostProps[]
    user: UserProps
}

const store = createStore<GlobalDataProps>({
    state: {
        columns: testData,
        posts: testPosts,
        user: {
            isLogin: true,
            name: '古尔丹',
            columnId: 1
        }
    },
    getters: {
        biggerColumnsLen(state) {
            return state.columns.filter(c => c.id > 2).length
        },
        getColumnById: (state) => (id: number) => {
            return state.columns.find(c => c.id === id)
        },
        getPostsById: (state) => (cid: number) => {
            return state.columns.filter(post => post.id === cid)
        }
    },
    mutations: {
        login(state) {
            state.user = { ...state.user, isLogin: true, name: '古尔丹' }
        },
        createPost(state, newPost) {
            state.posts.push(newPost)
        }
    }
})

export default store
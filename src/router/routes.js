import { Index } from '../views'

export default {
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            component: Index,
        },
    ]
}
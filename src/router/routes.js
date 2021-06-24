import { Index, FLL, FRC } from '../views'

export default {
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            component: Index,
        },
        {
            path: '/fll',
            component: FLL,
        },
        {
            path: '/frc',
            component: FRC,
        }
    ]
}
import Api from '@/services/Api'

export default {
        register(credentials) {
                return Api().post('register', credentials)
        },
}

// AuthService.register({
//     email: 'teste@email.com',
//     senha: '123456'
// })

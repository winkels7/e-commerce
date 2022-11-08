import Api from '@/services/Api'

export default {
        register(credentials) {
                return Api().post('cadastro', credentials)
        },
        login(credentials){
                return Api().post('login', credentials)
        },
}

// AuthService.register({
//     email: 'teste@email.com',
//     senha: '123456'
// })

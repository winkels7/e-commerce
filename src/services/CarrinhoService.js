class CarrinhoService{
    constructor(CarrinhoModel){
        this.carrinhoItem = CarrinhoModel
    }

    async get(){
        const carrinho = await this.carrinhoItem.findAll()
        return carrinho
    }

    async adicionar(carrinhoDTO){
        await this.carrinhoItem.create(carrinhoDTO)
    }
}

module.exports = CarrinhoService
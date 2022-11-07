export default class StorageTable {
    constructor() {
      this.db = null
      this.criarBanco()
      this.criarTable()
      this.popularTable()
    }
  
    criarBanco(text = 'ingressos', versao = 2) {
      const indexedDB =
        window.indexedDB ||
        window.mozIndexedDB ||
        window.webkitIndexedDB ||
        window.msIndexedDB ||
        window.shimIndexedDB
  
      this.db = indexedDB.open(text, versao)
      console.warn(`Banco criado`)
    }
  
    criarTable(param = {}) {
      this.db.onupgradeneeded = (event) => {
        console.warn(`Upgrade iniciado`)
  
        const db = event.target.result
        const store = db.createObjectStore(param.nome, {
          autoIncrement: true,
        })
  
        param.item.forEach((item) => {
          store.createIndex(item.nome, item.chaves, item.params)
        })
      }

      console.warn('Tabela criada com sucesso')
    }
  
    popularTable(param = {}) {
      this.db.onsuccess = (event) => {
        console.warn(`Sucesso iniciado`)
        
        const database = event.target.result
        const transaction = database.transaction(param.nome, param.permissao)
  
        const store = transaction.objectStore(param.action)
  
        store.clear()
  
        console.warn(`clear() -> ${this.db.result}`)
  
        console.warn(`param.nome: ${param.nome} / param.permissao: ${param.permissao} / param.action: ${param.action}`)
        
        param.campos.forEach((campos) => {
          store.add(campos.info)
          console.warn(`campos.info: ${campos.info}`)
        })

        /*const getAllRequest = store.getAll()

        console.warn(getAllRequest)

        getAllRequest.onsuccess = function() {
            const array = getAllRequest.result

            console.warn(array)

            // const maisLinhas = '<td><input class="uk-checkbox" type="checkbox" aria-label="Checkbox" /></td><td><img class="uk-preserve-width uk-border-circle" src="../assets/Icone-ticket-Png-removebg-preview (1).png" width="40" height="40" alt="ticket"/></td><td class="uk-table-link"><a class="uk-link-reset" href=""><strong class="tourEsc">Histórico</strong><br /><span id="ingresso2Esc">Meia-Entrada</span></a></td><td class="uk-text-truncate dataEsc">05/11/2022</td><td id="preco2Esc" class="uk-text-nowrap">R$ 6,00</td><td id="quant2Esc" class="uk-text-nowrap uk-text-center">1</td>'

            param.get.forEach((get) => {
                document.getElementById(get.id).innerHTML = array[get.posicao]
            })

            // document.getElementById('segundaLinha').innerHTML = maisLinhas
            // document.getElementById('terceiraLinha').innerHTML = maisLinhas

            // data = 0
            // tour = 1
            // inteira = 2
            // meia = 3
            // pcd = 4
        }*/
      }
    }
}
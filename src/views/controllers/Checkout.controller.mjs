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
  
        // const primeiroCampo = document.getElementById('id1').value
  
        // store.add(primeiroCampo)
        // store.add('segundo')
        // store.add('terceiro')
  
        const getAllRequest = store.getAll()
  
        console.warn(getAllRequest)
  
        getAllRequest.onsuccess = function() {
          const array = getAllRequest.result
  
          console.warn(array)

          const maisLinhas = '<td><input class="uk-checkbox" type="checkbox" aria-label="Checkbox" /></td><td><img class="uk-preserve-width uk-border-circle" src="../assets/Icone-ticket-Png-removebg-preview (1).png" width="40" height="40" alt="" /></td><td class="uk-table-link"><a class="uk-link-reset" href=""><strong id="tourEsc">Histórico</strong><br /><span id="ingressoEsc">Meia-Entrada</span></a></td><td id="dataEsc" class="uk-text-truncate">05/11/2022</td><td id="precoEsc" class="uk-text-nowrap">R$ 6,00</td><td id="quantEsc" class="uk-text-nowrap uk-text-center">1</td>'

          document.getElementById('segundaLinha').innerHTML = maisLinhas
  
          document.getElementById('tourEsc').innerHTML = array[0]
          document.getElementById('ingressoEsc').innerHTML = array[1]
          document.getElementById('dataEsc').innerHTML = array[2]
          document.getElementById('precoEsc').innerHTML = array[3]
          document.getElementById('quantEsc').innerHTML = array[4]
          document.getElementById('subtotalEsc').innerHTML = array[5]
          document.getElementById('totalValorEsc').innerHTML = array[6]
          document.getElementById('subtotalValorEsc').innerHTML = array[7]
        }
      }
    }
  }
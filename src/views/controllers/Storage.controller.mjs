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

        document.getElementById('idR1').innerHTML = array[0]
        document.getElementById('idR2').innerHTML = array[1]
        document.getElementById('idR3').innerHTML = array[2]
      }
    }
  }
}

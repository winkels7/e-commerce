export default class StorageTable {
  constructor() {
    this.db = null
    this.criarBanco()
  }

  criarBanco(text = 'palmeiras', versao = 2) {
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

      param.items.forEach((item) => {
        store.createIndex(item.nome, item.chaves, item.params)
      })
    }
  }
}

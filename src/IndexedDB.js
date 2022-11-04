export default {
  IndexedDB() {
    // o importante é o que importa //
    alert(`Entrou na função`)
    console.log(`Entrou na função`)

    // teste de compatibilidade
    const indexedDB =
      window.indexedDB ||
      window.mozIndexedDB ||
      window.webkitIndexedDB ||
      window.msIndexedDB ||
      window.shimIndexedDB

    const request = indexedDB.open('parquePalmeiras', 2)

    var inteiro = 12
    var meio = 6

    request.onerror = (event) => {
      alert(`Erro iniciado`)

      console.error('Um erro ocorreu com IndexedDB')
      console.error(event)

      alert(`Erro encerrado`)
    }

    request.onupgradeneeded = () => {
      alert(`Upgrade iniciado`)
      console.log(`Upgrade iniciado`)

      const db = request.result
      const store = db.createObjectStore('ingressos', {
        autoIncrement: true,
      })
      /*store.createIndex('ingresso_tipo', ['tipo'], {
                        unique: false,
                        })*/
      store.createIndex('ingresso_tour', ['tour'], {
        unique: false,
      })
      /*store.createIndex('ingresso_preco', ['preco'], {
                        unique: false,
                        })*/
      store.createIndex('ingresso_pago', ['pago'], {
        unique: false,
      })

      alert(`Upgrade encerrado`)
    }

    request.onsuccess = () => {
      // alert(`Sucesso iniciado`)
      console.log(`Sucesso iniciado`)

      var tourType = document.getElementById('form-stacked-select').value
      var ingInteiro = document.getElementById('inteira').value
      var ingMeia = document.getElementById('meia').value
      var ingPCD = document.getElementById('pcd').value
      var dataTlg = document.getElementById('dataTlg').value

      // alert(`${dataTlg}`)

      // alert(`inteiro: ${ingInteiro} meia: ${ingMeia} pcd: ${ingPCD}`)
      console.log(`inteiro: ${ingInteiro} meia: ${ingMeia} pcd: ${ingPCD}`)

      const db = request.result
      const transaction = db.transaction('ingressos', 'readwrite')

      const store = transaction.objectStore('ingressos')

      store.put({
        inteiro: ingInteiro,
        meia: ingMeia,
        pcd: ingPCD,
        tour: tourType,
        precoInt: inteiro,
        precoMei: meio,
        dataaO: dataTlg,
        pago: false,
      })

      // alert(`Sucesso encerrado`)
      console.log(`Sucesso encerrado`)
    }
  },
}
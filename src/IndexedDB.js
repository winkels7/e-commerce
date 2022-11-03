function IndexedDB(event) {
        // o importante é o que importa //
        alert(`Entrou na função`)

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

                const db = request.result
                const store = db.createObjectStore('ingressos', {
                        autoIncrement: true,
                })
                store.createIndex('ingresso_tipo', ['tipo'], { unique: false })
                store.createIndex('ingresso_tour', ['tour'], { unique: false })
                store.createIndex('ingresso_preco', ['preco'], {
                        unique: false,
                })

                alert(`Upgrade encerrado`)
        }

        request.onsuccess = () => {
                alert(`Sucesso iniciado`)

                var tourType = document.getElementById('form-stacked-select').value
                var ingInteiro = document.getElementById('inteira').value
                var ingMeia = document.getElementById('meia').value
                var ingPCD = document.getElementById('pcd').value

                var quant = ingInteiro + ingMeia + ingPCD
                var array = []

                for (var y = 0; y < ingInteiro; y++) {
                    array[y] = ingInteiro
                }

                for (y = 0 + ingInteiro; y < ingInteiro + ingMeia; y++) {
                    array[y] = ingMeia
                }

                for (y = ingInteiro + ingPCD; y < quant; y++) {
                    array[y] = ingPCD
                }

                const db = request.result
                const transaction = db.transaction('ingressos', 'readwrite')

                const store = transaction.objectStore('ingressos')

                // store.put({ tipo: tipo, tour: tour, preco: preco });
                for (var x = 0; x < quant; x++) {
                    store.put({
                            tipo: 'tipo',
                            tour: tourType,
                            preco: 'preco',
                            pago: false,
                    })
                }

                alert(`Sucesso encerrado`)
        }
}

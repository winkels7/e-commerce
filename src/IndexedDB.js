function IndexedDB (event) {
    // o importante é o que importa //
    alert(`Entrou na função`);
    
    // teste de compatibilidade
    const indexedDB =
        window.indexedDB ||
        window.mozIndexedDB ||
        window.webkitIndexedDB ||
        window.msIndexedDB ||
        window.shimIndexedDB;

    const request = indexedDB.open("parquePalmeiras", 2);

    var inteiro = 12;
    var meio = 6;

    request.onerror = (event) => {
        alert(`Erro iniciado`);

        console.error("Um erro ocorreu com IndexedDB");
        console.error(event);

        alert(`Erro encerrado`);
    };

    request.onupgradeneeded = () => {
        alert(`Upgrade iniciado`);

        const db = request.result;
        const store = db.createObjectStore("ingressos", { autoIncrement: true });
        store.createIndex("ingresso_tipo", ["tipo"], { unique: false });
        store.createIndex("ingresso_tour", ["tour"], { unique: false });
        store.createIndex("ingresso_preco", ["preco"], { unique: false });

        alert(`Upgrade encerrado`);
    };

    request.onsuccess = () => {
        alert(`Sucesso iniciado`);

        /* pegar os valore dos selects 
            var tipo = document.getElementById("tipo").value;
            var tour = document.getElementById("tour").value;
            var preco;
            if (tipo == "Inteiro") {
                preco = inteiro;
            } else {
                preco = meio;
            } 
        */

        const db = request.result;
        const transaction = db.transaction("ingressos", "readwrite");

        const store = transaction.objectStore("ingressos");
        
        // store.put({ tipo: tipo, tour: tour, preco: preco });
        store.put({ tipo: "tipo", tour: "tour", preco: "preco", pago: false });

        alert(`Sucesso encerrado`);
    }
}
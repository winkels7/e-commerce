// what the frick
// what the heck i am so confused
/* PS_TOKEN={{1FC0AC8162704F08975104B4A63F19DB}}

const PagSeguro = require('pagseguro-api')
const pag = await PagSeguro(true)

$.ajax({
    url: 'https://ws.sandbox.pagseguro.uol.com.br/v2/checkout',
    beforeSend: function(xhr) {
         xhr.setRequestHeader("Authorization", "Bearer 6QXNMEMFHNY4FJ5ELNFMP5KRW52WFXN5")
    }, success: function(data){
        alert(data);
        //process the JSON data etc
    }
}) */
const PagSeguro = require('pagseguro-api');

const pag = await PagSeguro();
pag.referencia = "BRL0123"; // Idenficador da cobrança
pag.Descricao("Cobrança por Boleto");
pag.Boleto({ // Informações do Pagador
  nome: "",
  cpf: "", 
  email: "", 
  endereco: {
    rua: "",
    rua : "",
    numero : "",
    bairro : "",
    cidade : "",
    estado : "",
    uf : "",
    cep : "",
    pais : "BR"
  }
});

// O valor fornecido deve ser em centavos.
const cobranca = await pag.Cobrar(10000); 
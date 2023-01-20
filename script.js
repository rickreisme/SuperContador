
function contar(){
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var a = window.document.getElementById("area")
    var b = window.document.getElementById('area2')
    var c = window.document.getElementById('area3')
    var res = document.getElementById("res")

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        a.style.background = "red"
        b.innerText = 'Por favor, preencha os dados necessários corretamente!'
        b.style.color = "yellow"
        window.alert('[ATENÇÃO] ERRO - Faltam dados!')
        res.innerHTML = 'Impossível contar!'
    }else{
        a.style.background = "rgb(15, 140, 4)"
        b.innerText = 'Vamos contar'
        b.style.color = "white"
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(p<=0){
            window.alert('[ATENÇÃO] Passo inválido! Considerando "Passo" como 1.')
            p=1
        }
        if(i < f){
            for(let c = i; c<=f; c+=p){ //contagem crescente
                res.innerHTML += `${c} \u{1F449}`
            }
            
        }else{
            for(let c = i; c>=f; c-=p){ //contagem regressiva
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F6A9}`
    }
}
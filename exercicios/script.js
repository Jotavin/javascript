function check(){
    let data = new Date(); 
    let ano = data.getFullYear();
    let fano = document.getElementById('txtano').value;
    let res = document.getElementById('result');
    
    
    
    if (fano.length < 4 || parseInt(fano) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        let fsex = document.getElementsByName('radsex')
        let i = ano - fano
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Masculino'
            if(i >= 0 && i < 10){
                img.setAttribute('src', './image/foto-bebe-m.png')
            }else if (i < 21) {
                img.setAttribute('src', './image/foto-jovem-m.png')
            }else if (i < 50){
                img.setAttribute('src', './image/foto-adulto-m.png')
            }else{
                img.setAttribute('src', './image/foto-idoso-m.png')
            }
        }else if (fsex[1].checked){
            genero = 'Feminino'
            if (i >= 0 && i < 10){
                img.setAttribute('src', './image/foto-bebe-f.png')
            }else if (i < 21){
                img.setAttribute('src', './image/foto-jovem-f.png')
            }else if (i < 50){
                img.setAttribute('src', './image/foto-adulto-f.png')
            }else{
                img.setAttribute('src', './image/foto-idoso-f.png')
            }
        } 
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${i} anos`
        res.appendChild(img)
    }
}
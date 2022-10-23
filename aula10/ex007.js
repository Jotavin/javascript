        function somar() {
            var tn1 = window.document.querySelector('#txtn1')
            var tn2 = window.document.querySelector('#txtn2')
            var n1 = Number(tn1.value)
            var n2 = Number(tn2.value)
            var soma = n1 + n2
            somatotal.innerHTML = `A soma entre ${n1} e ${n2} é igual a <b>${soma}</b>`            
        }

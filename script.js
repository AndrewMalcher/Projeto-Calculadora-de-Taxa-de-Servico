
    function calculateTip(event){
            event.preventDefault();
            let taxa = document.getElementById('valor').value;
            let serviceQual = document.getElementById('servicequal').value;
            let qtd = document.getElementById('qtd').value;

            if(qtd == "" | qtd <=1) {
                qtd = 1;
                document.getElementById('each').style.display = "none";
            }
            else{
                document.getElementById('each').style.display = "block";
            }
            let calc = (taxa*serviceQual)/qtd;
            calc = calc.toFixed(2)
            document.getElementById('tip').innerHTML = calc;
            document.getElementById('totaltip').style.display = "block";
        }

document.getElementById('totaltip').style.display = "none";
document.getElementById('each').style.display = "none";

document.getElementById('form').addEventListener('submit', calculateTip);

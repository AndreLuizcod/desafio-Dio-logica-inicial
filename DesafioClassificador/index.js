let nomeHeroi = "Cônan o Bárbaro"
let qtdadeXP = 20000
let XP = ""

if(qtdadeXP < 0){
  console.log("!! ERROR !! XP INVÁLIDO!!")  
  return 
}else if(qtdadeXP > 0 && qtdadeXP <= 1000){
        XP = "Ferro"
    }else if(qtdadeXP > 1000 && qtdadeXP <= 2000){
          XP = "Bronze"
        }else if(qtdadeXP > 2000 && qtdadeXP <= 5000){
              XP = "Prata"
            }else if(qtdadeXP > 5000 && qtdadeXP <= 7000){
                  XP = "Ouro"
                }else if(qtdadeXP > 7000 && qtdadeXP <= 8000){
                      XP = "Platina"
                    }else if(qtdadeXP > 8000 && qtdadeXP <= 9000){
                          XP = "Ascendente"
                        }else if(qtdadeXP > 9000 && qtdadeXP <= 10000){
                              XP = "Imortal"
                           }else if (qtdadeXP >= 10001){
                                 XP = "Radiante"
            
                                }
console.log("O Herói de nome " + nomeHeroi + " está no nível " + XP)
 
            
    

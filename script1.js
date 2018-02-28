while(true){
  let a = Math.round(Math.random()*10) //-10
  let b = Math.round(Math.random()*10) //-10
  let operator = Math.round(Math.random()*4)

  if (a==0){
    let a = Math.round(Math.random()*10) //-10
    break 
  }
  
  if (b==0){
    let b = Math.round(Math.random()*10) //-10
    break 
  }

  if (operator==0){
      let res=+(a+b)
      let res1=prompt('Сумма '+ `${a} `+' и ' + `${b} `+ '=')
      if(res==res1)alert('Наливай ещё!')
       else break 
    }

  if (operator==1){
        let res=+(a-b)
        let res1=prompt('Разность '+ `${a} `+' и ' + `${b}` + '=')
        if(res==res1)alert('Наливай ещё!')
         else break 
      }
  
  if (operator==2){
        let res=+(a*b)
        let res1=prompt('Произведение '+ `${a}` +' и ' + `${b}` + '=')
        if(res==res1)alert('Наливай ещё!')
         else break 
     }
     
  if (operator==3){
        let res=+(a/b)
        let res1=prompt('Частное'+ `${a}` + ' и ' + `${b}` + '=')
        if(res==res1)alert('Наливай ещё!')
         else break 
     }
       
}

 alert('Харе бухать!')

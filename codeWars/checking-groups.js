function groupCheck(s){
    var group = /\{\}|\[\]|\(\)/;
    while(group.test(s))
      s = s.replace(group, '');  
    return !s.length;   
  }
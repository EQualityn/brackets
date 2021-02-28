module.exports = function check(str, bracketsConfig){
  if(str.length == 0){
    return true;
  }
  for(let i = 0;i<str.length; i++){
    for(let j= 0; j<bracketsConfig.length;j++){
      if(bracketsConfig[j][0] == str[i] && bracketsConfig[j][1] == str[i+1]){
       // var remove = str.splice(i, 2);
        return check(str.slice(0, i) + str.slice(i+2), bracketsConfig);
      }
    }
  }
  return false;
 }
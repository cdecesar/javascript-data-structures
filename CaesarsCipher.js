function rot13(str) {
    // shifts 
    var relations = {
      'A':'N',
      'B':'O',
      'C':'P',
      'D':'Q',
      'E':'R',
      'F':'S',
      'G':'T',
      'H':'U',
      'I':'V',
      'J':'W',
      'K':'X',
      'L':'Y',
      'M':'Z',
      'N':'A',
      'O':'B',
      'P':'C',
      'Q':'D',
      'R':'E',
      'S':'F',
      'T':'G',
      'U':'H',
      'V':'I',
      'W':'J',
      'X':'K',
      'Y':'L',
      'Z':'M'
    }
  
    var result = '';
    for (let i = 0; i < str.length; i++){
      let character = str[i];
      let myRegex = /\w/;
      let r = myRegex.test(character);
      
      // only check shifts if the character is alphabetic
      if (r){
        result += relations[str[i]];
      } else{
        result += str[i];
      }
    }
    
    return result;
}
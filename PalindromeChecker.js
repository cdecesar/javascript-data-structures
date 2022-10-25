function palindrome(str) {
    // prepare the string before checking if it is a palindrome
    let strUsed = str.toLowerCase();
    strUsed = strUsed.split(/[^A-Za-z0-9]/g);
    strUsed = strUsed.filter( (item) => item != '' ); 
    strUsed = strUsed.join('');
    let firstHalf;
    let secondHalf;
  
    //if thr length of strUsed is odd, eliminate the character in the middle of the string
    if (strUsed.length % 2 == 0){
      firstHalf = strUsed.slice(0, Math.floor(strUsed.length / 2))
      secondHalf = strUsed.slice(Math.floor(strUsed.length / 2))
    }else{
      firstHalf = strUsed.slice(0, Math.floor(strUsed.length / 2))
      secondHalf = strUsed.slice(Math.floor(strUsed.length / 2) + 1)
    }
  
    // check if it is a palindrome or not
    for (let i = 0; i < firstHalf.length; i++){
      if (firstHalf[i] != secondHalf[secondHalf.length -1 -i]){
        return false
      }
    }
    
    return true;
}
  
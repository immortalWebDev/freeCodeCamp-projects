function rot13(str) {

    var decoded = ""
  
    for(var i = 0;i<str.length;i++)
    {
      var char = str[i]
  
      if(char >= "A" && char <= "Z")
      {
        var charCode = char.charCodeAt(0)
  
        // Apply the ROT13 shif
        // - Subtract 'A' to get zero-based index (0 for A, 1 for B, etc.)
        // - Add 13 to shift by 13 places
        // - Use modulo 26 to wrap around after 'Z'
        // - Add 'A' back to get the new ASCII code
        var newCharCode = ((charCode - 65 + 13) % 26) + 65
  
        decoded = decoded + String.fromCharCode(newCharCode)
      }
      else
      {
        decoded = decoded + char
      }
    }
  
    return decoded
  }
  
  rot13("SERR PBQR PNZC");
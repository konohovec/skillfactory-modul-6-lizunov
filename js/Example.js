$(document).ready(function() {
    let progBarFull = $('#progBarWrap').width();
    var progBarVal = 0;
    $('#progressBar').width() 
    
    let onePerc = ($('#progBarWrap').width())/100;
    let threePerc = onePerc * 3;
    let sevenPerc = onePerc * 7;
  
  
  
      $('#btn1').click(function(){
        
        if (progBarVal < progBarFull) {
          progBarVal = onePerc + progBarVal;
          $('#progressBar').width(progBarVal + 'px');    
        }
      })
  
      $('#btn2').click(function(){
        if (progBarVal < progBarFull) {
          progBarVal = threePerc + progBarVal;
          $('#progressBar').width(progBarVal + 'px');    
        }
      })
  
      $('#btn3').click(function(){
        if (progBarVal < progBarFull) {
          progBarVal = sevenPerc + progBarVal;
          $('#progressBar').width(progBarVal + 'px');    
        }
      })
  });
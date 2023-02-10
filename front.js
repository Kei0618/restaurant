
/*  時間設定*/
var date=new Date()
var myyear=date.getFullYear();
var mymonth=(date.getMonth()+1).toString().padStart(2,'0');
console.log(typeof mymonth)
var mydate=(date.getDate()+1).toString().padStart(2,'0');
 

var toldate =myyear+"-"+mymonth+"-"+mydate ;


/*document.getElementById("mydateline").min=toldate;*/
$("#mydateline").prop("min",toldate);
$("#mydateline").prop("value",toldate);
/*document.getElementById("mydateline").value=toldate;*/


/* 表單送出*/

    /**/ 
    
 




$(function () {
    $(".mysumitbtn").click(function () {
        var x=$("#name").val();
         console.log(x)
    })
    
   
})


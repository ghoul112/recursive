function reverse(){
    ch=document.getElementById("ch").value;
    ph="";
    for (let i = ch.length-1; i >-1 ; i--) {
      ph=ph+ch.charAt(i);
      }
      document.getElementById("ch").value=ph;}
function calculc(){
    ch=document.getElementById("ph").value;
    document.getElementById("ph").value=ch.length;

}


    
 
 function max(){

    arr=[a1,document.getElementById("case2").value,document.getElementById("case3").value];
    max=arr[0];
    for (i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
        
    }
    document.getElementById("res").value=max;
  }


  function min(){
 var a=parseInt(document.getElementById("case1").innerHTML)
 var b=parseInt(document.getElementById("case2").innerHTML)
 var c=parseInt(document.getElementById("case3").innerHTML)
    
    arr=[a,b,c];
    //  console.log(arr)
   
    min=arr[0];
    for (i=0;i<arr.length;i++){
        if(arr[i]<min){
            min=arr[i];
        }
        
    }
    document.getElementById("res").value=min;
  }


  function sum(){
    arr=[document.getElementById("case1").value,document.getElementById("case2").value,document.getElementById("case3").value];
    var s=0;
    for (i=0;i<arr.length;i++){
        s+=arr[i];
        
    }
    document.getElementById("res").value=s;
  }


  function fact(){

    var s=parseInt(document.getElementById("n").value);
 
    var f=1
    for(let i=1;i<=s;i++){
        f=f*i;
    }
    console.log(f)
    document.getElementById("n").value=f;
  
}


function fibanocci(u1,u2,n){
    if(n==2){
        return u2;
    }
    else {
        return fibanocci(u2,u1+u2,n-1)
    }
    

}
function premier(n){
    var i=2;
    while(n%i!==0 && i<n/2){
        i++;}
    return n%i!==0
        

    

}
function cap(ch){
    ch=document.getElementById("kh").value;
    ph=ch;
    ch=ch.charAt(0).toUpperCase()+ch.substring(1,ch.length);
    while (ph.indexOf(" ")!==-1){
        ch=ch.replace(ph.charAt(ph.indexOf(" ")+1),(ph.charAt(ph.indexOf(" ")+1)).toUpperCase());
        ph=ph.substring(ph.indexOf(" ")+1,);
        console.log(ph);
        
    }
    document.getElementById("kh").value=ch;
}

for(let i=1;i<=9; i++){
    document.write("<p> ");
    for(let j=1;j<=9; j++){
        console.log(j + "*" + i + "=" + i*j);
        document.write(i + "*" + j + "=" + i*j + " &nbsp;&nbsp;");
        if(i==j){
            break;
        }
    }
    document.write(" </p>");
}
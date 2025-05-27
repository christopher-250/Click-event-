function Button(){

    let count = 0;
    const handlerClick2 = (name) => {
        if(count < 3){
            count ++;
            console.log(`${name} you clicked me ${count} time/s`);
        }
        else{
            console.log(`Stop clicking me`);
        }
    };
    

    return(<button onClick ={() => handlerClick2("Chris")}>Click me</button>);

}
export default Button
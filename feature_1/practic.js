const printingStar = (count) => {
    for(let i = 0; i <= count; i++){
        let row = ''
        for(let j=0; j< count-i; j++){
            row += ' '
        } 
        for(let k=0; k<i; k++){
            row += `* `
        }
        console.log(row);
        
    }
    for(let i = count; i >= 0; i--){
        let row = ''
        for(let j=0; j< count-i; j++){
            row += ' '
        } 
        for(let k=0; k<i; k++){
            row += `* `
        }
        console.log(row);
        
    }
}
const arrow = () => {
    console.log(`hello there is a much better things to do at my home.`); 
}
printingStar(5)
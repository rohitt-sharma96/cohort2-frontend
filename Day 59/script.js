
function amitSeDetailLaao(details, cb){
    console.log('Details fetching...');
    
    setTimeout(()=>{
        cb({lt: 2343, lng: 3432})
    },3000)
}

//amitSeDetailLaao(address, cb)
//dukannDhundo(cordinate, cb)
//samaanLelo(samaanList, cb)
//gharAajaao(address,cb)



amitSeDetailLaao('details hai ye amit ka', function(cordinate){
    console.log(cordinate);
    });
    

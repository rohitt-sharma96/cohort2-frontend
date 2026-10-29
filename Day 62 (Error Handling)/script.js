try {
    let a = 12;
    console.log(a.name.age);
    
} catch (err) {
    console.log(err.name);    
    console.log(err.message);    
    console.log(err.stack);    
    throw new Error("something went wrong....");
    
}


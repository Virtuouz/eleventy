module.exports=value =>{
    const dataObject = new Date(value);

    return dataObject.toISOString()
}
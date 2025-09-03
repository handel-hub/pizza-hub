function query(endpoint,options) {
    return new Promise((res,rej)=>{
        setTimeout(() => {
           fetch(`http://localhost:3000/${endpoint}`,options)
           .then((response)=>{
            if(!response.ok){
                throw new Error(`http error ${response.status});
                `)
            }
            return response.json()
           }) 
           .then(res)
           .catch(rej)
        }, 2000);
    })
}


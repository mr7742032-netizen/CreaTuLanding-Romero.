const productos = [
    {
        id: '01',
        name: 'producto 1',
        description: "Lorem ipsum",
        stock:20,
        price:10000,
        category: 'nuevos',
    },
    {
        id: '02',
        name: 'producto 2',
        description: "Lorem ipsum",
        stock:13,
        price:15000,
        category: 'nuevos',
    },
    {
        id: '03',
        name: 'producto 3',
        description: "Lorem ipsum",
        stock:5,
        price:5000,
        category: 'usados',
    },
]

let error = false
export const getProducts = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(error){
                // algo paso y no se resuelve
                reject('⚠️ Hubo un error, intente más tarde. ⚠️')
            }else{
                // sale todo bien y se resuelve
                resolve(productos)
            }
        },3000)
    })
}
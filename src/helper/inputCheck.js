export function inputCheck(e,setFormData,setError){
const {name,value}=e.target
    let sanitizeValue=value
    if(name==='userName'){
        sanitizeValue=value.trimStart().replace(/[^a-zA-Z ]/g, '')
    }
    if(name==='email'){
        sanitizeValue=value.replace(/\s/g, '')
    }
    if(name==='password'){
        sanitizeValue=value.replace(/\s/g, '')
    }
    setFormData((prev)=>({...prev,[name]:sanitizeValue}))
    setError((prev)=>({...prev,[name]:''}))
}
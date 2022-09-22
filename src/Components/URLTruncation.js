import React from "react";

function urlToURLTruncation(s, limit){
    if(typeof s != 'string') return;
    if(s.length == 0) return;
    
    
    try{

        if(!limit){

            let url = new URL(s)
            console.log(url)
            let protocol = url.protocol
            let host = url.host
            let pathname = url.pathname
            
            let hostsParts = host.split('.').filter(a=>!!a)
            
            if(hostsParts[0] == "www"){
                host = hostsParts.slice(1).join('.')
            }
            let result = host+'/'

            if(pathname == "/") return result
            else{

                let truncatedPath = pathname.split("/").filter(a=>!!a)
                let searchParams = url.search
                

                if(truncatedPath.length == 2 && truncatedPath[0] == "" && truncatedPath[1].length > 0){

                    truncatedPath = truncatedPath[truncatedPath.length-1]

                    result += "/"+truncatedPath
                    result += searchParams
                    
                    return result
                }else{
                    if(truncatedPath.length!=1) result += '…/'
                    truncatedPath = truncatedPath[truncatedPath.length-1]

                    result += truncatedPath
                    result += searchParams
                    return result
                }
            }
            return result
        }else{


            let url = new URL(s)
            console.log(url)
            let protocol = url.protocol
            let host = url.host
            let pathname = url.pathname
            
            let hostsParts = host.split('.').filter(a=>!!a)
            
            if(hostsParts[0] == "www"){
                host = hostsParts.slice(1).join('.')
            }
            let result = host+'/'
            if(pathname == "/") return result
            else{

                let searchParams = url.search
                let truncatedPath = pathname.split("/").filter(a=>!!a)
                if(truncatedPath.length == 2 && truncatedPath[0] == "" && truncatedPath[1].length > 0){

                    truncatedPath = truncatedPath[truncatedPath.length-1]

                    result += "/"+truncatedPath
                    result += searchParams
                    return result
                }else{

                    if(truncatedPath.length!=1) result += '…/'
                    truncatedPath = truncatedPath[truncatedPath.length-1]

                    result += truncatedPath
                    result += searchParams
                    return result
                }
            }
            return result
        }



    }catch(error){
        return String(error)
    }
}

let URLTruncation = (props)=>{
    return <> {urlToURLTruncation(props.url, props.limit)} </>
}
export {urlToURLTruncation}
export default URLTruncation
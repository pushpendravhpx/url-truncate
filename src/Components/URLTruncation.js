import React from "react";

function urlToURLTruncation(s, limit){
    if(typeof s != 'string') return;
    if(s.length == 0) return;

    
    try{

        if(limit == undefined) limit = 65535;

        // console.log(limit, typeof limit)
        // In case if limit is not provided 
            let sss = s.split('//')
            
            if(sss[1].length < limit) return sss[1];
    
        
            // If Limit is provided

            let url = new URL(s)
            // console.log(url)
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
                if(searchParams.length > limit){
                    searchParams = searchParams.slice(0,limit) + "…"
                }
                let truncatedPath = pathname.split("/").filter(a=>!!a)
                if(truncatedPath.length == 2 && truncatedPath[0] == "" && truncatedPath[1].length > 0){

                    truncatedPath = truncatedPath[truncatedPath.length-1]
                    
                    
                if(truncatedPath.length > limit){
                    truncatedPath = truncatedPath.slice(0,limit) + "…"
                }

                    result += "/"+truncatedPath
                    result += searchParams
                    // console.log(result.length)
                    return result
                    // console.log(result.length)
                }else{

                    if(truncatedPath.length!=1) result += '…/'
                    truncatedPath = truncatedPath[truncatedPath.length-1]

                    
                    if(truncatedPath.length > limit){
                        truncatedPath = truncatedPath.slice(0,limit) + "…"
                    }
    
                    result += truncatedPath
                    result += searchParams
                    // console.log(result.length)

                    if(1){
                        let extras = limit - host.length -1 -searchParams.length

                        let allPaths = url.pathname.split('/').filter(e=>e!=truncatedPath).join('/')
                        
                        let allPathsRes = allPaths.slice(0, extras)
                        if(truncatedPath.length > extras){
                            if(searchParams.length>0)
                            truncatedPath = truncatedPath.slice(0,extras) + '…/s'
                            else
                            truncatedPath = truncatedPath.slice(0,extras)
                        }
                        let newResult = host  + allPathsRes  + '…/'+ truncatedPath+ searchParams


                        return newResult
                    }



                    return result
                }
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
import React from "react";

let urlToURLTruncation = (s)=>{
    if(typeof s != 'string') return;
    if(s.length == 0) return;
    console.log(s )
    try{

        let url = new URL(s)
        let protocol = url.protocol
        let host = url.host
        let pathname = url.pathname


        let result = protocol+"//"+host


        if(pathname == "/") return result
        else{

            let truncatedPath = pathname.split("/")
            if(truncatedPath.length == 2 && truncatedPath[0] == "" && truncatedPath[1].length > 0){

                truncatedPath = truncatedPath[truncatedPath.length-1]

                result += "/"+truncatedPath
                return result
            }else{

                truncatedPath = truncatedPath[truncatedPath.length-1]

                result += "/../"+truncatedPath
                return result
            }
        }
        return result
    }catch(error){
        return String(error)
    }
}

let URLTruncation = (props)=>{
    
    return <> {urlToURLTruncation(props.url)} </>
}
export {urlToURLTruncation}
export default URLTruncation
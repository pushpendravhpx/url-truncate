import React from "react";

let urlToURLTruncation = (s)=>{
    let url = new URL(s)
    let protocol = url.protocol
    let host = url.host
    let pathname = url.pathname
    let truncatedPath = pathname.split("/")
    truncatedPath = truncatedPath[truncatedPath.length-1]
    return protocol+"//"+host+"/../"+truncatedPath
}

let URLTruncation = (props)=>{
    return <> {urlToURLTruncation(props.url)} </>
}
export {urlToURLTruncation}
export default URLTruncation
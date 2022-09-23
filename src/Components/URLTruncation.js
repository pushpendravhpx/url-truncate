import React from "react";
function urlToURLTruncation(urlString, length) {


	if (typeof urlString !== 'string') {
		throw new TypeError('Expected input to be a string');
	}

	if (typeof length !== 'number') {
		throw new TypeError('Expected length to be a number');
	}

	if (urlString.length <= length) {
		return urlString;
	}

    let url = new URL(urlString);
    url.protocol = ''
    let protocol = url.protocol
    let host = url.host
    let pathname = url.pathname
    
    let hostsParts = host.split('.').filter(a=>!!a)
    
    if(hostsParts[0] == "www"){
        host = url.host = hostsParts.slice(1).join('.')
    }

    // Final Result String
    // OFFSET
    length += 6


    let result = host
    console.log("HOSTLENGTH", host, host.length)
    let remainingLength = length - ( host.length );

    if(url.pathname.length > 0){

        let pathParts = ['']
        let allParts = url.pathname.split('/').filter(e=>!!e)

        allParts.forEach(e=>pathParts.push(e))
        console.log(pathParts)
        let lastPathPart = pathParts[pathParts.length-1]
        let remainingParts = pathParts.filter(each=>each!=lastPathPart)
        let startpart = remainingParts.join('/').slice(0,remainingLength/3);
        console.log(url.pathname)

        if(allParts.length==1){
            result +='/'
        }else{
            if(startpart.length+1 > remainingLength/3){

                result += startpart+'…/'
            }else{

                result += startpart
            }
        }

        
        
        if(lastPathPart.length > remainingLength/3){
            
            result += lastPathPart.slice(0, remainingLength/3)+'…/'
        }else{
            result += lastPathPart
        }

        let queryPart = url.search;
        if(queryPart.length > remainingLength/3){
            result += queryPart.slice(0, remainingLength/3)+'…';
        }else{
            result += queryPart.slice(0, remainingLength/3)
        }
        return result;


    }else{
        return urlString
    }


	// const TRUNCATE_SYMBOL_LENGTH = 2;
    
	// const parsed = new URL(urlString);
    // console.log(parsed)
	// let remainingLength = length - (urlString.length - parsed.pathname.length) - TRUNCATE_SYMBOL_LENGTH;
	// const pathParts = parsed.pathname.split('/');

	// const pathPartsReturnValue = [];
	// let index = pathParts.length;

	// while (index--) {
    //     console.log(index)
	// 	const x = pathParts[index];

	// 	if (remainingLength < x.length + 1) {
	// 		pathPartsReturnValue.push('…');
	// 		break;
	// 	}

	// 	pathPartsReturnValue.push(x);
	// 	remainingLength -= x.length + 1;
	// }
    // console.log(parsed.toString(), pathPartsReturnValue, pathPartsReturnValue.reverse().join('/'))
    
	// parsed.pathname = '..';
    // let ss = pathPartsReturnValue.reverse().join('/');
	// return parsed.hostname + '/' + ss +'/'+ parsed.search ;



}
function urlToURLTruncation1(s, limit){
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
                            truncatedPath = truncatedPath.slice(0,extras) + '…/'
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
function solve(input){
    let URIRegex = /^(?:\*|[\w.]+)$/;
    let messagePattern = /[<>\\\&\'\"]+/;

    if (input['method'] != 'GET' && input['method'] != 'POST' &&input['method'] != 'DELETE' &&input['method'] != 'CONNECT'){
        throw new Error('Invalid request header: Invalid Method');
    }

    if (!input['uri']){
        throw new Error('Invalid request header: Invalid URI');
    }

    if (input['uri'] != '*'){
        let match = input['uri'].match(URIRegex);
        if (!match){
            throw new Error('Invalid request header: Invalid URI');
        }
    }

    if (input['version'] != 'HTTP/0.9' && input['version'] != 'HTTP/1.0' && input['version'] != 'HTTP/1.1' && input['version'] != 'HTTP/2.0'){
        throw new Error('Invalid request header: Invalid Version');
    }

    if ((input['message'] === undefined) || ((messagePattern.test(input['message'])) == true)) {
        throw new Error ('Invalid request header: Invalid Message');
    }

    return input;
}

solve({
    method: 'POST',
    version: 'HTTP/2.0',
    message: 'rm -rf /*'
}
  
  );
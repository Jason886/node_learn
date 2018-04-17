var http = require('http');

function _server_handle(request, response) {
    // ����HTTPͷ��
    // HTTP״ֵ̬: 200 OK
    // ��������: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});
    // ������Ӧ���� "Hello World"
    response.end('Hello World\n');
}

var server = http.createServer(_server_handle);
server.listen(8888);
console.log('Server running at http://127.0.0.1:8888');

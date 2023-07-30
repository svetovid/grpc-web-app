# gRPC demo

## client.js

1. Generate grpc js based on proto (note target folder should exist)
`protoc tagHub.proto --js_out=import_style=commonjs:./protoJS --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./protoJS`
2. Install webpack
`npm install -g webpack-cli`
3. Init web project
`npx webpack init ./grpc-web-app --force --template=default`
4. modify index.js
```
	const {TagGroupRequest} = require('./tagHub_pb.js');
    const {TagHubClient} = require('./tagHub_grpc_web_pb.js');

    // connect to envoy proxy in order to transform HTTP/1.1 to HTTP/2 and back
    var client = new TagHubClient('http://localhost:5131', null, null);
    var stream;

    // simple unary call
    getTags = function() {
        var request = new TagGroupRequest();
        request.setName('screen1');
        
        client.getTags(request, {}, (err, response) => {
            if (err) {
                console.log(`Unexpected error for getScreenTags: code = ${err.code}` +
                        `, message = "${err.message}"`);
            } else {
                onDataReceived(response.getTagsList());
            }
        });
    };

    // server streaming call
    connectToHub = function() {
        if (stream !== null && stream !== undefined)
            return;

        var streamRequest = new TagGroupRequest();
        streamRequest.setName('screen1');

        stream = client.connectToHub(streamRequest, {});
        stream.on('data', (response) => {
            onDataReceived(response.getTagsList());
        });
        stream.on('error', (err) => {
            console.log(`Unexpected stream error: code = ${err.code}` +
                `, message = "${err.message}"`);
        });
    };

    disconnectFromHub = function() {
        if (stream !== null && stream !== undefined) {
            stream.cancel();
            stream = null;
        }
    };

    function onDataReceived(tags) {
        let formattedTags = [];
        tags.forEach(t => {
            formattedTags.push({id: t.getId(), value: t.getValue()});
            if(t.getId() === 'tag_1')
                renderGauge(t.getValue());
        });
        logTagValues(formattedTags);
    }
```
5. copy generated grpc client files to src of web project
6. Build project
`npx webpack build`
7. run in nginx docker 
`docker run --name grpc-web-nginx -p 8090:80 -v $PWD/dist:/usr/share/nginx/html:ro -d nginx`

**Note**: grpc-web doesn't work with HTTP/2 protocol. Use either `envoy proxy` or any other that can transform HTTP/1.1 requests into HTTP/2
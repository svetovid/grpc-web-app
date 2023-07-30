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

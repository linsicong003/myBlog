const http = require('http')
const spawn = require('child_process').spawn;
const createHandler = require('github-webhook-handler')
const secret = 'iXB9g0lSqBTxwNwmF3nznLA3ixNyF8QC3E9av1HY7VOeF43GuDguhfTH0RNfXzFDT51phU6rr46nWXtLK8FBCnRQP0W4fN4ZqI3cWt9adOkzzeIRW3gsy71Tzm8w5SSByTermSWpIPwcg3iM98lF6pB0m2QyK5x5E5Jl5BVnZ0hNwomsTCLo5EPRvZBIh1pmVRtf8utwYYmjRLxZpxKaLTwHf1g2aXHn37t1jVfHCa49EIV6mW4dQC3o5d2bkxun'
const handler = createHandler({ path: '/update', secret: secret })
// 上面的 secret 保持和 GitHub 后台设置的一致

function run_cmd(cmd, args, callback) {
    let child = spawn(cmd, args);
    let resp = "";

    child.stdout.on('data', function (buffer) { resp += buffer.toString(); });
    child.stdout.on('end', function () { callback(resp) });
}

http.createServer(function (req, res) {
    handler(req, res, function (err) {
        res.statusCode = 404
        res.end('no such location')
    })
}).listen(7777)

handler.on('error', function (err) {
    console.error('Error:', err.message)
})

handler.on('push', function (event) {
    console.log('Received a push event for %s to %s',
        event.payload.repository.name,
        event.payload.ref);
    console.log('Do bash')
    run_cmd('sh', ['./update.sh'], function (text) {
        console.log('--------------------------Complete my Update!--------------------------/n', text)
    });
})

/*
handler.on('issues', function (event) {
  console.log('Received an issue event for % action=%s: #%d %s',
    event.payload.repository.name,
    event.payload.action,
    event.payload.issue.number,
    event.payload.issue.title)
})
*/
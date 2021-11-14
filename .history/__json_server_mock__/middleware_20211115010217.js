module.exports = (req, res, next) => {
    if (req.method === 'POST' && req.path === '/login'){
        if(req.body.username === 'jack')
    }
}
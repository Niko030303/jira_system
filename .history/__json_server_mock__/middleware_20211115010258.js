module.exports = (req, res, next) => {
    if (req.method === 'POST' && req.path === '/login'){
        if(req.body.username === 'jack' && req.body.password === '123456'){
            return res.status(200).json({
                
            })
        }
    }
}
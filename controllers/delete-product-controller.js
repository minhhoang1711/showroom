var session=require('./session')

exports.get= function(request,response, webconfig, model){
    if(!session.logged(request)){
        response.redirect(webconfig)
        return
    }

    model.deleteProduct(request.query.id, function (err){
        response.redirect(webconfig.root + '#products')
    })
}
export var requirements=(verification:String[])=>{
    return (req,res,next)=>{
        let errArr = [];
        for (let index = 0; index < verification.length; index++) {
            const element = verification[index];
            if (!req.body[element.toString()]) errArr.push('Error ' + element + ' is undifined');
        }
        if (errArr.length > 0) {
            res.json({
                status: false,
                msg: errArr
            });
        } else {
            next()
        }
    }
}

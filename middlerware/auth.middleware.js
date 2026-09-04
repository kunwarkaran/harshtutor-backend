export function authMiddleWare(req,res,next) {
    try {
        
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res.status(401).json({
                message: "Authorization token is required",
            });
        }

        const token = authHeader.split(" ") [1];
        if (!token) {
            return res.status(401).json({
                message: "Authorization token is required",
            });
            
        }
        next();  
    
    } catch (error) {
        next(error)
    }
}
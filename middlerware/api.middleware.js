export function apiMiddleWare(req,res,next) {
    try {
        const apiKeyHeader = req.get("api-key");
        if (!apiKeyHeader) {
            return res.status(401).json({
                message: "Api key is required",
            });
        }

        if (apiKeyHeader !== process.env.API_KEY) {
            return res.status(401).json({
                message: "API Key is not valid",
            });
            
        }
        next();  
    
    } catch (error) {
        next(error)
    }
}
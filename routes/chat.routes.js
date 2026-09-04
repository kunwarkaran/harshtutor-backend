import { Router } from "express";
import geminiresponse from "../llm-models/gemini.js";

const router = Router();

router.get('/',(req,res) => {
    return res.status(200).json({"message" : "This is the auth route"})
})

router.post('/', async (req,res) => {
    const {query} = req.body;
    if(!query) {
        return res.status(400).json({
        "message" : "query is required field"
        })
    }

    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");

    res.flushHeaders();

    try {
    const stream = await geminiresponse(query);

    for await (const event of stream) {
      console.log(event);

      if (
        event.event_type === "step.delta" &&
        event.delta?.type === "text"
      ) {
        res.write(
          `data: ${JSON.stringify(event.delta.text)}\n\n`
        );
      }
    }

    res.write(`event: done\ndata: {}\n\n`);
    res.end();

  } catch (error) {
    console.error(error);
    res.end();
    next(error);
  }
})

export default router;

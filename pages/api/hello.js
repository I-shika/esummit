// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'node:fs';
export default function handler(req, res) {
  fs.readFile("data/trial-one.json",'utf-8',(err,data)=>{console.log(req.query)
  res.status(200).json(JSON.parse(data))
  })
} 

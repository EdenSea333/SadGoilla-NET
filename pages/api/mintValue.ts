import { NextApiRequest, NextApiResponse } from "next";
import mysql from "serverless-mysql";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  //read value from file
  var db = mysql({
    config: {
      host: process.env.NEXT_PUBLIC_host,
      port: Number(process.env.NEXT_PUBLIC_port),
      user: process.env.NEXT_PUBLIC_user,
      password: process.env.NEXT_PUBLIC_password,
      database: process.env.NEXT_PUBLIC_database,
    },
  });

  const data: any = await db.query(`SELECT * FROM data limit 1`);
  await db.end();
  res.json({ value: data[0].mintValue });
}

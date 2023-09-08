import { NextApiRequest, NextApiResponse } from "next";
import mysql from "serverless-mysql";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.body.secret !== "11_!Gorilla_sec") {
    res.json({ success: false, status: 401, message: "Unauthorized" });
    return;
  }

  var db = mysql({
    config: {
      host: process.env.NEXT_PUBLIC_host,
      port: Number(process.env.NEXT_PUBLIC_port),
      user: process.env.NEXT_PUBLIC_user,
      password: process.env.NEXT_PUBLIC_password,
      database: process.env.NEXT_PUBLIC_database,
    },
  });
  try {
    const data: any = await db.query(`SELECT * FROM data limit 1`);
    const prevValue = Number(data[0].mintValue);
    const newValue = prevValue - 1;
    await db.query(`update data set mintValue = ${newValue}`);
    await db.end();
    res.json({ success: true });
  } catch (e) {
    res.json({ success: false });
  }
}

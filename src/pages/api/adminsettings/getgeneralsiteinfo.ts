import { db } from "@/app/lib/db";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: true, message: "Method Not Allowed" });
  }

  try {
    const [rows]: any[] = await db.execute("SELECT siteInfo FROM adminsettings LIMIT 1");

    if (!Array.isArray(rows) || rows.length === 0) {
      return res.status(404).json({ error: true, message: "No Data Found" });
    }

    const siteInfo = JSON.parse(rows[0].siteInfo || "{}");
    return res.status(200).json({ error: false, message: "Data fetched", siteInfo });
  } catch (err) {
    console.error("Error fetching siteInfo", err);
    return res.status(500).json({ error: true, message: "Error Fetching siteInfo" });
  }
}

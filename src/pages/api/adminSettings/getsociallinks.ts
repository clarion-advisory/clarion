import { db } from "@/app/lib/db";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: true, message: "Method Not Allowed" });
  }

  try {
    const [rows]: any[] = await db.execute("SELECT socialLinks FROM adminsettings LIMIT 1");

    // Log result for debugging
    console.log("DB Result:", rows);

    const row = Array.isArray(rows) && rows.length > 0 ? rows[0] : null;

    if (!row) {
      return res.status(404).json({ error: true, message: "No Data Found" });
    }

    const socialLinks = JSON.parse(row.socialLinks || "{}");

    return res.status(200).json({
      error: false,
      message: "SocialLinks fetched!",
      socialLinks,
    });
  } catch (err) {
    console.error("Error fetching Social Links:", err);
    return res.status(500).json({ error: true, message: "Internal Server Error" });
  }
}

import type { NextApiRequest, NextApiResponse } from "next";
import { fetchEventbriteEvents } from "../../lib/eventbrite";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const events = await fetchEventbriteEvents();
    console.log("Fetched Events:", events); // Debugging

    if (!Array.isArray(events)) {
      res.status(500).json({ message: "Invalid events data structure." });
      return;
    }

    res.status(200).json(events);
  } catch (error) {
    console.error("Error in API route:", error);
    res.status(500).json({ message: "Failed to fetch events." });
  }
}

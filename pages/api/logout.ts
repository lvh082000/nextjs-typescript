// when going to api, except hello, all will be matched with AAA
import Cookies from "cookies";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
};

export const config = {
  api: {
    bodyParser: false,
  },
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    return res.status(404).json({ message: "method not supported" });
  }

  const cookies = new Cookies(req, res);
  // remove
  cookies.set("access_token");

  res.status(200).json({ message: "logout successfully" });
}

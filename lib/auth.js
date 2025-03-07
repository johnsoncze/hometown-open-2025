import { getServerSession } from "next-auth/next";
import { authOptions } from "../pages/api/auth/[...nextauth]";

export const authMiddleware = (handler) => async (req, res) => {
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    return res.status(401).json({ message: "Chybí přihlášení" });
  }

  req.session = session;
  return handler(req, res);
};

import { lambda } from "../lambda/defipulse"

async function handler(__req, res) {
  // passing env vars as arguments due to a bug on GC functions where env vars
  // can not be accessed by imported functions
  const { statusCode, body } = await lambda(process.env.DEFI_PULSE_API_KEY)
  res.status(statusCode).send(body)
}

export default handler

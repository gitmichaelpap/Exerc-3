// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.status(200).json({ name: 'John Doe' })
}

// // req = HTTP incoming message, res = HTTP server response
// export default function handler(req, res) {
//   // ...
// }
// import { NextApiRequest, NextApiResponse } from "next";
// import { google } from "googleapis";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method !== "GET") {
//     return res.status(405).json({ message: "Method not allowed" });
//   }

//   // Create credentials object from environment variables
//   const credentials = {
//     type: "service_account",
//     project_id: "ckash-455815",
//     private_key_id: process.env.NEXT_PUBLIC_PRIVATE_ID!,
//     private_key: process.env.NEXT_PUBLIC_PRIVATE_KEY!,
//     client_email: process.env.NEXT_PUBLIC_CLIENT_EMAIL!,
//     client_id: process.env.NEXT_PUBLIC_CLIENT_ID!,
//     auth_uri: process.env.NEXT_PUBLIC_AUTH_URI!,
//     token_uri: process.env.NEXT_PUBLIC_TOKEN_URI!,
//     auth_provider_x509_cert_url: process.env.NEXT_PUBLIC_AUTH_PROVIDER_CERT!,
//     client_x509_cert_url: process.env.NEXT_PUBLIC_CLIENT_URL!,
//     universe_domain: process.env.NEXT_PUBLIC_UNIVERSE_DOMAIN!,
//   };

//   const auth = new google.auth.GoogleAuth({
//     credentials,
//     scopes: ["https://www.googleapis.com/auth/spreadsheets"],
//   });

//   const sheets = google.sheets({ version: "v4", auth });

//   const range = "Sheet1!A1:G17"; // Read range - 6 columns (A-F) and 17 rows

//   try {
//     const response = await sheets.spreadsheets.values.get({
//       spreadsheetId: process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID,
//       range,
//     });

//     // Transform array of arrays to array of objects
//     const transformedData = [];
//     if (response.data.values && response.data.values.length > 0) {
//       const headers = response.data.values[0]; // First row contains column names
//       const dataRows = response.data.values.slice(1); // Skip header row

//       transformedData.push(
//         ...dataRows.map((row: any[]) => {
//           const obj: any = {};
//           headers.forEach((header: string, index: number) => {
//             obj[header.trim()] = row[index] || "";
//           });
//           return obj;
//         })
//       );
//     }

//     return res.status(200).json({ data: transformedData });
//   } catch (error) {
//     console.error("Error reading spreadsheet:", error);
//     return res.status(500).json({ data: [] });
//   }
// }

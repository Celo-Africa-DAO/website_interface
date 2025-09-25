export const googleCredentials = {
  type: "service_account",
  project_id: "ckash-455815",
  private_key_id: process.env.NEXT_PUBLIC_PRIVATE_ID!,
  private_key: process.env.NEXT_PUBLIC_PRIVATE_KEY!,
  client_email: process.env.NEXT_PUBLIC_CLIENT_EMAIL!,
  client_id: process.env.NEXT_PUBLIC_CLIENT_ID!,
  auth_uri: process.env.NEXT_PUBLIC_AUTH_URI!,
  token_uri: process.env.NEXT_PUBLIC_TOKEN_URI!,
  auth_provider_x509_cert_url: process.env.NEXT_PUBLIC_AUTH_PROVIDER_CERT!,
  client_x509_cert_url: process.env.NEXT_PUBLIC_CLIENT_URL!,
  universe_domain: process.env.NEXT_PUBLIC_UNIVERSE_DOMAIN!,
};
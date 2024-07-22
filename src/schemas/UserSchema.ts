export interface RootObject {
  session: Session;
  user_metadata: Usermetadata;
}

interface Usermetadata {
  birth_date: string;
  email: string;
  email_verified: boolean;
  first_name: string;
  last_name: string;
  phone_verified: boolean;
  sub: string;
}

interface Session {
  access_token: string;
  expires_at: number;
  expires_in: number;
  refresh_token: string;
  token_type: string;
  user: User;
}

interface User {
  aud: string;
  created_at: string;
  email: string;
  email_confirmed_at: string;
  id: string;
  is_anonymous: boolean;
  last_sign_in_at: string;
  phone: string;
  role: string;
  updated_at: string;
}

export interface UserSchema {
  session?: Session;
  user_metadata: Usermetadata;
}

interface Usermetadata {
  id: string;
  birth_date: string;
  email: string;
  first_name: string;
  last_name: string;
}

interface Session {
  access_token: string;
  refresh_token: string;
}

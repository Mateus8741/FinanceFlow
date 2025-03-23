export interface UserSchema {
  user_metadata: Usermetadata;
}

interface Usermetadata {
  id: string;
  birth_date: string;
  email: string;
  first_name: string;
  last_name: string;
}

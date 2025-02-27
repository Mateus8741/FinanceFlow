import { useStore } from '@/store/useStore';

interface SignInData {
  email: string;
  password: string;
}

export async function signIn({ email, password }: SignInData) {
  // Simple mock authentication - in a real app, you'd want proper auth
  if (email && password) {
    const mockUser = {
      id: '1',
      email,
      created_at: new Date().toISOString(),
    };
    useStore.getState().setUser(mockUser);
    return { data: { user: mockUser }, error: null };
  }
  return { data: null, error: 'Invalid credentials' };
}

export async function signOut() {
  useStore.getState().signOut();
  return { error: null };
}

interface SignUpData {
  email: string;
  password: string;
  name: string;
}

export async function signUp({ email, password, name }: SignUpData) {
  if (email && password && name) {
    const mockUser = {
      id: '1',
      email,
      name,
      created_at: new Date().toISOString(),
    };
    useStore.getState().setUser(mockUser);
    return { data: { user: mockUser }, error: null };
  }
  return { data: null, error: 'Invalid data' };
}

export async function resetPassword(email: string) {
  // Mock password reset
  return { data: { message: 'Password reset email sent' }, error: null };
}

interface BillData {
  name: string;
  value: number;
  dueDate: string;
  paid: boolean;
  userId: string;
}

export async function createBill(billData: BillData) {
  const bills = useStore.getState().bills;
  const newBill = { ...billData, id: Date.now().toString() };
  useStore.getState().setBills([...bills, newBill]);
  return { data: newBill, error: null };
}

interface UpdatePasswordData {
  password: string;
}

export async function updatePassword({ password }: UpdatePasswordData) {
  const user = useStore.getState().user;
  if (user) {
    useStore.getState().setUser({ ...user, password });
    return { data: { user }, error: null };
  }
  return { data: null, error: 'User not found' };
}

interface UpdateUserData {
  name: string;
}

export async function updateUser({ name }: UpdateUserData) {
  const user = useStore.getState().user;
  if (user) {
    useStore.getState().setUser({ ...user, name });
    return { data: { user }, error: null };
  }
  return { data: null, error: 'User not found' };
}

interface CardData {
  name: string;
  limit: number;
  dueDate: string;
  closingDate: string;
  userId: string;
}

export async function createCard(cardData: CardData) {
  const cards = useStore.getState().cards;
  const newCard = { ...cardData, id: Date.now().toString() };
  useStore.getState().setCards([...cards, newCard]);
  return { data: newCard, error: null };
}

export async function getTransactions() {
  const transactions = useStore.getState().transactions;
  return { data: transactions, error: null };
}

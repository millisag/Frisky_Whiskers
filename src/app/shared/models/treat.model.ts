export interface Treat {
  id: string;
  title: string;
  brand: string;
  type: string; // e.g., wet or dry
  calories: number; // calories per treat
  notes?: string;
}

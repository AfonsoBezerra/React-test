export interface iEventSubmit {
  titulo: string;
  descricao: string;
  data: string;
  cor: string;
}
export interface iEventResponse extends iEventSubmit {
  id: number;
  created_at: null;
  updated_at: null;
  deleted_at: null;
}

export interface iEvent {
  id: number;
  title: string;
  description: string;
  date: string;
  color: string;
}

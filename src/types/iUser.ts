export interface iUserToken {
  token: string;
}

export interface iUserResponse {
  iss: string;
  iat: number;
  exp: number;
  nbf: number;
  jti: string;
  sub: number;
  prv: string;
  usr: {
    nome: string;
    id: number;
    tipo: 'ADM';
    email: string;
    status: 'ATIVADO';
  };
}

export interface iUser {
  email: string;
  name: string;
  id: number;
}

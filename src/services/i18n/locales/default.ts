import type { iI18n } from 'types/iI18n';

export const PTBR: iI18n = {
  header: {
    goBack: 'Voltar página',
    logout: 'Sair da conta',
  },

  signIn: {
    title: 'Entrar',
    description: 'Insira seus dados abaixo.',
    button: 'Entrar',
    fields: {
      email: 'Endereço de Email',
      password: 'Senha',
      remember: 'Lembre-se de mim',
    },
  },
  dashboard: {
    buttonAdd: 'Adicionar Eventos +',
    logged: 'Você está logado como:',
    table: {
      date: 'Data do Evento',
      title: 'Titulo do Evento',
      actions: {
        deleteOne: {
          label: 'Deletar evento',
          cancel: 'Cancelar',
          confirm: 'Sim, deletar evento!',
          desc: 'Ao deletar esse evento você não poderá recupera-lo!',
          sure: 'Você tem certeza?',
          finished: 'Evento deletado com sucesso!',
        },
        deleteSelects: {
          label: 'Deletar eventos selecionados',
          cancel: 'Cancelar',
          confirm: 'Sim, deletar eventos!',
          desc: 'Ao deletar os eventos você não poderá recupera-los!',
          sure: 'Você tem certeza?',
          finished: 'Eventos deletados com sucesso!',
        },
        edit: 'Editar evento',
      },
    },
  },
  event: {
    fields: {
      color: 'Cor do Evento',
      date: 'Data do Evento',
      description: 'Descrição do Evento',
      time: 'Horário do Evento',
      title: 'Titulo do Evento',
    },
    submit: 'Submeter Evento',
  },

  confirm: {
    delete: {
      one: 'Você deseja realmente deletar esse item?',
      selects: 'Você deseja realmente deletar os itens selecionados?',
    },
  },
  alert: {
    errorForbidden: ':/ Ops... Parece que sua sessão expirou',
    eventCreate: 'Evento criado com sucesso!',
    eventUpdate: 'Evento atualizado com sucesso!',
    error: ':/ Ops... Algo de errado não está certo',
    noneSelected: 'Nenhum item foi selecionado!',
    errorCredentials: 'Credenciais erradas! Por favor tente novamente...',
  },
};

export interface iI18n {
  header: {
    goBack: string;
    logout: string;
  };

  signIn: {
    title: string;
    description: string;
    fields: {
      email: string;
      password: string;
      remember: string;
    };
    button: string;
  };
  dashboard: {
    logged: string;
    buttonAdd: string;
    table: {
      title: string;
      date: string;

      actions: {
        deleteSelects: {
          label: string;
          sure: string;
          desc: string;
          confirm: string;
          cancel: string;
          finished: string;
        };
        deleteOne: {
          label: string;
          sure: string;
          desc: string;
          confirm: string;
          cancel: string;
          finished: string;
        };
        edit: string;
      };
    };
  };
  event: {
    fields: {
      title: string;
      date: string;
      time: string;
      color: string;
      description: string;
    };
    submit: string;
  };

  confirm: {
    delete: {
      selects: string;
      one: string;
    };
  };
  alert: {
    error: string;
    eventCreate: string;
    eventUpdate: string;
    noneSelected: string;
    errorForbidden: string;
    errorCredentials: string;
  };
}

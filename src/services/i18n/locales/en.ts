import type { iI18n } from 'types/iI18n';

export const EN: iI18n = {
  header: {
    goBack: 'Back page',
    logout: 'Logout',
  },

  signIn: {
    title: 'Sign in',
    description: 'Enter your details below.',
    button: 'Sign in',
    fields: {
      email: 'Email Address',
      password: 'Password',
      remember: 'Remember me',
    },
  },
  dashboard: {
    buttonAdd: 'Add Events +',
    logged: 'You have been logged has:',
    table: {
      date: 'Event Date',
      title: 'Event Title',
      actions: {
        deleteOne: {
          label: 'Delete event',
          cancel: 'Cancel',
          confirm: 'Yes, delete event!',
          desc: 'When you delete this event you will not be able to recover it!',
          sure: 'Are you sure?',
          finished: 'Event deleted successfully!',
        },
        deleteSelects: {
          label: 'Delete selected events',
          cancel: 'Cancel',
          confirm: 'Yes, delete events!',
          desc: 'When you delete the events you will not be able to recover them!',
          sure: 'Are you sure?',
          finished: 'Successfully deleted events!',
        },
        edit: 'Edit event.',
      },
    },
  },
  event: {
    fields: {
      color: 'Event Color',
      date: 'Event Date',
      description: 'Event description',
      time: 'Event Time',
      title: 'Event Title',
    },
    submit: 'Submit Event',
  },

  confirm: {
    delete: {
      one: 'You really want delete this item?',
      selects: 'You really want delete these selected items?',
    },
  },
  alert: {
    errorForbidden: ':/ Ops... It looks like your session has expired',
    eventCreate: 'Event created successfully!',
    eventUpdate: 'Event successfully updated!',
    error: ':/ Ops... Something is wrong!',
    noneSelected: 'No items were selected!',
    errorCredentials: 'Credentials wrong! Please try again...',
  },
};

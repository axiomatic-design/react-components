export const buttons = {
  primary: {
    backgroundColor: 'primary',
    color: 'white',
    fontFamily: 'body',
    border: 'default',
    borderColor: 'primary',
    borderRadius: 'default',
    fontWeight: 'bold',
    fontSize: 2,
    transition: 'all 0.3s ease-in-out',
    ':hover': {
      backgroundColor: 'primaryDark',
      borderColor: 'primaryDark',
    },
    pill: {
      fontSize: 2,
      fontWeight: 'bold',
      borderRadius: 'circle',
      transition: 'all 0.3s ease-in-out',
      ':hover': {
        backgroundColor: 'primaryDark',
        borderColor: 'primaryDark',
      },
    },
  },
  outline: {
    backgroundColor: 'transparent',
    borderRadius: 'default',
    fontSize: 2,
    color: 'primary',
    fontFamily: 'body',
    transition: 'all 0.3s ease-in-out',
    border: 'default',
    fontWeight: 'bold',
    ':hover': {
      borderColor: 'primaryDark',
      color: 'primaryDark',
    },
  },
};

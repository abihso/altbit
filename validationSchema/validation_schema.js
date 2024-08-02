
export const createUserValidation = {
  first_name: {
    isString: "must be a string",
    notEmpty: "must not be empty",
    isLength: {
      options: {
        min: 1,
      },
    },
  },

  last_name: {
    isString: "must be a string",
    notEmpty: "must not be empty",
    isLength: {
      options: {
        min: 1,
      },
    },
  },

  middle_name: {
    isString: "must be a string",
    notEmpty: "must not be empty",
    isLength: {
      options: {
        min: 1,
      },
    },
  },
  password: {
    isString: "must be a string",
    notEmpty: "must not be empty",
    isLength: {
      options: {
        min: 1,
      },
    },
  },

  addmission: {
    isString: "must be a string",
    notEmpty: "must not be empty",
    isLength: {
      options: {
        min: 1,
      },
    },
  },
};
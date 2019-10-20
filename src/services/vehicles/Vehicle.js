const Sequelize = require("sequelize");
const db = require("../../config/database");

const Vehicle = db.define(
  "vehicle",
  {
    year: {
      type: Sequelize.SMALLINT,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "You must enter a year."
        },
        notNull: {
          msg: "You must enter a year."
        },
        len: {
          args: [4, 4],
          msg: "Year must be a 4 digit number."
        },
        isInt: {
          msg: "Year must be a number."
        }
      }
    },
    make: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "You must enter a make."
        },
        notNull: {
          msg: "You must enter a make."
        }
      }
    },
    model: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "You must enter a model."
        },
        notNull: {
          msg: "You must enter a model."
        }
      }
    },
    trim: {
      type: Sequelize.STRING
    },
    price: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "You must enter a price."
        },
        notNull: {
          msg: "You must enter a price."
        },
        len: {
          args: [1, 10],
          msg: "Price must be between 1 and 10 characters."
        },
        isInt: {
          msg: "Price must be a number."
        }
      }
    },
    mileage: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "You must enter a mileage."
        },
        notNull: {
          msg: "You must enter a mileage."
        },
        len: {
          args: [1, 10],
          msg: "Mileage must be between 1 and 10 characters."
        },
        isInt: {
          msg: "Mileage must be a number."
        }
      }
    },
    engine: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "You must enter a engine config."
        },
        notNull: {
          msg: "You must enter a engine config."
        }
      }
    },
    transmission: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "You must enter a transmission config."
        },
        notNull: {
          msg: "You must enter a transmission config."
        }
      }
    },
    driveline_type: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "You must enter a driveline type."
        },
        notNull: {
          msg: "You must enter a model driveline type."
        }
      }
    },
    shop_notes: {
      type: Sequelize.TEXT,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "You must enter a description."
        },
        notNull: {
          msg: "You must enter a description."
        }
      }
    },
    seller_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Seller id not linked."
        },
        notNull: {
          msg: "Seller id not linked."
        },
        isInt: {
          msg: "Seller id is not a number."
        }
      }
    },
    fuel_type: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Fuel type must be selected."
        },
        notNull: {
          msg: "Fuel type must be selected."
        }
      }
    },
    color_exterior: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "You must enter an exterior color."
        },
        notNull: {
          msg: "You must enter an exterior color."
        }
      }
    },
    color_interior: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "You must enter an interior color."
        },
        notNull: {
          msg: "You must enter an interior color"
        }
      }
    },
    dyno_hp: {
      type: Sequelize.SMALLINT,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "You must enter hp rating."
        },
        notNull: {
          msg: "You must enter hp rating."
        },
        isInt: {
          msg: "You must enter a hp amount and it must be a number."
        }
      }
    },
    dyno_t: {
      type: Sequelize.SMALLINT,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "You must enter torque amount."
        },
        notNull: {
          msg: "You must enter torque amount."
        },
        isInt: {
          msg: "You must enter a torque amount and it must be a number."
        }
      }
    },
    image_m: {
      type: Sequelize.TEXT,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "You must enter a image path."
        },
        notNull: {
          msg: "You must enter a image path"
        }
      }
    },
    image_s: {
      type: Sequelize.TEXT,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "You must enter a image path."
        },
        notNull: {
          msg: "You must enter a image path"
        }
      }
    },
    isSold: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Sold must be true or false."
        },
        notNull: {
          msg: "Sold must be true or false."
        }
      }
    },
    isConsignment: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Consignment must be true or false."
        },
        notNull: {
          msg: "Consignment must be true or false."
        }
      }
    },
    wasImproved: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Was improved must be true or false."
        },
        notNull: {
          msg: "Was improved must be true or false."
        }
      }
    },
    views: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Views was not set."
        },
        notNull: {
          msg: "Views was not set."
        }
      }
    }
  },
  {
    timestamps: true
  }
);

module.exports = Vehicle;

const Sequelize = require("sequelize");
const db = require("../../config/database");

const User = db.define(
  "user",
  {
    username: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          // No empty strings
          msg: "You must enter a username."
        },
        notNull: {
          // No null values
          msg: "You must enter a username."
        },
        len: {
          args: [6, 20],
          msg: "Username must be 6 to 20 characters in length."
        },
        isAlpha: {
          msg: "Username must only contains letters."
        }
      }
    },
    hash: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          // No empty strings
          msg: "You must enter a password."
        },
        notNull: {
          // No null values
          msg: "You must enter a password."
        }
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            // No empty strings
            msg: "You must enter an email."
          },
          notNull: {
            // No null values
            msg: "You must enter an email."
          }
        }
      },
      role: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            // No empty strings
            msg: "You must enter a role."
          },
          notNull: {
            // No null values
            msg: "You must enter a role."
          }
        }
      }
    }
  },
  {
    timestamps: true
  }
);

module.exports = User;

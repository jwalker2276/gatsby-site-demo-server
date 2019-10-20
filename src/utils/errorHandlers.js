// This method handles async errors for routes
exports.catchErrors = fx => {
  return function(req, res, next) {
    return fx(req, res, next).catch(next);
  };
};

// This method handles 404 errors
exports.notFound = (req, res, next) => {
  const error = new Error("Route not found!");
  error.status = 404;
  next(error);
};

// This method handles validation errors
exports.validationErrors = (err, req, res, next) => {
  //! Check if this is an validation error
  // err.errors will be undefined if NOT a valiation error
  if (!err.errors) return next(err);
  // Only show the validations messages
  const errorsToDisplay = err.errors.map(errObj => errObj.message);
  // Return the errors
  res.status(400).json(errorsToDisplay);
};

// This method handles all other errors in the development mode
exports.devErrors = (err, req, res, next) => {
  err.stack = err.stack || "";
  const errorDetails = {
    message: err.message,
    status: err.status,
    stack: err.stack
  };
  // TODO : render an error component with details
  res.status(err.status || 500);
  res.json(errorDetails);
};

// This method handles all other errors in the production mode
exports.prodErrors = (err, req, res, next) => {
  res.status(err.status || 500);
  // TODO : render an error component with details
  res.json(err.message);
};

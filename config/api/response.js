const response = (status, data, message, res) => {
  res.status(status).json({
    payload: {
      status: status,
      content: data,
      message: message,
    },
  });
};

export default response;

const app = require('./server');
const PORT = 3000 || process.env.PORT;

const init = async () => {
  try {
    app.listen(PORT, () => {
      console.log(
        `
                Listening on port ${PORT}
                
                http://localhost:${PORT}`
      );
    });
  } catch (error) {
    console.log(`There was an error starting up!`, error);
  }
};

init();

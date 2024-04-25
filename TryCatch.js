function readData() {
  try {
    blabla();
  } catch (err) {
    if (!(err instanceof SyntaxError)) {
      throw err;
    }
  }
}

try {
  readData();
} catch (err) {
  console.log("External catch got: " + err);
}

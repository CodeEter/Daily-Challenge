try {
  console.log("try");
  throw new Error("an Error");
} catch(err) {
  if("can't handle the error"){
    throw err;
  }
  console.log("err");
} finally {
  console.log("finally");
}
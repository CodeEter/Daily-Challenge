try {
  console.log("try");
  if (confirm('Make an error?')) BAD_CODE();
} catch (err) {
  console.log("catch");
} finally {
  console.log("finally");
}
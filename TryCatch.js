let json = "{bad json}";

try {
    let user = JSON.parse(json);
    console.log(user);
} catch (err) {
    console.log(err.name);
    console.log(err.message);
}
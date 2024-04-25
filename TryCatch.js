let json = '{"age":27}';

try {
    let user = JSON.parse(json);

    if(!user.name) {
        throw new SyntaxError("Incomplete data:no name");
    }

    alert(user.name);
} catch(err) {
    console.log(err.name);
    console.log("JSON Error: " + err.message );
}
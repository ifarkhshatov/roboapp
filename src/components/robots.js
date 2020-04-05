function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }
 

 export const robots = [];
for (var i = 0; i < 200; i++) {
    robots[i] = {
        id: i,
        name: makeid(10),
        username: makeid(10),
        email: makeid(10)
    }
}

export function uuid(a) {
    let first = true;
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        let r = Math.random() * 16 | 0, v;

        if(first) {
            first = false;
            v = String.fromCharCode(97 + Math.floor(Math.random() * 26));
        } else {
            if(c === 'x') {
                v = r;
            } else {
                v = (r & 0x3 | 0x8);
            }
        }

        return v.toString(16);
    });
}
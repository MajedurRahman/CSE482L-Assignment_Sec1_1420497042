function prefix(string, length) {
    if (length) {
        return string.slice(0, parseInt(length));
    } else {
        return string.slice(0, 1);
    }

}


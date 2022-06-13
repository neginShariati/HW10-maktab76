//The difference is that if an error happens in f1, then it is handled by .catch
promise.then(f1).catch(f2);


//.then/catch. So in the first example, there’s a catch below, and in the second one there isn’t, so the error is unhandled.
promise.then(f1, f2);
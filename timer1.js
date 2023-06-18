const arguments = process.argv.slice(2, process.argv.length);

arguments.forEach(element => {
  if (element > 0 && !isNaN(element)) {
    setTimeout(() => {
      process.stdout.write('\x07');

    }, element * 1000);
  }

});

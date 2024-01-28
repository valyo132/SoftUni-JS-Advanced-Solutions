function processCommands(commands) {
    let commandProcessor = (function () {
      let result = [];
        return {
            add: newText => result.push(newText),
            remove: value => {
                for(i = 0; i<result.length; i++){
                  if(result[i] == value) {
                    result.splice(result.indexOf(value), 1);
                  }
                }
              },
            print: () => console.log(result.join(','))
        }
    }());

    for(let cmd of commands){
        let[cmdName, arg] = cmd.split(' ');
        commandProcessor[cmdName](arg);
    }
}

processCommands(['add hello', 'add again', 'remove hello', 'add again', 'print']);
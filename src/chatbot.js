document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('terminal').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleCommand();
        }
    });

    function handleCommand() {
        const inputElement = document.getElementById('userInput');
        const inputValue = inputElement.value.trim();
        const [rootCommand, ...args] = inputValue.split(' '); 
        const command = rootCommand.toLowerCase();
        const argument = args.join(' ');

        let response;

        if (command === 'echo') {
            response = argument;
        } else if (command in commands) {
            response = commands[command];
        } else {
            response = `Command not found: ${command}`;
        }
        if (command === 'clear') {
            clearTerminal();
        } else {
            displayCommandAndResponse(inputValue, response);
        }

        inputElement.value = '';
    }

    function displayCommandAndResponse(command, response) {
        const terminal = document.getElementById('terminal');
        const commandLine = document.createElement('div');
        commandLine.textContent = `$ ${command}`;
        commandLine.classList.add('terminal-line');
        terminal.appendChild(commandLine);
        if (response) {
            const responseLine = document.createElement('div');
            responseLine.textContent = response;
            responseLine.classList.add('terminal-line');
            terminal.appendChild(responseLine);
        }

        // Create new input line
        createNewInputLine();
        terminal.scrollTop = terminal.scrollHeight;
    }

    function clearTerminal() {
        const terminal = document.getElementById('terminal');
        
        // Remove all children of terminal
        while (terminal.firstChild) {
            terminal.removeChild(terminal.firstChild);
        }

        // Create new input line
        createNewInputLine();
        terminal.scrollTop = terminal.scrollHeight;
    }

    function createNewInputLine() {
        const terminal = document.getElementById('terminal');
        const inputLineDiv = document.createElement('div');
        inputLineDiv.classList.add('input-line');
        //dollar sign span create dolaahhh sigh yeh
        const dollarSignSpan = document.createElement('span');
        dollarSignSpan.textContent = '$ ';
        inputLineDiv.appendChild(dollarSignSpan);

        // Create input element
        const inputElement = document.createElement('input');
        inputElement.type = 'text';
        inputElement.id = 'userInput';
        inputElement.autofocus = true;
        inputLineDiv.appendChild(inputElement);

        // Remove old input line (if any)
        const oldInputLine = document.querySelector('.input-line');
        if (oldInputLine) {
            oldInputLine.remove();
        }

        // Append new input line to terminal
        terminal.appendChild(inputLineDiv);

        // Focus the new input element
        inputElement.focus();
    }
    createNewInputLine();
});

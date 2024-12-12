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
        } else if (command === 'date') {
            response = formatCurrentDate();   
        } 
        else if (inputValue in commands) {
            response = commands[inputValue];
        } else {
            response = `Command not found: ${inputValue}`;
        }

        // Handle special commands
        if (inputValue === 'clear') {
            clearTerminal();
        } else {
            // Create and append the command and response
            displayCommandAndResponse(inputValue, response);

            // Handle the close command to close the tab
            if (inputValue === 'close') {
                setTimeout(() => {
                    window.close();
                }, 500); // Delay to show the closing message
            }
        }

        // Clear the input value
        inputElement.value = '';
    }

    function formatCurrentDate() {
        const now = new Date();
        const options = { 
            weekday: 'short', 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric', 
            hour: '2-digit', 
            minute: '2-digit', 
            second: '2-digit', 
            hour12: true, 
            timeZoneName: 'short' 
        };
        const formattedDate = now.toLocaleDateString('en-US', options);
        return formattedDate;
    }

    function displayCommandAndResponse(command, response) {
        const terminal = document.getElementById('terminal');

        // Create command line and apply CSS class
        const commandLine = document.createElement('div');
        commandLine.textContent = `$ ${command}`;
        commandLine.classList.add('terminal-line');
        terminal.appendChild(commandLine);

        // Create response line and apply CSS class (if response is not empty)
        if (response) {
            const responseLine = document.createElement('pre');
            responseLine.textContent = response;
            responseLine.classList.add('terminal-line');
            terminal.appendChild(responseLine);
        }

        // Create new input line
        createNewInputLine();

        // Scroll to the bottom of the terminal
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

        // Scroll to the bottom of the terminal
        terminal.scrollTop = terminal.scrollHeight;
    }

    function createNewInputLine() {
        const terminal = document.getElementById('terminal');

        // Create input line div
        const inputLineDiv = document.createElement('div');
        inputLineDiv.classList.add('input-line');

        // Create span for the $
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

    // Initialize first input line on load
    createNewInputLine();
});

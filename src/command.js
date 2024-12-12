const commands = {
    help: 'Available commands: date, ls, clear, echo, education, experience, about...',
    education: 'I hold a Bachelor\'s degree in Computer Science and currently am doing MSc - Informatikk at University of Oslo.',
    experience: 'I have worked at REDACTED REDACTED REDACTED.',
    about: 'I am groot. I am groot. I am groot. I am groot. I am groot. I am groot. ',
    whoami: 'not root :P, you are www-data',
    clear: '',
    'ls':'src       assets      data        please_smile.txt        banner',
    pwd:'/home/www-data',
    echo:'',
    cd: 'permission denied',
    cat: 'permission denied',
    'ls -lrt': `drwxr-xr-x  4 user  www-data  128 Dec  9 19:52 src\n` +
                `drwxr-xr-x  3 user  www-data   96 Dec  9 19:52 assets\n` +
                `drwxr-xr-x  2 user  www-data   64 Dec  9 19:52 data\n` +
                `-rwxr-xr-x  2 user  www-data   64 Dec  9 19:52 please_smile.txt\n` +
                `-rwxr-xr-x  2 user  www-data   64 Dec  9 19:52 banner`,
    'ls -la': `drwxr-xr-x  4 user  www-data  128 Dec  9 19:52 src\n` +
                `drwxr-xr-x  3 user  www-data   96 Dec  9 19:52 assets\n` +
                `drwxr-xr-x  2 user  www-data   64 Dec  9 19:52 data\n` +
                `-rwxr-xr-x  2 user  www-data   64 Dec  9 19:52 please_smile.txt\n` +
                `-rwxr-xr-x  2 user  www-data   64 Dec  9 19:52 banner`,
    'la': `src\n` +
                `assets\n` +
                `data\n` +
                `please_smile.txt\n` +
                `banner`,
    'ps': `PID TTY          TIME CMD\n` + 
            `1586 pts/0    00:00:00 bash\n` +
            `5117 pts/0    00:00:00 ps`  
};
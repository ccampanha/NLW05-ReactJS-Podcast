export function convertDurationToTimeString(duration: number) {
    const hours = Math.floor(duration / 3600); // arredonda p/ baixo
    const minutes = Math.floor((duration % 3600) / 60);
    const seconds = duration % 60;

    const timeString = [hours, minutes, seconds]
        .map(unit => String(unit).padStart(2, '0'))
        // quando a string tem apenas um caractere adiciona um 0 na frente
        .join(':') //une as strings do array com ":""

    return timeString;
}
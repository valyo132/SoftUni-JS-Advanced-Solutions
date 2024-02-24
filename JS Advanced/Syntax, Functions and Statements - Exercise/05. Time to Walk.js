function solve(steps, footprint, speed){
    const distance = steps * footprint;
    const restTime = Math.floor(distance / 500); // Calculate rest time in minutes
    const totalTimeInHours = distance / (speed * 1000); // Calculate total time in hours
    const totalTimeInMinutes = totalTimeInHours * 60 + restTime; // Convert total time to minutes

    const hours = Math.floor(totalTimeInMinutes / 60);
    const minutes = Math.floor(totalTimeInMinutes % 60);
    const seconds = Math.floor((totalTimeInMinutes * 60) % 60) + 1;

    // Format the result
    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');

    console.log(`${formattedHours}:${formattedMinutes}:${formattedSeconds}`);
}

solve(4000, 0.60, 5);
class FlightBookingSystem{
    constructor(agencyName){
        this.agencyName = agencyName;
        this.flights = [];
        this.bookings = [];
        this.bookingsCount = 0;
    }

    addFlight(flightNumber, destination, departureTime, price){
        let obj = this.flights.find(x => x.flightNumber == flightNumber);

        if (obj){
            return `Flight ${flightNumber} to ${destination} is already available.`;
        }

        this.flights.push({flightNumber, destination, departureTime, price});
        return `Flight ${flightNumber} to ${destination} has been added to the system.`;
    }

    bookFlight(passengerName, flightNumber){
        let obj = this.flights.find(x => x.flightNumber == flightNumber);

        if (!obj){
            return `Flight ${flightNumber} is not available for booking.`;
        }

        this.bookings.push({passengerName, flightNumber});
        this.bookingsCount++;
        return `Booking for passenger ${passengerName} on flight ${flightNumber} is confirmed.`;
    }

    cancelBooking(passengerName, flightNumber){
        let obj = this.bookings.find(x => x.passengerName == passengerName && x.flightNumber == flightNumber);

        if (!obj){
            throw new Error(`Booking for passenger ${passengerName} on flight ${flightNumber} not found.`);
        }

        let index = this.bookings.indexOf(obj);
        this.bookings.splice(index, 1);
        this.bookingsCount--;
        return `Booking for passenger ${passengerName} on flight ${flightNumber} is cancelled.`;
    }

    showBookings(criteria){
        if (this.bookings.length == 0){
            throw new Error(`No bookings have been made yet.`);
        }

        let result = '';

        if (criteria == 'all'){
            result += `All bookings(${this.bookingsCount}):\n`;
            this.bookings.forEach(el => result += `${el.passengerName} booked for flight ${el.flightNumber}.\n`);
        } else if (criteria == 'cheap'){
                let allFliths = [];
                this.bookings.forEach(el => {
                    let curentFlights = this.flights.filter(x => x.flightNumber == el.flightNumber && x.price <= 100);
                    curentFlights.forEach(y => allFliths.push({flightNumber:y.flightNumber, passengerName:el.passengerName}));
                });

            if (allFliths.length == 0){
                return "No cheap bookings found.";
            }

            result += "Cheap bookings:\n";
            allFliths.forEach(el => result += `${el.passengerName} booked for flight ${el.flightNumber}.\n`);
        } else if (criteria == 'expensive'){
            let allFliths = [];
                this.bookings.forEach(el => {
                    let curentFlights = this.flights.filter(x => x.flightNumber == el.flightNumber && x.price > 100);
                    curentFlights.forEach(y => allFliths.push({flightNumber:y.flightNumber, passengerName:el.passengerName}));
                });

            if (allFliths.length == 0){
                return "No expensive bookings found.";
            }

            result += "Expensive bookings:\n";
            allFliths.forEach(el => result += `${el.passengerName} booked for flight ${el.flightNumber}.\n`);
        }

        return result.trim();
    }
}

// const system = new FlightBookingSystem("TravelWorld");
//   console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
//   console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
//   console.log(system.addFlight("CC303", "Chicago", "11:45 AM", 120));
//   console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));

// const system = new FlightBookingSystem("TravelWorld");
//   console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
//   console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
//   console.log(system.bookFlight("Alice", "AA101"));
//   console.log(system.bookFlight("Bob", "BB202"));
//   console.log(system.bookFlight("Charlie", "CC303"));

// const system = new FlightBookingSystem("TravelWorld");
//   console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
//   console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
//   console.log(system.bookFlight("Alice", "AA101"));
//   console.log(system.bookFlight("Bob", "BB202"));
//   console.log(system.cancelBooking("Alice", "AA101"));

// const system = new FlightBookingSystem("TravelWorld");
//   console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
//   console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
//   console.log(system.bookFlight("Alice", "AA101"));
//   console.log(system.bookFlight("Bob", "BB202"));
//   console.log(system.showBookings("all"));

// const system = new FlightBookingSystem("TravelWorld");
// console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
// console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
// console.log(system.bookFlight("Alice", "AA101"));
// console.log(system.bookFlight("Bob", "BB202"));
// console.log(system.showBookings("expensive"));
// console.log(system.showBookings("cheap"));

class App extends React.Component {  
    renderTableData() {
        return (this.state.cars.map(function (car, index) {
                    return <tr key={index}>
                            <th key={car.manufacturer}>{car.manufacturer}</th>
                            <th key={car.model}>{car.model}</th>
                            <th key={car.year}>{car.year}</th>
                        <th key={car.stock}>{car.stock}</th>
                        <th key={car.price}>{car.price}</th>
                        <th><button>Increment {index}</button></th>
                        </tr>
                    
                })         
        );      
    }

    constructor(props) {
        super(props);

        this.state = {
            cars: [
                {
                    "manufacturer": "Toyota",
                    "model": "Rav4",
                    "year": 2008,
                    "stock": 3,
                    "price": 8500
                },
    
                {
                    "manufacturer": "Toyota",
                    "model": "Camry",
                    "year": 2009,
                    "stock": 2,
                    "price": 6500
                },
    
                {
                    "manufacturer": "Toyota",
                    "model": "Tacoma",
                    "year": 2016,
                    "stock": 1,
                    "price": 22000
                },
    
                {
                    "manufacturer": "BMW",
                    "model": "i3",
                    "year": 2012,
                    "stock": 5,
                    "price": 12000
                },
    
                {
                    "manufacturer": "Chevy",
                    "model": "Malibu",
                    "year": 2015,
                    "stock": 2,
                    "price": 10000
                },
    
                {
                    "manufacturer": "Honda",
                    "model": "Accord",
                    "year": 2013,
                    "stock": 1,
                    "price": 9000
                },
    
                {
                    "manufacturer": "Hyundai",
                    "model": "Elantra",
                    "year": 2013,
                    "stock": 2,
                    "price": 7000
                },
    
                {
                    "manufacturer": "Chevy",
                    "model": "Cruze",
                    "year": 2012,
                    "stock": 2,
                    "price": 5500
                },
    
                {
                    "manufacturer": "Dodge",
                    "model": "Charger",
                    "year": 2013,
                    "stock": 2,
                    "price": 16000
                },
    
                {
                    "manufacturer": "Ford",
                    "model": "Mustang",
                    "year": 2009,
                    "stock": 1,
                    "price": 8000
                },
    
            ],

            direction: {
                year: 'asc'
            }
        };

        this.sortBy = this.sortBy.bind(this);
    }

    sortBy(key) {
        this.setState({
            cars: this.state.cars.sort((a, b) => 
            (this.state.direction[key] === 'asc'
                ? a[key] - b[key]
                : b[key] - a[key]
            )),

            direction: {
                [key]: this.state.direction[key] === 'asc'
                    ? 'desc'
                    : 'asc'
            }
        });
    }

    // increment() {
    //     this.setState((state) => {
    //         return { stock: state.stock + 1 }
    //     });
    // }

    // handleIncrement() {
    //     if (this.refs.myIncrement()) {
    //         this.increment();
    //     }
    // }
    

    render() {
        
        return (
            <div>
                <style>{`table, td, th{border: 1px solid black;}`}</style>
                <p>Modify this file.</p>
                <table>
                    <tbody>
                    <tr>
                        <th>manufacturer</th>
                        <th>model</th>
                        <th>
                            <button onClick={() => this.sortBy('year')}>year</button>
                        </th>
                        <th>stock</th>
                        <th>price</th>
                        <th>Option</th>
                    </tr>
                    {this.renderTableData()}
                    </tbody>                   
            </table>
          </div>
        );
    };
}

ReactDOM.render(<App />, document.getElementById("app"))
import { useDebugValue, useState } from "react";

const ANIMALS = ["bird", "dog", "cat", "rabbit", "reptile"];
const BREEDS = [];

const SearchParams = () => {
    const [location, setLocation] = useState("Petaluma, CA");
    const [animal, setAnimal] = useState("dog");
    const [breed, setBreed] = useState("");

    function updateLocation(e) {
        setLocation(e.target.value);
    }
    return (
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    <input id="location" onChange={updateLocation} value={location} placeholder="Location" />
                </label>
                <label htmlFor="animal">
                    Animal
                    <select
                        id="animal"
                        value={animal}
                        onChange={e => setAnimal(e.target.value)}
                        onBlur={e => setAnimal(e.target.value)}
                    >
                        <option />
                        {
                            ANIMALS.map(a => <option value={a} key={a}>{a}</option>)
                        }
                    </select>
                </label>
                <label htmlFor="breed">
                    Breed
                    <select
                        id="breed"
                        value={breed}
                        onChange={e => setBreed(e.target.value)}
                        onBlur={e => setBreed(e.target.value)}
                    >
                        <option />
                        {
                            BREEDS.map(b => <option value={b} key={b}>{b}</option>)
                        }
                    </select>
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SearchParams;
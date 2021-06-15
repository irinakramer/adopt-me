import { useState, useEffect } from "react";
import Pet from './Pet';
import useBreedList from "./useBreedList";

const ANIMALS = ["bird", "dog", "cat", "rabbit", "reptile"];

const SearchParams = () => {
    const [location, setLocation] = useState("");
    const [animal, setAnimal] = useState("dog");
    const [breed, setBreed] = useState("");
    const [pets, setPets] = useState([]);
    const [breeds] = useBreedList(animal);

    useEffect(() => {
        requestPets();
    }, []);

    async function requestPets() {
        const res = await fetch(
            `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
        );
        const json = await res.json();
        console.log(json);

        setPets(json.pets);
    }

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
                        disabled={!breeds.length}
                        id="breed"
                        value={breed}
                        onChange={e => setBreed(e.target.value)}
                        onBlur={e => setBreed(e.target.value)}
                    >
                        <option />
                        {
                            breeds.map(b => <option value={b} key={b}>{b}</option>)
                        }
                    </select>
                </label>
                <button>Submit</button>
            </form>
            {
                pets.map((pet) => (
                    <Pet name={pet.name} breed={pet.breed} location={pet.location} key={pet.id} />
                ))
            }
        </div>
    )
}

export default SearchParams;
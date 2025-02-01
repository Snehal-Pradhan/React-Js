import React from 'react';

function List() {
    const data = [{ "first_name": "Alameda", "email": "aspensly0@privacy.gov.au", "location": "US" },
    { "first_name": "Aubert", "email": "aenocksson1@fotki.com", "location": "PG" },
    { "first_name": "Cyrus", "email": "cbeels2@a8.net", "location": "CO" },
    { "first_name": "Lilith", "email": "lboumphrey3@webeden.co.uk", "location": "GY" },
    { "first_name": "Bren", "email": "bnoad4@auda.org.au", "location": "MV" },
    { "first_name": "Brittney", "email": "bnegus5@time.com", "location": "CO" },
    { "first_name": "Haven", "email": "hhellmer6@jugem.jp", "location": "CA" },
    { "first_name": "Gianina", "email": "gcrab7@amazon.de", "location": "CA" },
    { "first_name": "Emlynn", "email": "ekarpe8@goo.gl", "location": "BQ" },
    { "first_name": "Emerson", "email": "enoice9@biblegateway.com", "location": "VN" },
    { "first_name": "Aldo", "email": "acarthewa@hibu.com", "location": "US" },
    { "first_name": "Gaylord", "email": "gburgottb@imdb.com", "location": "ID" },
    { "first_name": "Else", "email": "eeeftingc@multiply.com", "location": "ID" },
    { "first_name": "Dorry", "email": "dpalind@bizjournals.com", "location": "US" },
    { "first_name": "Marco", "email": "mneye@opera.com", "location": "AU" }]

    return (
        <main>
            <ol key={Math.random()}>
                {data.map(({ first_name, location, email }) => (
                    <li>{first_name}  -  {location}  -  {email}</li>
                ))}
            </ol>
        </main>
    );
}

export default List;
